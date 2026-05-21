import Link from "next/link";
import Image from "next/image";
import { Mail, Share2, ExternalLink } from "lucide-react";
import FooterEmailForm from "@/components/FooterEmailForm";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Image
            src="https://c90ef8c4cbb00b7bf436.cdn6.editmysite.com/uploads/b/c90ef8c4cbb00b7bf436f07195f928132b9181d4844ec362678557323f4a25b5/10.4.2025_68e19f822dc1a6.94991264.png?width=2400&optimize=medium"
            alt="PetCora"
            width={110}
            height={44}
            className="h-10 w-auto object-contain mb-4"
          />
          <p className="text-sm leading-relaxed">
            Natural, premium grooming products crafted with love for the pets
            who deserve nothing but the best.
          </p>
          <div className="flex gap-4 mt-5">
            <a
              href="https://www.instagram.com/mypetcora"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#F0A500] transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@mypetcora"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-[#F0A500] transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="mailto:ask@mypetcora.com"
              aria-label="Email"
              className="hover:text-[#F0A500] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-[#4A7CC7] font-bold mb-4 text-sm uppercase tracking-widest">
            Shop
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/shop" className="hover:text-[#F0A500] transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/shop?category=shampoo" className="hover:text-[#F0A500] transition-colors">
                Shampoos
              </Link>
            </li>
            <li>
              <Link href="/shop?category=conditioner" className="hover:text-[#F0A500] transition-colors">
                Conditioners
              </Link>
            </li>
            <li>
              <Link href="/shop?category=grooming" className="hover:text-[#F0A500] transition-colors">
                Grooming Supplies
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[#4A7CC7] font-bold mb-4 text-sm uppercase tracking-widest">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-[#F0A500] transition-colors">
                About PetCora
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[#F0A500] transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/faq#shipping" className="hover:text-[#F0A500] transition-colors">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link href="/faq#returns" className="hover:text-[#F0A500] transition-colors">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-[#4A7CC7] font-bold mb-4 text-sm uppercase tracking-widest">
            Get 10% Off
          </h4>
          <p className="text-sm mb-3">
            Join the PetCora family and save on your first order.
          </p>
          <FooterEmailForm />
        </div>
      </div>

      <div className="border-t border-white/10 max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
        <p>© {new Date().getFullYear()} PetCora. All rights reserved.</p>
        <p>Made with ❤️ for pets everywhere.</p>
      </div>
    </footer>
  );
}
