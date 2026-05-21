import Link from "next/link";
import Image from "next/image";
import { Star, Leaf, Shield, Heart, Zap, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import EmailForm from "@/components/EmailForm";
import { getFeaturedProducts, getProductBySlug, reviews } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const bundle = getProductBySlug("3-in-1-bundle")!;

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#FFFBF2] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#F0A500]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#2E5FA3]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-24 grid md:grid-cols-2 gap-5 md:gap-12 items-center">
          {/* Product image — first on mobile, second on desktop */}
          <div className="relative flex items-center justify-center order-1 md:order-2">
            <div className="relative w-full max-w-[280px] md:max-w-sm mx-auto pb-16 md:pb-0">
              <Link href={`/products/${bundle.slug}`}>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={bundle.images[0]}
                    alt={bundle.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <span className="absolute top-3 left-3 bg-[#CC2020] text-white text-xs font-black px-3 py-1 rounded-full shadow">
                    Most Popular
                  </span>
                </div>
              </Link>

              {/* Savings callout */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[95%] bg-white rounded-2xl shadow-xl px-3 md:px-4 py-3 flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs text-gray-500 font-medium">3-in-1 Bundle</p>
                  <p className="text-xs md:text-sm font-black text-[#1A1A1A]">
                    Shampoo + Conditioner + Towel
                  </p>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-sm md:text-base font-black text-[#1A1A1A]">${bundle.price}</span>
                    <span className="text-xs text-gray-400 line-through">${bundle.originalPrice}</span>
                    <span className="text-xs font-bold text-[#2E5FA3]">Save $14</span>
                  </div>
                </div>
                <a
                  href={bundle.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-[#F0A500] hover:bg-[#C88A00] text-white text-xs font-black px-3 md:px-4 py-2 md:py-2.5 rounded-full transition-colors whitespace-nowrap"
                >
                  Buy Now
                </a>
              </div>

              {/* 100% Natural badge */}
              <div className="absolute -top-4 -right-4 bg-[#1A1A1A] rounded-2xl shadow-xl px-3 md:px-4 py-2 md:py-3 text-white">
                <p className="text-xs font-medium">🌿 100%</p>
                <p className="text-xs md:text-sm font-black">Natural</p>
              </div>
            </div>
          </div>

          {/* Text content — second on mobile, first on desktop */}
          <div className="order-2 md:order-1">
            <span className="inline-block bg-[#F0A500]/15 text-[#C88A00] text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-2 md:mb-5">
              🐾 Less Mess, More Love for Your Pets
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-tight mb-2 md:mb-5">
              Your Pet Deserves{" "}
              <span className="text-[#F0A500]">Nothing But the Best</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed max-w-md">
              Premium grooming products made with real, natural ingredients — no fillers, no harsh chemicals.
            </p>

            <div className="flex items-center gap-3 mb-4 md:mb-8">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#F0A500] hover:bg-[#C88A00] text-white font-black text-sm md:text-base px-6 md:px-7 py-3 md:py-3.5 rounded-full transition-colors shadow-lg shadow-amber-200"
              >
                Shop All Products
                <ChevronRight className="w-4 h-4" />
              </Link>
              {/* Full button on desktop, text link on mobile */}
              <Link
                href="/about"
                className="hidden md:inline-flex items-center gap-2 border-2 border-[#2E5FA3] text-[#2E5FA3] hover:bg-[#2E5FA3] hover:text-white font-bold text-base px-6 py-3 rounded-full transition-colors"
              >
                Our Story
              </Link>
              <Link href="/about" className="md:hidden text-sm font-semibold text-[#2E5FA3] underline underline-offset-2">
                Our Story
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["🐶", "🐱", "🐩", "🐕"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#F0A500]/20 border-2 border-white flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 md:w-4 md:h-4 fill-[#F0A500] text-[#F0A500]"
                    />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-gray-600 font-medium">
                  <span className="font-black text-[#1A1A1A]">1,200+</span>{" "}
                  happy pet owners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#1A1A1A] text-white py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: <Leaf className="w-5 h-5" />, label: "100% Natural Ingredients", color: "text-[#F0A500]" },
              { icon: <Shield className="w-5 h-5" />, label: "Vet Approved Formula", color: "text-[#4A7CC7]" },
              { icon: <Heart className="w-5 h-5" />, label: "Safe for All Pets", color: "text-[#4A7CC7]" },
              { icon: <Zap className="w-5 h-5" />, label: "Results After 1 Wash", color: "text-[#F0A500]" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <span className={item.color}>{item.icon}</span>
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INGREDIENT SPOTLIGHT */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#1A6B3A] font-bold text-sm uppercase tracking-widest">
              Key Ingredients
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-2">
              Soothing Relief for Itchy, Dry Fur
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">
              How Marshmallow Root &amp; Colloidal Oats help comfort your dog&apos;s irritated skin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#F5F0E8] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">🌿</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1A6B3A]">Marshmallow Root</p>
                  <h3 className="text-xl font-black text-[#1A1A1A]">Nature&apos;s Skin Soother</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Rich in mucilage, a soothing gel-like substance that calms irritation",
                  "Helps reduce redness & inflammation",
                  "Hydrates dry, flaky skin by helping it retain moisture",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="text-[#1A6B3A] font-black mt-0.5 shrink-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F5F0E8] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">🌾</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#C88A00]">Colloidal Oats</p>
                  <h3 className="text-xl font-black text-[#1A1A1A]">Gentle Skin Protector</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Forms a protective barrier over the skin",
                  "Locks in moisture to relieve dryness",
                  "Helps soothe itching and hot spots",
                  "Safe, gentle, & ideal for sensitive skin",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="text-[#C88A00] font-black mt-0.5 shrink-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#1A6B3A] rounded-2xl p-8 text-white text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-black mb-2">Nourishing Relief with PetCora&apos;s Natural Formula</h3>
            <p className="text-green-100 text-sm leading-relaxed">
              Our formula combines{" "}
              <strong className="text-white">Marshmallow Root Glycerite &amp; Colloidal Oatmeal</strong>{" "}
              to help soothe, hydrate, and protect your dog&apos;s skin — naturally.
            </p>
          </div>
        </div>
      </section>

      {/* FREE FROM */}
      <section className="py-14 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#F0A500] font-bold text-sm uppercase tracking-widest mb-3 block">
            Clean Formula
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10">
            PetCora is FREE FROM:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              "Sulfates (SLS/SLES)",
              "Parabens",
              "Phthalates",
              "Silicones",
              "Artificial Colors/Dyes",
              "Synthetic Fragrances",
              "Drying Alcohols",
              "Animal Testing",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3">
                <span className="text-[#CC2020] font-black text-base shrink-0">✕</span>
                <span className="text-white text-sm font-semibold text-left">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-8 text-sm">
            Just gentle, plant-powered care your pet deserves.
          </p>
        </div>
      </section>

      {/* WHY PETCORA */}
      <section className="py-16 md:py-20 bg-[#F4F8FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#2E5FA3] font-bold text-sm uppercase tracking-widest">
              The PetCora Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-2">
              Why Pet Owners Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🌿",
                title: "Real Ingredients Only",
                desc: "Every bottle is packed with identifiable, purposeful ingredients — oatmeal, aloe, argan oil, coconut. No mystery chemicals, no fillers.",
                color: "bg-[#1A6B3A]/10",
                accent: "text-[#1A6B3A]",
              },
              {
                emoji: "🧪",
                title: "Science-Backed Formulas",
                desc: "Developed by pet dermatologists and pH-balanced specifically for pet skin — not repurposed human shampoo.",
                color: "bg-[#2E5FA3]/10",
                accent: "text-[#2E5FA3]",
              },
              {
                emoji: "💛",
                title: "Results You Can See",
                desc: "Shinier coats. Less scratching. Happier bath times. Our customers see real results after just one wash.",
                color: "bg-[#F0A500]/10",
                accent: "text-[#C88A00]",
              },
            ].map((item, i) => (
              <div key={i} className={`${item.color} rounded-2xl p-8`}>
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className={`text-xl font-black ${item.accent} mb-3`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-[#2E5FA3] font-bold text-sm uppercase tracking-widest">
              Customer Favorites
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-2">
              Bestselling Products
            </h2>
            <p className="text-gray-500 mt-2 max-w-md mx-auto">
              The formulas pet owners swear by — loved by dogs, cats, and their
              humans.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 border-2 border-[#2E5FA3] text-[#2E5FA3] hover:bg-[#2E5FA3] hover:text-white font-bold px-8 py-3 rounded-full transition-colors"
            >
              View All Products
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#2E5FA3] font-bold text-sm uppercase tracking-widest">
              Real Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-2">
              1,200+ Happy Pet Owners
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#F0A500] text-[#F0A500]"
                />
              ))}
              <span className="text-[#2E5FA3] font-bold text-sm ml-1">
                4.9 average rating
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, i) => (
              <div
                key={i}
                className="bg-[#FFFBF2] rounded-2xl p-6 border border-amber-100 border-l-4 border-l-[#2E5FA3]"
              >
                <div className="flex mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-[#F0A500] text-[#F0A500]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-[#F0A500]/20 flex items-center justify-center text-sm font-black text-[#C88A00]">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A]">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      Owner of {review.petName} · {review.petType}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="py-16 bg-[#F0A500]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Get 10% Off Your First Order
          </h2>
          <p className="text-amber-100 text-base mb-8">
            Join 1,200+ pet owners getting exclusive deals, grooming tips, and
            first access to new products.
          </p>
          <EmailForm dark />
          <p className="text-amber-200 text-xs mt-4">
            No spam. Unsubscribe anytime. 🐾
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-[#1A1A1A] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <p className="text-[#F0A500] font-bold text-sm uppercase tracking-widest mb-3">
            Ready to get started?
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Give Your Pet the Glow-Up They Deserve
          </h2>
          <p className="text-gray-400 mb-8">
            Free shipping on orders over $35 · Secure checkout via Square
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#F0A500] hover:bg-[#C88A00] text-white font-black text-lg px-10 py-4 rounded-full transition-colors shadow-xl"
          >
            Shop All Products
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
