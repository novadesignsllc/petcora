"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = [
  { value: "all", label: "All Products" },
  { value: "shampoo", label: "Shampoos" },
  { value: "conditioner", label: "Conditioners" },
  { value: "grooming", label: "Grooming" },
];

const petTypes = [
  { value: "all", label: "All Pets" },
  { value: "dogs", label: "Dogs" },
  { value: "cats", label: "Cats" },
];

export default function ShopPage() {
  const [category, setCategory] = useState("all");
  const [petType, setPetType] = useState("all");

  const filtered = products.filter((p) => {
    const catMatch = category === "all" || p.category === category;
    const petMatch =
      petType === "all" || p.petType === petType || p.petType === "all";
    return catMatch && petMatch;
  });

  return (
    <>
      {/* Header */}
      <section className="bg-[#FFFBF2] py-12 border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-[#F0A500] font-bold text-sm uppercase tracking-widest mb-2">
            Natural Premium Grooming
          </p>
          <h1 className="text-4xl font-black text-[#1A1A1A]">All Products</h1>
          <p className="text-gray-500 mt-2">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} —
            real ingredients, real results
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-6 mb-10 pb-6 border-b border-gray-100">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
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
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Pet Type
            </p>
            <div className="flex flex-wrap gap-2">
              {petTypes.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setPetType(p.value)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                    petType === p.value
                      ? "bg-[#2E5FA3] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-3">🐾</p>
            <p className="font-semibold">No products match those filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
