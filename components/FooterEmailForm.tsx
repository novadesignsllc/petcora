"use client";

export default function FooterEmailForm() {
  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F0A500]"
      />
      <button
        type="submit"
        className="bg-[#F0A500] hover:bg-[#C88A00] text-white font-bold text-sm py-2 rounded-lg transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
