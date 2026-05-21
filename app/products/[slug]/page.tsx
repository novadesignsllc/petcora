import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight, Check, ShoppingBag } from "lucide-react";
import { getProductBySlug, products, reviews } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — PetCora`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const productReviews = reviews.slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#F0A500]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-[#F0A500]">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#1A1A1A] font-medium truncate max-w-[200px]">{product.name}</span>
        </nav>
      </div>

      {/* Product hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.badge && (
              <span
                className={`absolute top-4 left-4 text-sm font-bold px-3 py-1.5 rounded-full text-white ${
                  product.badge === "Bestseller"
                    ? "bg-[#F0A500]"
                    : product.badge === "New"
                    ? "bg-[#2E5FA3]"
                    : product.badge === "Sale"
                    ? "bg-[#CC2020]"
                    : "bg-[#1A6B3A]"
                }`}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="pt-2">
            <p className="text-[#2E5FA3] font-bold text-sm uppercase tracking-wider mb-2 capitalize">
              {product.category} · {product.petType === "all" ? "Dogs & Cats" : product.petType}
            </p>
            <h1 className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-gray-500 text-lg mb-4">{product.tagline}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-[#F0A500] text-[#F0A500]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-[#1A1A1A] text-sm">{product.rating}</span>
              <span className="text-gray-400 text-sm">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-black text-[#1A1A1A]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-[#CC2020] text-white text-xs font-bold px-2 py-1 rounded-full">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            {/* CTA */}
            <a
              href={product.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#F0A500] hover:bg-[#C88A00] text-white font-black text-lg py-4 rounded-full transition-colors shadow-lg shadow-amber-200 mb-3"
            >
              <ShoppingBag className="w-5 h-5" />
              Buy Now — ${product.price.toFixed(2)}
            </a>
            <p className="text-center text-gray-400 text-xs mb-6">
              Secure checkout via Square · Free shipping over $35
            </p>

            {/* Benefits */}
            <div className="bg-[#FFFBF2] rounded-2xl p-5 mb-6">
              <p className="font-black text-[#1A1A1A] text-sm mb-3 uppercase tracking-wide">
                Key Benefits
              </p>
              <ul className="space-y-2">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#1A6B3A] mt-0.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="font-black text-[#1A1A1A] text-sm mb-2 uppercase tracking-wide">
                About This Product
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            </div>

            {/* How to use */}
            <div className="mb-6">
              <p className="font-black text-[#1A1A1A] text-sm mb-2 uppercase tracking-wide">
                How to Use
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">{product.howToUse}</p>
            </div>

            {/* Ingredients */}
            <div>
              <p className="font-black text-[#1A1A1A] text-sm mb-2 uppercase tracking-wide">
                Key Ingredients
              </p>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#FFFBF2] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-[#1A1A1A] mb-8">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {productReviews.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-amber-100">
                <div className="flex mb-2">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#F0A500] text-[#F0A500]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#F0A500]/20 flex items-center justify-center text-sm font-black text-[#C88A00]">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A]">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.petType} owner · {review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
