export default function HeroBg() {
  return (
    <div style={{ position: 'relative', height: '400vh' }}>

      {/* ─── LAYER C — BACK sticky: Pain (dark) ─────────────────────────────
          Sticks from scroll 0 → 300vh of this container.
          Visible (uncovered) only during the last 100vh (200vh–300vh).        */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          background: '#060A06',
          display: 'flex',
          alignItems: 'center',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(#F5C842 1px, transparent 1px), linear-gradient(90deg, #F5C842 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 clamp(16px, 4vw, 64px)',
          }}
        >
          {/* Three fading lines — effort → release → silence */}
          <p style={{
            fontSize: 'clamp(26px, 3.8vw, 52px)',
            fontWeight: 900,
            color: '#F0EDE6',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            margin: 0,
          }}>
            You spent months on that track.
          </p>
          <p style={{
            fontSize: 'clamp(26px, 3.8vw, 52px)',
            fontWeight: 900,
            color: 'rgba(240,237,230,0.24)',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            margin: '6px 0 0',
          }}>
            You mastered it. You released it.
          </p>
          <p style={{
            fontSize: 'clamp(26px, 3.8vw, 52px)',
            fontWeight: 900,
            color: 'rgba(240,237,230,0.08)',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            margin: '6px 0 0',
          }}>
            Then — nothing.
          </p>

          {/* Supporting paragraph */}
          <p style={{
            marginTop: '40px',
            maxWidth: '520px',
            color: 'rgba(240,237,230,0.42)',
            fontSize: 'clamp(15px, 1.4vw, 18px)',
            lineHeight: 1.75,
            fontWeight: 400,
          }}>
            100,000 tracks are uploaded every single day.
            One voice — no matter how good — gets swallowed by the volume.
            Not a talent problem. A numbers problem.
          </p>

          {/* Pivot divider */}
          <div style={{
            marginTop: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            maxWidth: '520px',
          }}>
            <div style={{ height: '1px', flex: 1, background: '#182B18' }} />
            <span style={{
              fontSize: '10px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#22C55E',
              whiteSpace: 'nowrap',
            }}>
              There is another way
            </span>
            <div style={{ height: '1px', flex: 1, background: '#182B18' }} />
          </div>
        </div>
      </div>

      {/* ─── LAYER B — MIDDLE absolute: "Let your sound play" (light) ────────
          Positioned at 100vh inside the container.
          Covers Layer C during scroll 100vh → 200vh of this container.        */}
      <div
        style={{
          position: 'absolute',
          top: '100vh',
          left: 0,
          right: 0,
          height: '100vh',
          background: '#EEF1F5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 5,
          overflow: 'hidden',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(80px, 16vw, 220px)',
            fontWeight: 900,
            color: '#22C55E',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            margin: 0,
            userSelect: 'none',
          }}
        >
          Let your<br />sound play.
        </h2>
      </div>

      {/* ─── LAYER A — FRONT absolute: "The world is watching" (dark) ────────
          Positioned at top:0 of the container.
          Covers everything during scroll 0 → 100vh of this container.         */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          zIndex: 10,
          overflow: 'hidden',
          background: '#060A06',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0, opacity: 0.04,
            backgroundImage: 'linear-gradient(#F5C842 1px, transparent 1px), linear-gradient(90deg, #F5C842 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 20,
          }}
        >
          <p
            style={{
              color: '#F0EDE6',
              fontWeight: 800,
              fontSize: 'clamp(40px, 8vw, 110px)',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              textAlign: 'center',
              margin: 0,
            }}
          >
            The world<br />is watching.
          </p>
        </div>
      </div>

    </div>
  );
}
