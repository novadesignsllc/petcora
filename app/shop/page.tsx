"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = [
  { value: "all", label: "All Products" },
  { value: "shampoo", label: "Shampoos" },
  { value: "conditioner", label: "Conditioners" },
  { value: "bundle", label: "Bundles" },
  { value: "grooming", label: "Grooming" },
];

export default function ShopPage() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all" ? products : products.filter((p) => p.category === category);

  return (
    <>
      {/* Header */}
      <section className="bg-[#FFFBF2] py-12 border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[#2E5FA3] font-bold text-sm uppercase tracking-widest mb-2">
            Natural Premium Grooming
          </p>
          <h1 className="text-4xl font-black text-[#1A1A1A]">All Products</h1>
          <p className="text-gray-500 mt-2">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} — free
            from sulfates, parabens & synthetic fragrances
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-gray-100">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setCategory(c.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                category === c.value
                  ? "bg-[#F0A500] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
