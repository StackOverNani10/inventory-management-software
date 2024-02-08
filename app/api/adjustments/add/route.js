import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { referenceNumber, itemId, addStockQty, receivingWarehouseId, notes } =
            await request.json();
        const adjustment = await db.addStockAdjustment.create({
            data: {
                referenceNumber,
                itemId,
                addStockQty: parseInt(addStockQty),
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
        const adjustmentsAdded = await db.addStockAdjustment.findMany({
            orderBy: {
                createdAt: 'desc' //Latest adjustments Added
            },
        });
        return new NextResponse(
            JSON.stringify(adjustmentsAdded),
            {
                status: 200
            }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch the adjustments Added"
        }, {
            status: 500
        });
    }
}