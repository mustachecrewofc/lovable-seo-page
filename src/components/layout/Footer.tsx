import logoWhite from '@/assets/mustache-crew-white.png';

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Past VAs', href: '#proof' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Current VA',
    links: [
      { label: 'VA World Cup 2026', href: '#' },
      { label: 'Submit', href: '#submit' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Past Campaigns',
    links: [
      { label: 'Brazilian Carnival VA', href: '#' },
      { label: 'Xmas 2025', href: '#' },
      { label: 'Euro Tour VA 2026', href: '#' },
    ],
  },
  {
    title: 'Follow',
    links: [
      { label: 'SoundCloud', href: '#' },
      { label: 'Instagram', href: 'https://www.instagram.com/mustachecrew/' },
      { label: 'Spotify', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="pb-10 px-4 md:px-8"
      style={{
        background: 'linear-gradient(135deg, #F5C842 0%, #E63B2E 50%, #7c1d1d 80%, #0A0A0F 100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-[#0A0A0F] border border-[#2A2A3E] rounded-3xl px-8 py-10 md:px-12 md:py-12 shadow-2xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {/* Logo column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <a href="/" className="flex items-center gap-3 mb-6">
                <img src={logoWhite} alt="Mustache Crew" className="h-14 w-auto invert" />
              </a>
              <p className="text-xs text-[#8A8A9A] leading-relaxed mb-4">
                Strategic VA campaigns for electronic music artists.
              </p>
              <span className="inline-flex items-center gap-2 text-xs text-[#8A8A9A] border border-[#2A2A3E] rounded-full px-3 py-1.5">
                <span>🌍</span>
                <span>EN · International</span>
              </span>
            </div>

            {/* Link columns */}
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold text-[#F5C842] mb-4 tracking-tight uppercase">{col.title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[#8A8A9A] hover:text-[#F0EDE6] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-6 border-t border-[#2A2A3E] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#8A8A9A]">© 2026 Mustache Crew Records. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-[#8A8A9A] hover:text-[#F5C842] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 6a3.84 3.84 0 1 0 0 7.68 3.84 3.84 0 0 0 0-7.68zm0 6.34a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm4.88-6.5a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8z"/></svg>
              </a>
              <a href="#" aria-label="SoundCloud" className="text-[#8A8A9A] hover:text-[#F5C842] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 12c-.4 0-.8.05-1.2.15-.4-3.6-3.4-6.4-7.1-6.4-1 0-2 .2-2.8.6-.4.2-.5.4-.5.8V18h11.6c1.7 0 3-1.4 3-3 0-1.7-1.3-3-3-3zM5 10v8h1V10c0-.3-.2-.5-.5-.5S5 9.7 5 10zm-2 1v6h1v-6c0-.3-.2-.5-.5-.5s-.5.2-.5.5zm-2 1v4h1v-4c0-.3-.2-.5-.5-.5s-.5.2-.5.5z"/></svg>
              </a>
              <a href="#" aria-label="Beatport" className="text-[#8A8A9A] hover:text-[#F5C842] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="14" r="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
