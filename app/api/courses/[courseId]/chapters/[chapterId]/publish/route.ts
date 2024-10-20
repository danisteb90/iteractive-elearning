import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
	req: Request,
	{ params }: { params: { courseId: string; chapterId: string } }
) {
	try {
		const { userId } = auth();

		if (!userId) {
			return new NextResponse("No autorizado", { status: 401 });
		}

		const courseOwner = await db.course.findUnique({
			where: {
				id: params.courseId,
				userId: userId,
			},
		});

		if (!courseOwner) {
			return new NextResponse("No autorizado", { status: 401 });
		}

		const chapter = await db.chapter.findUnique({
			where: {
				id: params.chapterId,
				courseId: params.courseId,
			},
		});

		const muxData = await db.muxData.findUnique({
			where: {
				chapterId: params.chapterId,
			},
		});

		if (
			!chapter ||
			!muxData ||
			!chapter.title ||
			!chapter.description ||
			!chapter.videoUrl
		) {
			return new NextResponse("Faltan campos requeridos", { status: 400 });
		}

		const publishedChapter = await db.chapter.update({
			where: {
				id: params.chapterId,
				courseId: params.courseId,
			},
			data: {
				isPublished: true,
			},
		});

		return NextResponse.json(publishedChapter);
	} catch (error) {
		console.log("[CHAPTER_PUBLISH]", error);
		return new NextResponse("Error interno del servidor", { status: 500 });
	}
}
