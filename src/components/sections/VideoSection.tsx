// 🎬 Replace YOUTUBE_VIDEO_ID below with the actual YouTube video ID when ready.
// Example: if the URL is https://www.youtube.com/watch?v=dQw4w9WgXcQ
// then the ID is: dQw4w9WgXcQ
const YOUTUBE_VIDEO_ID = 'rh2MzkDRtLY';

export default function VideoSection() {
  const hasVideo = YOUTUBE_VIDEO_ID !== 'PLACEHOLDER';

  return (
    <section className="relative bg-[#060A06] py-16 md:py-24 overflow-hidden">
      {/* Subtle green glow behind the video */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(34,197,94,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 flex flex-col items-center">
        {/* Label */}
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-6 bg-[#22C55E]" />
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#22C55E]">
            Watch the breakdown
          </span>
          <div className="h-px w-6 bg-[#22C55E]" />
        </div>

        {/* Heading */}
        <h2
          className="font-black text-[#F0EDE6] text-center leading-tight -tracking-[2px] mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          Everything you need to know.<br />
          <span className="text-[#22C55E]">In one video.</span>
        </h2>

        <p className="text-[#728A72] text-base md:text-lg text-center max-w-[520px] leading-relaxed mb-10">
          Watch the full VA breakdown — how it works, why it works, and what you get when you join.
        </p>

        {/* Video embed */}
        <div
          className="w-full max-w-[860px] rounded-2xl overflow-hidden border border-[#182B18]"
          style={{ boxShadow: '0 0 60px rgba(34,197,94,0.10), 0 30px 80px rgba(0,0,0,0.5)' }}
        >
          {hasVideo ? (
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 */ }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                title="Mustache Gang World Cup 2026 — VA Breakdown"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            /* Placeholder while video isn't uploaded yet */
            <div
              className="relative w-full flex flex-col items-center justify-center gap-4"
              style={{ paddingBottom: '56.25%' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0C140C]">
                <div className="w-16 h-16 rounded-full border-2 border-[#22C55E]/40 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#22C55E" opacity="0.5">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <p className="text-[#728A72] text-sm text-center px-8">
                  Video coming soon — uploading to YouTube shortly.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
