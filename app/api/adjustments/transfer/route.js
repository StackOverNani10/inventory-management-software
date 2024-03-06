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

        // Get the giving warehouse
        const givingWarehouseToUpdate = await db.warehouse.findUnique({
            where: {
                id: givingWarehouseId,
            },
        });

        // Current giving Warehouse Stock Quantity
        const currentGivingWarehouseStock = givingWarehouseToUpdate.stockQty;

        // Check if there is enough stock in the giving warehouse
        if (parseInt(currentGivingWarehouseStock) > parseInt(transferStockQty)) {
            // Modify the Stock Quantity for the giving warehouse
            const newStockForGivingWarehouse =
                parseInt(currentGivingWarehouseStock) - parseInt(transferStockQty);

            // Update the Warehouse Inventory with the new Stock Quantity
            await db.warehouse.update({
                where: { id: givingWarehouseId },
                data: { stockQty: newStockForGivingWarehouse },
            });

            // Get the receiving warehouse
            const receivingWarehouseToUpdate = await db.warehouse.findUnique({
                where: {
                    id: receivingWarehouseId,
                },
            });

            // Current receiving Warehouse Stock Quantity
            const currentReceivingWarehouseStock =
                receivingWarehouseToUpdate.stockQty;

            // Modify the Stock Quantity for the receiving warehouse
            const newStockForReceivingWarehouse =
                parseInt(currentReceivingWarehouseStock) + parseInt(transferStockQty);

            // Update the Warehouse Inventory with the new Stock Quantity
            await db.warehouse.update({
                where: { id: receivingWarehouseId },
                data: { stockQty: newStockForReceivingWarehouse },
            });

            // Create the Transfer Stock Adjustment in the database
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
            return new NextResponse(JSON.stringify(stockTransfer), {
                status: 201,
            });
        } else {
            return NextResponse.json(
                {
                    message: "Not enough stock in the giving warehouse",
                },
                {
                    status: 409,
                }
            );
        }
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
