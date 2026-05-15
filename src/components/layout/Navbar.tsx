import { useState } from 'react';

const navLinks = [
  { label: 'The Strategy', href: '#strategy' },
  { label: '360° Promo', href: '#promo' },
  { label: 'Proof', href: '#proof' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 h-[60px] bg-[#0A0A0F]/85 backdrop-blur-md border-b border-[#2A2A3E]">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="12" stroke="#F5C842" strokeWidth="2"/>
          <path d="M7 16c2-3 5-3 7 0s5 3 7 0" stroke="#F5C842" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
        <span className="font-bold text-[#F0EDE6] text-lg tracking-tight">Mustache Crew Records</span>
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-3 py-1.5 text-sm text-[#8A8A9A] hover:text-[#F0EDE6] transition-colors rounded-lg hover:bg-[#13131F]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA buttons */}
      <div className="hidden md:flex items-center gap-2">
        <a href="#about" className="px-4 py-2 text-sm text-[#8A8A9A] hover:text-[#F0EDE6] transition-colors">
          Learn More
        </a>
        <a href="#submit" className="h-[36px] px-4 rounded-full bg-[#F5C842] text-sm font-semibold text-[#060612] hover:bg-[#FFD75A] transition-colors flex items-center">
          Submit Your Track
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 text-[#8A8A9A]"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {mobileOpen ? (
            <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
          ) : (
            <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0A0A0F] border-b border-[#2A2A3E] py-4 px-4 flex flex-col gap-1 shadow-sm">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="px-3 py-2 text-sm text-[#8A8A9A] hover:text-[#F0EDE6] rounded-lg hover:bg-[#13131F]">
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 mt-3 pt-3 border-t border-[#2A2A3E]">
            <a href="#about" className="flex-1 py-2 text-sm text-center text-[#8A8A9A] border border-[#2A2A3E] rounded-full">Learn More</a>
            <a href="#submit" className="flex-1 py-2 text-sm text-center font-semibold bg-[#F5C842] text-[#060612] rounded-full">Submit</a>
          </div>
        </div>
      )}
    </header>
  );
}
