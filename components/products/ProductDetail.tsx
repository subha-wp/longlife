/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
"use client";

import { Product } from "@/types/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <Link href="/products">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>{product.name}</CardTitle>
          <Link href={`/products/${product.id}/edit`}>
            <Button variant="outline">
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.image_url && (
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Specifications</h3>
                <p className="text-muted-foreground">
                  {product.capacity} • {product.voltage}
                </p>
              </div>
              {product.description && (
                <div>
                  <h3 className="font-semibold">Description</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              )}
              <div>
                <h3 className="font-semibold">Price</h3>
                <p className="text-2xl font-bold">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Series</h3>
                <p className="capitalize text-muted-foreground">
                  {product.series}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
