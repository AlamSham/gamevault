export default function Loading() {
  return (
    <div className="container" style={{ padding: "4rem 1.5rem", minHeight: "60vh" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {/* Hero skeleton */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 200,
              height: 28,
              background: "var(--bg-tertiary)",
              borderRadius: "var(--radius-full)",
              margin: "0 auto 1.5rem",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
          <div
            style={{
              width: "60%",
              height: 40,
              background: "var(--bg-tertiary)",
              borderRadius: "var(--radius-md)",
              margin: "0 auto 1rem",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
          <div
            style={{
              width: "40%",
              height: 20,
              background: "var(--bg-tertiary)",
              borderRadius: "var(--radius-sm)",
              margin: "0 auto",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
        </div>

        {/* Cards skeleton */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  background: "var(--bg-tertiary)",
                  animation: "pulse 1.5s ease-in-out infinite",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
              <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div
                  style={{
                    height: 16,
                    width: "70%",
                    background: "var(--bg-tertiary)",
                    borderRadius: "var(--radius-sm)",
                    animation: "pulse 1.5s ease-in-out infinite",
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
                <div
                  style={{
                    height: 12,
                    width: "50%",
                    background: "var(--bg-tertiary)",
                    borderRadius: "var(--radius-sm)",
                    animation: "pulse 1.5s ease-in-out infinite",
                    animationDelay: `${i * 0.1 + 0.05}s`,
                  }}
                />
                <div
                  style={{
                    height: 36,
                    width: "100%",
                    background: "var(--bg-tertiary)",
                    borderRadius: "var(--radius-md)",
                    marginTop: "0.5rem",
                    animation: "pulse 1.5s ease-in-out infinite",
                    animationDelay: `${i * 0.1 + 0.1}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
