import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, location, description, type } = await request.json();
        const warehouse = { title, location, description, type };
        console.log(warehouse);
        return NextResponse.json(warehouse);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a warehouse"
        }, {
            status: 500
        });
    }
}