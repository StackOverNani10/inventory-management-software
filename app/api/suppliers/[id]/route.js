import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
    try {
        const supplier = await db.supplier.findUnique({
            where: {
                id, //Found by Id
            },
        });
        return new NextResponse(JSON.stringify(supplier), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the supplier of the given id",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(request, { params: { id } }) {
    try {
        const { title, phone, email } = await request.json();
        const supplier = await db.supplier.update({
            where: {
                id, //Found by Id
            },
            data: {
                title,
                phone,
                email,
            },
        });
        return new NextResponse(JSON.stringify(supplier), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to update the supplier",
            },
            {
                status: 500,
            }
        );
    }
}
