import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req: Request, context: any) => {
    try {
        const { propertyId } = context.params;

        if (!propertyId) {
            return NextResponse.json({ error: 'Missing required field' }, { status: 400 });
        }

        const result = await prisma.properties.findFirst({
            where: {
                id: parseInt(propertyId, 10)
            },
            include: {
                detail: true
            }
        });
        return NextResponse.json({ data: result }, { status: 201 });
    } catch (error) {
        console.error('Error creating property:', error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return NextResponse.json({ error: 'Database error' }, { status: 500 });
        }

        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}