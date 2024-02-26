import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
    try {
        const stockAdded = await db.addStockAdjustment.findUnique({
            where: {
                id, //Found by Id
            },
            include: {
                item: true,
                receivingWarehouse: true,
            },
        });
        return new NextResponse(JSON.stringify(stockAdded), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the stock Added",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(request, { params: { id } }) {
    try {
        const {
            referenceNumber,
            itemId,
            addStockQty,
            receivingWarehouseId,
            notes,
        } = await request.json();
        const stockAdded = await db.addStockAdjustment.update({
            where: {
                id, //Found by Id
            },
            data: {
                referenceNumber,
                itemId,
                addStockQty,
                receivingWarehouseId,
                notes,
            },
        });
        return new NextResponse(JSON.stringify(stockAdded), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to update the stock Added",
            },
            {
                status: 500,
            }
        );
    }
}
