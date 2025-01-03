import { db, STORE_NAME } from "./client";
import { Product } from "@/types/products";

// Mock data for static generation
const mockProducts: Product[] = [
  {
    id: "1",
    name: "E-Rickshaw MASTER 48V - 3YEAR",
    capacity: "100Ah",
    voltage: "48V",
    price: 69999,
    series: "standard",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "E-Rickshaw MASTER Pro - 5YEAR",
    capacity: "150Ah",
    voltage: "48V",
    price: 129999,
    series: "pro",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const productQueries = {
  async getAll(): Promise<Product[]> {
    // For static generation, return mock data
    if (process.env.NEXT_PHASE === "phase-production-build") {
      return mockProducts;
    }
    const dbInstance = await db;
    return dbInstance.getAll(STORE_NAME);
  },

  async getById(id: string): Promise<Product | undefined> {
    // For static generation, return mock data
    if (process.env.NEXT_PHASE === "phase-production-build") {
      return mockProducts.find((p) => p.id === id);
    }
    const dbInstance = await db;
    return dbInstance.get(STORE_NAME, id);
  },

  async create(
    product: Omit<Product, "id" | "created_at" | "updated_at">
  ): Promise<Product> {
    const dbInstance = await db;
    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    const newProduct = {
      ...product,
      id,
      created_at: timestamp,
      updated_at: timestamp,
    };
    await dbInstance.add(STORE_NAME, newProduct);
    return newProduct;
  },

  async update(id: string, product: Partial<Product>): Promise<Product> {
    const dbInstance = await db;
    const existing = await dbInstance.get(STORE_NAME, id);
    if (!existing) throw new Error("Product not found");

    const updatedProduct = {
      ...existing,
      ...product,
      updated_at: new Date().toISOString(),
    };
    await dbInstance.put(STORE_NAME, updatedProduct);
    return updatedProduct;
  },

  async delete(id: string): Promise<void> {
    const dbInstance = await db;
    await dbInstance.delete(STORE_NAME, id);
  },
};
