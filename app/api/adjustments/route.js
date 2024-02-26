import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { transferStockQty, receivingBranchId, notes } = await request.json();
        const adjustment = { transferStockQty, receivingBranchId, notes };
        console.log(adjustment);
        return NextResponse.json(adjustment);
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
