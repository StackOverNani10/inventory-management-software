import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, location, description, type } = await request.json();
        const warehouse = await db.warehouse.create({
            data: {
                title,
                location,
                description,
                warehouseType: type,
            },
        });
        console.log(warehouse);
        return new NextResponse(JSON.stringify(warehouse), {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create the warehouse",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET(request) {
    try {
        const warehouses = await db.warehouse.findMany({
            orderBy: {
                createdAt: "desc", //Latest warehouse
            },
        });
        return new NextResponse(JSON.stringify(warehouses), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the warehouses",
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
        const deletedWarehouse = await db.warehouse.delete({
            where: {
                id,
            },
        });
        return new NextResponse(JSON.stringify(deletedWarehouse), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to delete the warehouse",
            },
            {
                status: 500,
            }
        );
    }
}