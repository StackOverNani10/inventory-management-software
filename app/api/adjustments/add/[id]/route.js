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
                Supplier: true,
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
            supplierId,
            addStockQty,
            receivingWarehouseId,
            notes,
        } = await request.json();

        // Get the stockAdded
        const stockAddedToUpdate = await db.addStockAdjustment.findUnique({
            where: {
                id, //Found by id
            },
        });

        // Current Add Stock Quantity
        const currentAddStockQty = stockAddedToUpdate.addStockQty;

        // Modify the Add Stock Quantity
        const newAddStockQty = parseInt(addStockQty);

        // Get the Item
        const itemToUpdate = await db.item.findUnique({
            where: {
                id: itemId,
            },
        });

        // Current Item Quantity
        const currentItemQty = itemToUpdate.quantity;

        // Modify the Item Quantity
        const newQty = parseInt(currentItemQty) - currentAddStockQty + newAddStockQty;

        // Update the Item Inventory with the new Quantity
        await db.item.update({
            where: { id: itemId },
            data: {
                quantity: newQty,
            },
        });

        // Get the warehouse
        const warehouseToUpdate = await db.warehouse.findUnique({
            where: {
                id: receivingWarehouseId,
            },
        });

        // Current Warehouse Stock Quantity
        const currentWarehouseStockQty = warehouseToUpdate.stockQty;

        // Modify the Stock Quantity
        const newStockQty = parseInt(currentWarehouseStockQty) - currentAddStockQty + newAddStockQty;

        // Update the Warehouse Inventory with the new Stock Quantity
        await db.warehouse.update({
            where: { id: receivingWarehouseId },
            data: { stockQty: newStockQty },
        });

        // Update the Add Stock Adjustment in the database
        const stockAdded = await db.addStockAdjustment.update({
            where: {
                id, //Found by Id
            },
            data: {
                referenceNumber,
                itemId,
                supplierId,
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
