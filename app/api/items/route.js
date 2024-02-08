import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const itemData = await request.json();
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
        console.log(item);
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
                createdAt: 'desc' //Latest item
            },
            include: {
                category: true,
            }
        });
        return new NextResponse(
            JSON.stringify(items),
            {
                status: 200
            }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch the items"
        }, {
            status: 500
        });
    }
}