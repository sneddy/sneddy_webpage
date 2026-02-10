import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 600,
}

export const contentType = "image/png"

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          backgroundColor: "#0b0f1a",
          backgroundImage:
            "radial-gradient(800px 480px at 10% 0%, rgba(34,211,238,0.16), transparent 60%), radial-gradient(800px 480px at 90% 10%, rgba(250,204,21,0.16), transparent 60%)",
          color: "#f8fafc",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ fontSize: "64px", fontWeight: 700, letterSpacing: "-0.02em" }}>Anuar Aimoldin</div>
        <div style={{ fontSize: "30px", color: "rgba(248,250,252,0.85)", marginTop: "12px" }}>
          AI Researcher &amp; Industry Leader
        </div>
        <div
          style={{
            marginTop: "22px",
            fontSize: "20px",
            color: "rgba(248,250,252,0.7)",
          }}
        >
          anuar.best
        </div>
      </div>
    ),
    size,
  )
}
