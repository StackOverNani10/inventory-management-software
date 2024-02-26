import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
    try {
        const stockTransfered = await db.transferStockAdjustment.findUnique({
            where: {
                id, //Found by Id
            },
            include: {
                item: true,
                givingWarehouse: true,
                receivingWarehouse: true,
            },
        });
        return new NextResponse(JSON.stringify(stockTransfered), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the stock Transfered",
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
            transferStockQty,
            givingWarehouseId,
            receivingWarehouseId,
            notes,
        } = await request.json();
        const stockTransfered = await db.transferStockAdjustment.update({
            where: {
                id, //Found by Id
            },
            data: {
                referenceNumber,
                itemId,
                transferStockQty,
                givingWarehouseId,
                receivingWarehouseId,
                notes,
            },
        });
        return new NextResponse(JSON.stringify(stockTransfered), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to update the stock Transfered",
            },
            {
                status: 500,
            }
        );
    }
}
