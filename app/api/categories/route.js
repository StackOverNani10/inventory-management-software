import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, description } = await request.json();
        const category = await db.category.create({
            data: {
                title,
                description,
            },
        });
        console.log(category);
        return new NextResponse(JSON.stringify(category), {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create the category",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET(request) {
    try {
        const categories = await db.category.findMany({
            orderBy: {
                createdAt: "desc", //Latest category
            },
        });
        return new NextResponse(JSON.stringify(categories), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the categories",
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
        const deletedCategory = await db.category.delete({
            where: {
                id,
            },
        });
        return new NextResponse(JSON.stringify(deletedCategory), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to delete the category",
            },
            {
                status: 500,
            }
        );
    }
}