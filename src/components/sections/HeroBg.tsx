/**
 * Two-layer scroll reveal:
 * - Back layer  (sticky, cream): "começo" stays put, revealed as front layer scrolls away
 * - Front layer (absolute, dark): arches + gradient + "Construir é só o" — slides up and off
 *
 * The 200vh outer container gives exactly 1 viewport-height of "scroll travel" to the
 * dark front layer before it fully exits, matching the sticky back layer's lock range.
 */
export default function HeroBg() {
  return (
    <div style={{ position: 'relative', height: '200vh' }}>

      {/* ── BACK LAYER: cream "começo" — sticky, stays centred while dark layer scrolls away ── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          background: '#FCFBF8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(80px, 16vw, 220px)',
            fontWeight: 700,
            color: '#1C1C1C',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            margin: 0,
            userSelect: 'none',
          }}
        >
          começo
        </h2>
      </div>

      {/* ── FRONT LAYER: dark surface matching the hero — grid + text. Scrolls off top. ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          zIndex: 10,
          overflow: 'hidden',
          background: '#1B1B1B',
        }}
      >
        {/* Subtle grid pattern — same as HeroSection */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* "Construir é só o" — centered */}
        <div
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 20,
          }}
        >
          <p
            style={{
              color: '#F8F4EC',
              fontWeight: 700,
              fontSize: 'clamp(40px, 8vw, 110px)',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Construir é só o
          </p>
        </div>
      </div>

    </div>
  );
}
