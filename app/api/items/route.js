import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const itemData = await request.json();

        // Get the warehouse
        const warehouseToUpdate = await db.warehouse.findUnique({
            where: {
                id: itemData.warehouseId,
            },
        });

        // Current Warehouse Stock Quantity
        const currentWarehouseStockQty = warehouseToUpdate.stockQty;

        // Modify the Stock Quantity
        const newStockQty = parseInt(currentWarehouseStockQty) + parseInt(itemData.qty);

        // Update the Warehouse Inventory with the new Stock Quantity
        await db.warehouse.update({
            where: { id: itemData.warehouseId },
            data: { stockQty: newStockQty },
        });

        // Create the Item in the database
        const item = await db.item.create({
            data: {
                title: itemData.title,
                description: itemData.description,
                categoryId: itemData.categoryId,
                sku: itemData.sku,
                barcode: itemData.barcode,
                quantity: parseInt(itemData.qty),
                unitId: itemData.unitId,
                brandId: itemData.brandId,
                sellingPrice: parseFloat(itemData.sellingPrice),
                buyingPrice: parseFloat(itemData.buyingPrice),
                supplierId: itemData.supplierId,
                reOrderPoint: parseInt(itemData.reOrderPoint),
                warehouseId: itemData.warehouseId,
                imageUrl: itemData.imageUrl,
                weight: parseFloat(itemData.weight),
                dimensions: itemData.dimensions,
                taxRate: parseFloat(itemData.taxRate),
                notes: itemData.notes,
            },
        });

        return new NextResponse(JSON.stringify(item), {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create the item",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET(request) {
    try {
        const items = await db.item.findMany({
            orderBy: {
                createdAt: "desc", //Latest item
            },
            include: {
                category: true, // Returns all fields for all categories
                supplier: true, // Returns all suppliers fields 
                brand: true, // Returns all brand fields
                unit: true, // Returns all unit fields
                Warehouse: true, // Returns all warehouse fields
            },
        });
        return new NextResponse(JSON.stringify(items), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the items",
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
        const deletedItem = await db.item.delete({
            where: {
                id,
            },
        });
        return new NextResponse(JSON.stringify(deletedItem), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to delete the item",
            },
            {
                status: 500,
            }
        );
    }
}