"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    section: "Products & Ingredients",
    id: "ingredients",
    questions: [
      {
        q: "Are PetCora products really 100% natural?",
        a: "Yes. Every ingredient in every PetCora product is plant-derived, mineral-based, or a naturally-occurring compound. We never use artificial fragrances, parabens, sulfates, or synthetic preservatives. Every ingredient is listed on the label with no hidden catch-all terms.",
      },
      {
        q: "Are your products safe for both dogs and cats?",
        a: "Most of our products are formulated for both dogs and cats — you'll see 'Dogs & Cats' labeled on those. A few (like our Coconut & Lavender Cat Shampoo) are specifically pH-balanced for cats. Always check the product page for pet type recommendations.",
      },
      {
        q: "Are your products vet-approved?",
        a: "Our formulas are developed in collaboration with veterinary dermatologists and are pH-balanced specifically for pet skin. While we don't claim a formal 'vet certification' (which isn't a regulated designation), many veterinarians have recommended our products to their clients.",
      },
      {
        q: "Can I use PetCora shampoo on a puppy or kitten?",
        a: "Yes — our Puppy & Kitten Gentle Shampoo is specifically formulated for young pets aged 8 weeks and older. For young animals, we recommend avoiding other formulas until they're at least 6 months old.",
      },
      {
        q: "Do your products contain tea tree oil? Is it safe?",
        a: "Our Tea Tree Anti-Itch Shampoo contains pharmaceutical-grade, properly diluted tea tree oil at a concentration that is safe for both dogs and cats. The concern with tea tree oil is pure/undiluted application — at the correct diluted levels used in our formula, it is safe and therapeutic.",
      },
    ],
  },
  {
    section: "Shipping & Orders",
    id: "shipping",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 3–5 business days. Expedited (2-day) shipping is available at checkout. We ship Monday through Friday, excluding holidays. You'll receive a tracking number as soon as your order ships.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes! Orders over $35 ship free within the continental US. For orders under $35, standard shipping starts at $4.99.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently we ship within the United States only. We're working on expanding internationally — sign up for our email list to be notified when international shipping becomes available.",
      },
      {
        q: "Can I change or cancel my order?",
        a: "Orders can be changed or cancelled within 2 hours of placement. After that, your order may have already entered fulfillment. Contact us at hello@mypetcora.com as soon as possible and we'll do our best to help.",
      },
    ],
  },
  {
    section: "Returns & Refunds",
    id: "returns",
    questions: [
      {
        q: "What is your return policy?",
        a: "Due to the nature of pet grooming products, all sales are final. We do not accept returns or exchanges. We stand behind every product, and if something arrived damaged or defective, we will replace it at no charge — just send us a photo within 7 days of delivery.",
      },
      {
        q: "My product arrived damaged. What do I do?",
        a: "We're so sorry to hear that! Please take a photo of the damaged item and packaging and email us at hello@mypetcora.com within 7 days of receiving your order. We'll ship a replacement right away at no cost to you.",
      },
      {
        q: "What if my pet has a reaction?",
        a: "We use gentle, natural ingredients, but every animal is unique. If your pet shows any sign of irritation, discontinue use immediately and rinse thoroughly with water. Contact your veterinarian if symptoms persist. Reach out to us at hello@mypetcora.com and we'll review the situation personally.",
      },
    ],
  },
  {
    section: "Using Our Products",
    id: "usage",
    questions: [
      {
        q: "How often should I bathe my pet?",
        a: "For most dogs, bathing every 4–6 weeks is sufficient. Cats rarely need baths unless they've gotten into something dirty. Dogs with skin conditions may benefit from more frequent bathing with our therapeutic formulas — consult your vet for guidance specific to your pet.",
      },
      {
        q: "Can I use conditioner every time I shampoo?",
        a: "Absolutely — in fact, we recommend it. Using a conditioner after every shampoo helps restore moisture that cleansing removes, keeps the coat tangle-free, and adds lasting shine. Our conditioners are formulated to complement our shampoos perfectly.",
      },
      {
        q: "How much shampoo should I use?",
        a: "A little goes a long way with PetCora. For small dogs/cats: a nickel-sized amount. Medium dogs: a quarter-sized amount. Large dogs: up to a 50-cent piece. Always dilute with water for the best lather and coverage.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-[#1A1A1A] text-sm leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#F0A500] shrink-0 transition-transform mt-0.5 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-5 pr-9">
          <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#FFFBF2] py-14 border-b border-amber-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#F0A500] font-bold text-sm uppercase tracking-widest mb-3 block">
            Got Questions?
          </span>
          <h1 className="text-4xl font-black text-[#1A1A1A] mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500">
            Everything you need to know about PetCora products, shipping, and
            more.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        {/* Jump links */}
        <div className="flex flex-wrap gap-2 mb-10">
          {faqs.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm font-semibold px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-[#F0A500] hover:text-white transition-colors"
            >
              {section.section}
            </a>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {faqs.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 className="text-xl font-black text-[#1A1A1A] mb-2 pb-3 border-b-2 border-[#F0A500]">
                {section.section}
              </h2>
              <div>
                {section.questions.map((item, i) => (
                  <FAQItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-14 bg-[#FFFBF2] rounded-2xl p-8 text-center border border-amber-100">
          <p className="text-2xl mb-2">🐾</p>
          <h3 className="text-xl font-black text-[#1A1A1A] mb-2">
            Still Have a Question?
          </h3>
          <p className="text-gray-500 text-sm mb-5">
            We&apos;re a small team that genuinely loves pets. Reach out and a real
            person will get back to you within 24 hours.
          </p>
          <a
            href="mailto:hello@mypetcora.com"
            className="inline-flex items-center gap-2 bg-[#F0A500] hover:bg-[#C88A00] text-white font-bold px-6 py-3 rounded-full transition-colors"
          >
            Email Us
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#1A1A1A] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-white mb-4">
            Ready to shop?
          </h2>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#F0A500] hover:bg-[#C88A00] text-white font-black px-7 py-3.5 rounded-full transition-colors"
          >
            See All Products
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
