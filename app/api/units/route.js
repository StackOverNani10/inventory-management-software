import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, abbreviation } = await request.json();
        const unit = await db.unit.create({
            data: {
                title,
                abbreviation,
            },
        });
        console.log(unit);
        return new NextResponse(JSON.stringify(unit), {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create the unit",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET(request) {
    try {
        const units = await db.unit.findMany({
            orderBy: {
                createdAt: "desc", //Latest unit
            },
        });
        return new NextResponse(JSON.stringify(units), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to find the units",
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
        const deletedUnit = await db.unit.delete({
            where: {
                id,
            },
        });
        return new NextResponse(JSON.stringify(deletedUnit), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        console.log(error.code);
        switch (error.code) {
            case "P2025":
                return NextResponse.json(
                    {
                        error,
                        message: "Unit not found",
                    },
                    {
                        status: 404,
                    }
                );
            case "P2023":
                return NextResponse.json(
                    {
                        error,
                        message: "Unit is in use",
                    },
                    {
                        status: 400,
                    }
                );
            case "P2014":
                return NextResponse.json(
                    {
                        error,
                        message: "The change you are trying to make would violate the required relation 'ItemToUnit' between the `Item` and `Unit` models.",
                    },
                    {
                        status: 400,
                    }
                );
            default:
                return NextResponse.json(
                    {
                        error,
                        message: "Failed to delete the unit",
                    },
                    {
                        status: 500,
                    }
                );
        }
    }
}