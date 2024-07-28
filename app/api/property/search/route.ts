import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

type Filters = {
    price?: number;
    propertyUse?: string;
    location?: string;
    size?: number;
};

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const price = searchParams.get("price");
    const propertyUse = searchParams.get("propertyUse");
    const location = searchParams.get("location");
    const size = searchParams.get("size");
    try {
        const filters: Filters = {};
        if (price) filters.price = Number(price);
        if (propertyUse) filters.propertyUse = propertyUse;
        if (location) filters.location = location;
        if (size) filters.size = Number(size);

        const result = await prisma.properties.findMany({
            where: filters,
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
