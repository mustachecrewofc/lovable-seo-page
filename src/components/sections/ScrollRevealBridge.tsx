export default function ScrollRevealBridge() {
  return (
    <div style={{ position: 'relative', height: '200vh' }}>
      {/* BACK LAYER — pinned at the BOTTOM. This is the "old" content
          the user is leaving behind (the proof). It stays visible while
          the new layer descends over it from the top. */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          background: '#0A0A0F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(#F5C842 1px, transparent 1px), linear-gradient(90deg, #F5C842 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <h2
          style={{
            color: '#F0EDE6',
            fontWeight: 900,
            fontSize: 'clamp(40px, 8vw, 110px)',
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            textAlign: 'center',
            margin: 0,
            position: 'relative',
            zIndex: 2,
          }}
        >
          Proof is <span style={{ color: '#F5C842' }}>only</span><br/>the beginning.
        </h2>
      </div>

      {/* FRONT LAYER — anchored at the BOTTOM of the 200vh container.
          As the user scrolls down, this layer slides INTO the viewport
          from the top, descending over the back layer. */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100vh',
          zIndex: 10,
          overflow: 'hidden',
          background: '#F5C842',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h2
          style={{
            color: '#0A0A0F',
            fontWeight: 900,
            fontSize: 'clamp(80px, 16vw, 220px)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            margin: 0,
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          Now push<br/>together.
        </h2>
      </div>
    </div>
  );
}
