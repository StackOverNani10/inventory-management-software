import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
    try {
        const unit = await db.unit.findUnique({
            where: {
                id, //Found by Id
            },
        });
        return new NextResponse(JSON.stringify(unit), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the unit of the given id",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(request, { params: { id } }) {
    try {
        const { title, abbreviation } = await request.json();
        const unit = await db.unit.update({
            where: {
                id, //Found by Id
            },
            data: {
                title,
                abbreviation,
            },
        });
        return new NextResponse(JSON.stringify(unit), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to update the unit",
            },
            {
                status: 500,
            }
        );
    }
}
