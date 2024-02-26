import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            referenceNumber,
            itemId,
            addStockQty,
            receivingWarehouseId,
            notes,
        } = await request.json();
        const addStock = await db.addStockAdjustment.create({
            data: {
                referenceNumber,
                itemId,
                addStockQty: parseInt(addStockQty),
                receivingWarehouseId,
                notes,
            },
        });
        console.log(addStock);
        return new NextResponse(JSON.stringify(addStock), {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create the add stock adjustment",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET(request) {
    try {
        const stocksAdded = await db.addStockAdjustment.findMany({
            orderBy: {
                createdAt: "desc", //Latest stock Added
            },
            include: {
                item: true,
                receivingWarehouse: true,
            },
        });
        return new NextResponse(JSON.stringify(stocksAdded), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the stocks added",
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
        const deletedStockAdded = await db.addStockAdjustment.delete({
            where: {
                id,
            },
        });
        return new NextResponse(JSON.stringify(deletedStockAdded), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to delete the stocks added",
            },
            {
                status: 500,
            }
        );
    }
}