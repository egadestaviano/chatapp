// app/api/sessions/[id]/route.ts
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await prisma.session.findUnique({
    where: { id },
  });
  if (!session) {
    return new Response(JSON.stringify({ error: "Session not found" }), { status: 404 });
  }

  // load participant user data
  const participants = await prisma.user.findMany({
    where: { id: { in: session.participantIds } },
    select: { id: true, name: true, picture: true, isOnline: true },
  });

  return new Response(JSON.stringify({ ...session, participants }), { status: 200 });
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const { title, addUserIds, removeUserIds } = body;

  const session = await prisma.session.findUnique({
    where: { id },
  });

  if (!session) {
    return new Response(JSON.stringify({ error: "Session not found" }), { status: 404 });
  }

  let updatedParticipantIds = [...session.participantIds];

  if (addUserIds && Array.isArray(addUserIds)) {
    updatedParticipantIds = Array.from(new Set([...updatedParticipantIds, ...addUserIds]));
  }

  if (removeUserIds && Array.isArray(removeUserIds)) {
    updatedParticipantIds = updatedParticipantIds.filter(pid => !removeUserIds.includes(pid));
  }

  if (updatedParticipantIds.length < 3) {
    return new Response(JSON.stringify({ error: "Group needs at least 3 members" }), { status: 400 });
  }

  const updatedSession = await prisma.session.update({
    where: { id },
    data: {
      title: title ?? session.title,
      participantIds: updatedParticipantIds,
    },
  });

  // Load participants
  const participants = await prisma.user.findMany({
    where: { id: { in: updatedSession.participantIds } },
    select: { id: true, name: true, picture: true, isOnline: true },
  });

  return new Response(JSON.stringify({ ...updatedSession, participants }), { status: 200 });
}