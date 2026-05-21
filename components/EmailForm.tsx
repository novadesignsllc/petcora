"use client";

export default function EmailForm({ dark = false }: { dark?: boolean }) {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className={`flex-1 px-5 py-3.5 rounded-full font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white ${
          dark
            ? "text-[#1A1A1A] bg-white"
            : "text-[#1A1A1A] bg-white border border-gray-200"
        }`}
      />
      <button
        type="submit"
        className="bg-[#1A1A1A] hover:bg-[#333] text-white font-black px-7 py-3.5 rounded-full transition-colors whitespace-nowrap"
      >
        Claim 10% Off
      </button>
    </form>
  );
}
