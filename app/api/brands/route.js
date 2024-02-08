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
        return new NextResponse(
            JSON.stringify(brand),
            {
                status: 201
            }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a brand"
        }, {
            status: 500
        });
    }
}

export async function GET(request) {
    try {
        const brands = await db.brand.findMany({
            orderBy: {
                createdAt: 'desc' //Latest brand
            },
        });
        return new NextResponse(
            JSON.stringify(brands),
            {
                status: 200
            }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch the brand"
        }, {
            status: 500
        });
    }
}