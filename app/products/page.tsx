import { Suspense } from "react";
import ProductList from "@/components/products/ProductList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { productQueries } from "@/lib/db/products";
import { Skeleton } from "@/components/ui/skeleton";

export default async function ProductsPage() {
  const products = await productQueries.getAll();

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link href="/products/new">
          <Button>Add New Product</Button>
        </Link>
      </div>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-[300px] w-full" />
            ))}
          </div>
        }
      >
        <ProductList products={products} />
      </Suspense>
    </div>
  );
}
