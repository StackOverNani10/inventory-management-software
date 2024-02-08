import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
    try {
        const brand = await db.brand.findUnique({
            where: {
                id      //Found by Id
            },
        });
        return new NextResponse(
            JSON.stringify(brand),
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