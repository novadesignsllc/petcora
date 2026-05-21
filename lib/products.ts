const CDN = "https://154036629.cdn6.editmysite.com/uploads/1/5/4/0/154036629";

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: "shampoo" | "conditioner" | "bundle" | "grooming";
  petType: "dogs" | "cats" | "all";
  images: string[];
  description: string;
  ingredients: string[];
  benefits: string[];
  howToUse: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  badge?: string;
  checkoutUrl: string;
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  petName: string;
  petType: string;
  date: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "dog-shampoo-12oz",
    name: "Dog Shampoo 12 oz",
    tagline: "Plant-powered clean for happy, healthy coats",
    price: 21.99,
    category: "shampoo",
    petType: "dogs",
    images: [
      `${CDN}/ADZBDIRH77CRKUPD4IAHWZUW.jpeg`,
      `${CDN}/M5GQ4W6VVYNV3E32OKR6H4UN.jpeg`,
      `${CDN}/BZDOJTY3WI5MX4NJZNWIKBCX.jpeg`,
      `${CDN}/RDT4BJ65HDAT7MSQEGUIFE33.jpeg`,
      `${CDN}/A42UXKG7EXW2KH4FYKLEH4G3.png`,
    ],
    description:
      "PetCora Dog Shampoo is a premium, plant-based formula designed to gently cleanse while nourishing your dog's skin and coat. Free from sulfates, parabens, and synthetic fragrances — just clean, effective ingredients your dog's skin will love.",
    ingredients: [
      "Aloe Vera",
      "Coconut-Derived Surfactants",
      "Chamomile Extract",
      "Vitamin E",
      "Panthenol (Pro-Vitamin B5)",
      "Purified Water",
    ],
    benefits: [
      "No sulfates, parabens, or artificial dyes",
      "Gentle enough for regular use",
      "Leaves coat soft, shiny & clean",
      "Plant-powered & cruelty-free",
      "Fresh, light natural scent",
    ],
    howToUse:
      "Wet your dog's coat thoroughly with warm water. Apply a generous amount and massage into a rich lather from neck to tail. Leave on for 2–3 minutes for best results. Rinse completely. Repeat if needed.",
    rating: 4.9,
    reviewCount: 312,
    featured: true,
    badge: "Bestseller",
    checkoutUrl:
      "https://www.mypetcora.com/product/dog-shampoo-12-oz/56ZZ2DHBUB3S2HQTVR23KBO6?cs=true&cst=custom",
  },
  {
    id: "2",
    slug: "dog-conditioner-12oz",
    name: "Dog Conditioner 12 oz",
    tagline: "Salon-quality shine & softness at home",
    price: 21.99,
    category: "conditioner",
    petType: "dogs",
    images: [
      `${CDN}/DUYWHXY647XW43WQHJUBTZAO.jpeg`,
      `${CDN}/TS37M4H4UXHO6PE2S3VGXNNY.jpeg`,
      `${CDN}/6BTTUQAEKQY3VNADQZC4TPZM.jpeg`,
    ],
    description:
      "PetCora Dog Conditioner deeply moisturizes and detangles your dog's coat, leaving it smooth, shiny, and easy to brush. Formulated with plant-based ingredients that restore softness and fight frizz — no greasy residue, just beautiful results.",
    ingredients: [
      "Shea Butter",
      "Argan Oil",
      "Hydrolyzed Silk Protein",
      "Panthenol (Pro-Vitamin B5)",
      "Aloe Vera",
      "Purified Water",
    ],
    benefits: [
      "Eliminates tangles & mats",
      "Adds brilliant, long-lasting shine",
      "No sulfates, silicones, or mineral oil",
      "Lightweight — zero greasy residue",
      "Works on all coat types",
    ],
    howToUse:
      "After shampooing, apply conditioner evenly from neck to tail. Gently work through the coat with your fingers. Leave on for 3–5 minutes, then rinse thoroughly. For best results, use after every bath.",
    rating: 4.8,
    reviewCount: 247,
    featured: true,
    checkoutUrl:
      "https://www.mypetcora.com/product/dog-conditioner-12-oz/GMPMQMVETGUANTKNQIBRH5UY?cs=true&cst=custom",
  },
  {
    id: "3",
    slug: "shampoo-conditioner-bundle",
    name: "Dog Shampoo & Conditioner Bundle",
    tagline: "The complete bath-time duo — save $9",
    price: 34.99,
    originalPrice: 44.0,
    category: "bundle",
    petType: "dogs",
    images: [
      `${CDN}/LAOAS3LMFER7ECDGFMNMFLLC.jpeg`,
      `${CDN}/CETNUBHFQ5ZEVHPJ2FCWDPEQ.jpeg`,
      `${CDN}/HA7ZMSI6I7D7D3YQVWP2EINL.jpeg`,
    ],
    description:
      "Get the full PetCora bath experience at a great price. This bundle includes our 12 oz Dog Shampoo and 12 oz Dog Conditioner — everything you need for a clean, shiny, healthy coat from wash to finish.",
    ingredients: [
      "See individual product listings for full ingredient details.",
    ],
    benefits: [
      "Save $9 vs. buying separately",
      "Complete shampoo + conditioner system",
      "Formulated to work together",
      "Free from 9 harsh chemicals",
      "Best value for regular bathers",
    ],
    howToUse:
      "Step 1: Shampoo — wet coat, lather, leave 2–3 min, rinse. Step 2: Conditioner — apply to damp coat, leave 3–5 min, rinse. Towel or blow-dry on low heat.",
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    badge: "Best Value",
    checkoutUrl:
      "https://www.mypetcora.com/product/dog-shampoo-conditioner-bundle/G5VQCPUCMORI5WXJSMPGC6OK?cs=true&cst=custom",
  },
  {
    id: "4",
    slug: "3-in-1-bundle",
    name: "3-in-1 Bundle",
    tagline: "Shampoo + Conditioner + Microfiber Towel — save $14",
    price: 39.99,
    originalPrice: 54.0,
    category: "bundle",
    petType: "dogs",
    images: [
      `${CDN}/SRB7ZIRIRPY2ERI5ZB7VJGET.jpeg`,
      `${CDN}/HA7ZMSI6I7D7D3YQVWP2EINL.jpeg`,
    ],
    description:
      "The ultimate PetCora starter kit. Everything you need for a full, professional-grade grooming session at home: our 12 oz Dog Shampoo, 12 oz Dog Conditioner, and ultra-absorbent Microfiber Towel — bundled together for maximum savings.",
    ingredients: [
      "See individual product listings for full ingredient details.",
    ],
    benefits: [
      "Save $14 vs. buying separately",
      "Complete grooming kit — nothing else needed",
      "Shampoo + Conditioner + Microfiber Towel",
      "Perfect starter set or gift",
      "Free from 9 harsh chemicals",
    ],
    howToUse:
      "Step 1: Shampoo — wet coat, lather, leave 2–3 min, rinse. Step 2: Conditioner — apply to damp coat, leave 3–5 min, rinse. Step 3: Towel dry with microfiber towel for fast, streak-free drying.",
    rating: 5.0,
    reviewCount: 143,
    featured: false,
    badge: "Most Popular",
    checkoutUrl:
      "https://www.mypetcora.com/product/3-in-1-bundle-12-oz-dog-shampoo-12-oz-dog-conditioner-microfiber-towel-/EUTB5WZNG3XLK2ONHKST2ERZ?cs=true&cst=custom",
  },
  {
    id: "5",
    slug: "microfiber-towel",
    name: "Microfiber Towel",
    tagline: "Dry faster, shed less — built for pet coats",
    price: 9.99,
    category: "grooming",
    petType: "all",
    images: [`${CDN}/T6DGAIV5BT3SABDHKIXB4YIW.jpeg`],
    description:
      "Our ultra-absorbent microfiber towel is specifically designed for pet coats — it soaks up 5× more water than a regular towel, cuts drying time in half, and is gentle enough for sensitive skin. Works great after every bath or after outdoor adventures in the rain.",
    ingredients: ["80% Polyester", "20% Polyamide Microfiber"],
    benefits: [
      "Absorbs 5× more than a regular towel",
      "Cuts drying time in half",
      "Gentle on sensitive skin & coats",
      "Machine washable & reusable",
      "Works for dogs & cats",
    ],
    howToUse:
      "After bathing, gently press and blot the coat — don't rub, as this can cause tangles. Work from head to tail in sections. Machine wash cold, tumble dry low.",
    rating: 4.7,
    reviewCount: 98,
    featured: true,
    checkoutUrl:
      "https://www.mypetcora.com/product/microfiber-towel/62GSLWTMISO6WMNDMCUCKGOH?cs=true&cst=custom",
  },
];

export const reviews: Review[] = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "My golden retriever had the worst dry skin for years. After just two washes with the PetCora shampoo he stopped scratching completely. I genuinely can't believe the difference. This stuff is liquid gold.",
    petName: "Biscuit",
    petType: "Golden Retriever",
    date: "April 2025",
  },
  {
    name: "James T.",
    rating: 5,
    text: "I've tried every 'natural' pet shampoo out there. PetCora is the real deal — no fake fragrance smell, actually cleans, and my dog's coat looks amazing. Will never go back to anything else.",
    petName: "Max",
    petType: "Labrador",
    date: "March 2025",
  },
  {
    name: "Maria R.",
    rating: 5,
    text: "The conditioner is INSANE. My poodle mix always came out frizzy after baths. Now she looks like she just left a groomer. I've already recommended this to everyone in my dog walking group.",
    petName: "Coco",
    petType: "Poodle Mix",
    date: "May 2025",
  },
  {
    name: "Derek W.",
    rating: 5,
    text: "Our vet recommended switching to a natural shampoo after our dog developed a skin allergy. Found PetCora, tried it, and the irritation cleared up within a week. Incredible product.",
    petName: "Ranger",
    petType: "German Shepherd",
    date: "April 2025",
  },
  {
    name: "Priya K.",
    rating: 5,
    text: "Got the 3-in-1 bundle as a gift for my sister. She texted me two days later saying her dog's coat had never looked better. Already ordered one for myself.",
    petName: "Mango",
    petType: "Labrador",
    date: "May 2025",
  },
  {
    name: "Tommy B.",
    rating: 5,
    text: "The microfiber towel is honestly the sleeper hit of this whole line. Dries my husky in half the time and he doesn't fight it like he does the blow dryer. The bundle is such a great deal.",
    petName: "Storm",
    petType: "Siberian Husky",
    date: "March 2025",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
