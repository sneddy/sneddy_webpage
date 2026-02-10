import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0b0f1a",
          backgroundImage:
            "radial-gradient(circle at 10% 0%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(circle at 90% 10%, rgba(250,204,21,0.18), transparent 60%), radial-gradient(circle at 50% 100%, rgba(16,185,129,0.16), transparent 65%)",
          color: "#f8fafc",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
            fontSize: "20px",
            letterSpacing: "-0.01em",
            alignSelf: "flex-start",
          }}
        >
          anuar.best
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: "68px", fontWeight: 700, letterSpacing: "-0.02em" }}>Anuar Aimoldin</div>
          <div style={{ fontSize: "36px", color: "rgba(248,250,252,0.85)" }}>
            AI Researcher &amp; Industry Leader
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(248,250,252,0.7)",
              maxWidth: "860px",
              lineHeight: 1.4,
            }}
          >
            Computer vision, medical imaging, and competitive ML at global scale.
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div
            style={{
              height: "10px",
              width: "160px",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #22d3ee, #facc15)",
            }}
          />
          <div style={{ fontSize: "18px", color: "rgba(248,250,252,0.7)" }}>Kaggle Master #14</div>
        </div>
      </div>
    ),
    size,
  )
}
