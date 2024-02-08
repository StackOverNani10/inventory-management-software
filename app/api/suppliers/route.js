import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            title,
            phone,
            email,
            address,
            contactPerson,
            supplierCode,
            paymentTerms,
            taxID,
            notes,
        } = await request.json();
        const supplier = await db.supplier.create({
            data: {
                title,
                phone,
                email,
                address,
                contactPerson,
                supplierCode,
                taxID,
                paymentTerms,
                notes,
            },
        });
        console.log(supplier);
        return new NextResponse(JSON.stringify(supplier), {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create the supplier",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET(request) {
    try {
        const suppliers = await db.supplier.findMany({
            orderBy: {
                createdAt: 'desc' //Latest supplier
            },
        });
        return new NextResponse(
            JSON.stringify(suppliers),
            {
                status: 200
            }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch the suppliers"
        }, {
            status: 500
        });
    }
}