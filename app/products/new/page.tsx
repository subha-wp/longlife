import ProductForm from "@/components/products/ProductForm";

export default function NewProductPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Add New Product</h1>
      <ProductForm />
    </div>
  );
}
