import { NextResponse } from "next/server";
import { productQueries } from "@/lib/db/products";

export async function GET() {
  try {
    const products = productQueries.getAll();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const product = await request.json();
    const newProduct = productQueries.create(product);
    return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
