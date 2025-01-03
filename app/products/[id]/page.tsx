import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/products/ProductDetail";
import { productQueries } from "@/lib/db/products";
import { Skeleton } from "@/components/ui/skeleton";

// Generate static params for all products
export async function generateStaticParams() {
  const products = await productQueries.getAll();
  return products.map((product) => ({
    id: product.id,
  }));
}

// Static page component
export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await productQueries.getById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="container mx-auto py-8">
          <Skeleton className="h-8 w-32 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Skeleton className="aspect-video w-full" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-6 w-1/4" />
            </div>
          </div>
        </div>
      }
    >
      <ProductDetail product={product} />
    </Suspense>
  );
}
