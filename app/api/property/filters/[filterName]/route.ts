import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";


export const GET = async (context: any) => {
    try {
        const { filterName } = context.params;

        if (!filterName) {
            return NextResponse.json({ error: 'Missing required field' }, { status: 400 });
        }

        const result = await prisma.properties.findMany({
            select: {
                [filterName]: true
            }
        });

        const dataArray = result.map((item: { [x: string]: any; }) => item[filterName])
        return NextResponse.json({ dataArray }, { status: 201 });

    } catch (error) {
        console.error('Error creating property:', error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return NextResponse.json({ error: 'Database error' }, { status: 500 });
        }

        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}