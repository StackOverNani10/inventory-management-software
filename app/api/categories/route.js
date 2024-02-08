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
        return new NextResponse(
            JSON.stringify(category),
            {
                status: 201
            }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create the category"
        }, {
            status: 500
        });
    }
}

export async function GET(request) {
    try {
        const categories = await db.category.findMany({
            orderBy: {
                createdAt: 'desc' //Latest category
            },
        });
        return new NextResponse(
            JSON.stringify(categories),
            {
                status: 200
            }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch the category"
        }, {
            status: 500
        });
    }
}