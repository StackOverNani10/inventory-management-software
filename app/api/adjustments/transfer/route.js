import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            referenceNumber,
            itemId,
            transferStockQty,
            givingWarehouseId,
            receivingWarehouseId,
            notes,
        } = await request.json();
        const stockTransfer = await db.transferStockAdjustment.create({
            data: {
                referenceNumber,
                itemId,
                transferStockQty: parseInt(transferStockQty),
                givingWarehouseId,
                receivingWarehouseId,
                notes,
            },
        });
        console.log(stockTransfer);
        return new NextResponse(JSON.stringify(stockTransfer), {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create the stock transfer",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET(request) {
    try {
        const stocksTransfered = await db.transferStockAdjustment.findMany({
            orderBy: {
                createdAt: "desc", //Latest stock Transfer
            },
            include: {
                item: true,
                givingWarehouse: true,
                receivingWarehouse: true,
            },
        });
        return new NextResponse(JSON.stringify(stocksTransfered), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the stocks transfered",
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
        const deletedStocksTransfered = await db.transferStockAdjustment.delete({
            where: {
                id,
            },
        });
        return new NextResponse(JSON.stringify(deletedStocksTransfered), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to delete the stocks transfered",
            },
            {
                status: 500,
            }
        );
    }
}