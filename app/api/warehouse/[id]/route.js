import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
    try {
        const warehouse = await db.warehouse.findUnique({
            where: {
                id, //Found by Id
            },
        });
        return new NextResponse(JSON.stringify(warehouse), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the warehouse of the given id",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(request, { params: { id } }) {
    try {
        const { title, location, warehouseType } = await request.json();
        const warehouse = await db.warehouse.update({
            where: {
                id, //Found by Id
            },
            data: {
                title,
                location,
                warehouseType,
            },
        });
        return new NextResponse(JSON.stringify(warehouse), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to update the warehouse",
            },
            {
                status: 500,
            }
        );
    }
}
