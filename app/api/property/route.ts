import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const { name, propertyUse, price, size, location, readyToMove, project, latitude, longitude, details, imageNumber } = body;

        if (!name || !propertyUse || !price || !size || !location || readyToMove === undefined || !project || !latitude || !longitude || !details || !imageNumber) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const result = await prisma.properties.create({
            data: {
                name,
                propertyUse,
                price,
                size,
                location,
                readyToMove,
                project,
                latitude,
                longitude,
                imageNumber,
                detail: {
                    create: details.map((detail: { detail: string; quantity: number; }) => ({
                        detail: detail.detail,
                        quantity: detail.quantity
                    }))
                }
            }
        });
        return NextResponse.json({ message: "Property was created successfully", data: result }, { status: 201 });
    } catch (error) {
        console.error('Error creating property:', error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            switch (error.code) {
                case 'P2002':
                    return NextResponse.json({ error: 'Duplicate field value violates unique constraint' }, { status: 409 });
                default:
                    return NextResponse.json({ error: 'Database error' }, { status: 500 });
            }
        }

        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export const GET = async () => {
    try {
        const result = await prisma.properties.findMany();
        return NextResponse.json({ data: result }, { status: 201 });
    } catch (error) {
        console.error('Error creating property:', error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return NextResponse.json({ error: error }, { status: 500 });
        }

        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
