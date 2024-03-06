import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            referenceNumber,
            itemId,
            supplierId,
            addStockQty,
            receivingWarehouseId,
            notes,
        } = await request.json();

        // Get the Item
        const itemToUpdate = await db.item.findUnique({
            where: {
                id: itemId,
            },
        });

        // Current Item Quantity
        const currentItemQty = itemToUpdate.quantity;

        // Modify the Item Quantity
        const newQty = parseInt(currentItemQty) + parseInt(addStockQty);

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
        const newStockQty = parseInt(currentWarehouseStockQty) + parseInt(addStockQty);

        // Update the Warehouse Inventory with the new Stock Quantity
        await db.warehouse.update({
            where: { id: receivingWarehouseId },
            data: { stockQty: newStockQty },
        });

        // Create the Add Stock Adjustment in the database
        const addStock = await db.addStockAdjustment.create({
            data: {
                referenceNumber,
                itemId,
                supplierId,
                addStockQty: parseInt(addStockQty),
                receivingWarehouseId,
                notes,
            },
        });

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
                Supplier: true,
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