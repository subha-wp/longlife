"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/products/ProductDetail";
import { productQueries } from "@/lib/db/products";
import { Product } from "@/types/products";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await productQueries.getById(params.id);
        if (!data) notFound();
        setProduct(data);
      } catch (error) {
        console.error("Failed to load product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return notFound();
  }

  return <ProductDetail product={product} />;
}
