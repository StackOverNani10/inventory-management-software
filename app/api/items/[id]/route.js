import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
    try {
        const item = await db.item.findUnique({
            where: {
                id, //Found by Id
            },
            include: {
                category: true, // Returns all fields for all categories
                supplier: true, // Returns all suppliers fields  
            },
        });
        return new NextResponse(JSON.stringify(item), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the item of the given id",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(request, { params: { id } }) {
    try {
        const { title, description, categoryId, quantity, sellingPrice } =
            await request.json();
        const item = await db.item.update({
            where: {
                id, //Found by Id
            },
            data: {
                title,
                description,
                categoryId,
                quantity,
                sellingPrice,
            },
        });
        return new NextResponse(JSON.stringify(item), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to update the item",
            },
            {
                status: 500,
            }
        );
    }
}
