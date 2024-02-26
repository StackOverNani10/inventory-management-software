import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title } = await request.json();
        const brand = await db.brand.create({
            data: {
                title,
            },
        });
        console.log(brand);
        return new NextResponse(JSON.stringify(brand), {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create the brand",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET(request) {
    try {
        const brands = await db.brand.findMany({
            orderBy: {
                createdAt: "desc", //Latest brand
            },
        });
        return new NextResponse(JSON.stringify(brands), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the brands",
            },
            {
                status: 500,
            }
        );
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        const deletedBrand = await db.brand.delete({
            where: {
                id,
            },
        });
        return new NextResponse(JSON.stringify(deletedBrand), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to delete the brand",
            },
            {
                status: 500,
            }
        );
    }
}