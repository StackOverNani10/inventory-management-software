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
        const adjustment = await db.transferStockAdjustment.create({
            data: {
                referenceNumber,
                itemId,
                transferStockQty: parseInt(transferStockQty),
                givingWarehouseId,
                receivingWarehouseId,
                notes,
            },
        });
        console.log(adjustment);
        return new NextResponse(JSON.stringify(adjustment), {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create the adjustment",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET(request) {
    try {
        const adjustmentsTransferred = await db.transferStockAdjustment.findMany({
            orderBy: {
                createdAt: 'desc' //Latest adjustments Transferred
            },
        });
        return new NextResponse(
            JSON.stringify(adjustmentsTransferred),
            {
                status: 200
            }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch the adjustments Transferred"
        }, {
            status: 500
        });
    }
}