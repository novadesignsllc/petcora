import Link from "next/link";
import { ChevronRight, Heart, Leaf, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FFFBF2] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-[#F0A500]/15 text-[#C88A00] text-sm font-bold px-4 py-1.5 rounded-full mb-5">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight mb-6">
            We Started PetCora Because{" "}
            <span className="text-[#F0A500]">Our Pets Deserved Better</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Most pet grooming products are full of things you can&apos;t
            pronounce, designed to maximize margins — not your pet&apos;s
            health. We built PetCora to change that.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-gray-600">
            <div className="bg-[#FFFBF2] border-l-4 border-[#F0A500] pl-6 py-4 rounded-r-xl mb-10">
              <p className="text-[#1A1A1A] font-black text-xl leading-snug m-0">
                &ldquo;We built PetCora with a single vision: delivering premium, plant-powered grooming that&apos;s as good for your pet&apos;s skin as it is for your peace of mind.&rdquo;
              </p>
              <p className="text-gray-500 text-sm mt-2 m-0">— Jawan &ldquo;JW&rdquo; Hagans &amp; Shenae Hagans, Co-Founders</p>
            </div>

            <p>
              Founded by Jawan &ldquo;JW&rdquo; Hagans and Shenae Hagans, PetCora™ is driven by the vision of delivering premium, plant-based pet grooming products that actually work — without the harsh chemicals found in most mainstream brands.
            </p>

            <p>
              Every PetCora formula is <strong>free from sulfates, parabens, phthalates, silicones, mineral oil, artificial colors, synthetic fragrances, drying alcohols, and animal testing.</strong> Not because it&apos;s trendy — because it&apos;s the right thing to do.
            </p>

            <p>
              We believe pet grooming should be simple, safe, and effective. Real ingredients your dog&apos;s skin will love. Formulas that work from the very first wash. Products you can feel good about using every single time.
            </p>

            <p>
              PetCora isn&apos;t just a product line — it&apos;s a promise to every pet owner who wants to do right by their animals without compromising on quality or safety.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Ingredient Transparency",
                desc: "Every ingredient in every product is listed, explained, and purposeful. No fillers, no marketing fluff. If it's in the bottle, it's working for your pet.",
                color: "text-[#4CAF50]",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Science + Nature",
                desc: "We believe the best formulas combine the wisdom of natural ingredients with the precision of modern pet dermatology. It's not either/or — it's both.",
                color: "text-[#F0A500]",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Pets First. Always.",
                desc: "Every decision we make — ingredient selection, pricing, packaging — is filtered through one lens: is this genuinely good for the animals who use our products?",
                color: "text-[#CC2020]",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`${item.color} flex justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-[#F0A500]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "1,200+", label: "Happy Pet Owners" },
              { number: "8", label: "Natural Formulas" },
              { number: "4.9★", label: "Average Rating" },
              { number: "100%", label: "Natural Ingredients" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-black mb-1">{stat.number}</p>
                <p className="text-amber-100 text-sm font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-[#1A1A1A] mb-4">
            Ready to Try PetCora?
          </h2>
          <p className="text-gray-500 mb-8">
            Join over 1,200 pet owners who&apos;ve made the switch to natural grooming.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#F0A500] hover:bg-[#C88A00] text-white font-black px-8 py-4 rounded-full transition-colors shadow-lg shadow-amber-200"
          >
            Shop All Products
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
