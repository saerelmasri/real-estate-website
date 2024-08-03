import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (
    request: Request,
    { params }: { params: { propertyId: string } }
) => {
    try {
        const { propertyId } = params;

        if (!propertyId) {
            return NextResponse.json(
                { error: "Missing required field" },
                { status: 400 }
            );
        }

        const result = await prisma.properties.findFirst({
            where: {
                id: propertyId,
            },
            include: {
                detail: true,
            },
        });
        return NextResponse.json({ data: result }, { status: 201 });
    } catch (error) {
        console.error("Error creating property:", error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return NextResponse.json({ error: "Database error" }, { status: 500 });
        }

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
};
