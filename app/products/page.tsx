//@ts-nocheck
"use client";

import { useEffect, useState } from "react";
import ProductList from "@/components/products/ProductDetail";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { productQueries } from "@/lib/db/products";
import { Product } from "@/types/products";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await productQueries.getAll();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("products", products);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link href="/products/new">
          <Button>Add New Product</Button>
        </Link>
      </div>
      <ProductList products={products} />
    </div>
  );
}
