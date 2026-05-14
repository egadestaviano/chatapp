import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json([], { status: 200 }); // ⬅️ PENTING
    }

    const sessions = await prisma.session.findMany({
      where: {
        participantIds: {
          has: session.user.id,
        },
      },
      orderBy: {
        lastMessageAt: "desc",
      },
    });

    // Get participants for each session
    const sessionsWithParticipants = await Promise.all(
      sessions.map(async (s) => {
        const participants = await prisma.user.findMany({
          where: {
            id: { in: s.participantIds },
          },
          select: {
            id: true,
            name: true,
            picture: true,
            isOnline: true,
          },
        });
        return { ...s, participants };
      })
    );

    return NextResponse.json(sessionsWithParticipants);
  } catch (err) {
    console.error("GET /api/sessions error:", err);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const auth = await getServerSession(authOptions);
    if (!auth?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, isGroup, participantIds } = body;

    if (!isGroup) {
      return NextResponse.json({ error: "Only group sessions can be created via POST /api/sessions" }, { status: 400 });
    }

    if (!title || !participantIds || !Array.isArray(participantIds)) {
      return NextResponse.json({ error: "title and participantIds are required" }, { status: 400 });
    }

    // Ensure current user is in participants
    const uniqueIds = Array.from(new Set([...participantIds, auth.user.id]));

    if (uniqueIds.length < 3) {
      return NextResponse.json({ error: "Group needs at least 3 members" }, { status: 400 });
    }

    const newSession = await prisma.session.create({
      data: {
        title,
        isGroup: true,
        participantIds: uniqueIds,
        lastMessageAt: new Date(),
      },
    });

    const participants = await prisma.user.findMany({
      where: {
        id: { in: uniqueIds },
      },
      select: {
        id: true,
        name: true,
        picture: true,
        isOnline: true,
      },
    });

    return NextResponse.json({ ...newSession, participants });
  } catch (err) {
    console.error("POST /api/sessions error:", err);
    return NextResponse.json({ error: "Failed to create group" }, { status: 500 });
  }
}
