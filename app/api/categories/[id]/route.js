import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
    try {
        const category = await db.category.findUnique({
            where: {
                id, //Found by Id
            },
        });
        return new NextResponse(JSON.stringify(category), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the category of the given id",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(request, { params: { id } }) {
    try {
        const { title, description } = await request.json();
        const category = await db.category.update({
            where: {
                id, //Found by Id
            },
            data: {
                title,
                description,
            },
        });
        return new NextResponse(JSON.stringify(category), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to update the category",
            },
            {
                status: 500,
            }
        );
    }
}
