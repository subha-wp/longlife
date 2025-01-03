//@ts-nocheck
"use client";

import { db } from "./client";
import { Product } from "@/types/products";

export const productQueries = {
  async getAll() {
    const dbInstance = await db;
    return dbInstance.getAll(STORE_NAME);
  },

  async getById(id: string) {
    const dbInstance = await db;
    return dbInstance.get(STORE_NAME, id);
  },

  async create(product: Omit<Product, "id" | "created_at" | "updated_at">) {
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

  async update(id: string, product: Partial<Product>) {
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

  async delete(id: string) {
    const dbInstance = await db;
    await dbInstance.delete(STORE_NAME, id);
  },
};
