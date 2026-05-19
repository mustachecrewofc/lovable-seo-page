const genres = [
  '🇧🇷 Brazil', 'Tech House', '🇩🇪 Germany', 'Afro House', '🇸🇪 Sweden',
  'Melodic Techno', '🇦🇷 Argentina', 'Bass House', '🇳🇱 Netherlands',
  'Peak Time', '🇬🇧 UK', 'Progressive House', '🇺🇸 USA', 'Breaks',
  '🇲🇽 Mexico', 'Electronica', '🇵🇹 Portugal', 'Deep House', '🇮🇹 Italy',
  'Dubstep', '🇯🇵 Japan', 'House', '🇿🇦 South Africa', 'Techno',
  '🇫🇷 France', 'Electro', '🇨🇴 Colombia', 'Drum & Bass',
];

// Duplicate for seamless loop
const items = [...genres, ...genres];

export default function MarqueeSection() {
  return (
    <div className="relative overflow-hidden border-y border-[#182B18] bg-[#060A06] py-4 select-none">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #060A06, transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #060A06, transparent)' }} />

      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-5 text-sm font-medium text-[#728A72]">
            {item}
            <span className="text-[#182B18]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
