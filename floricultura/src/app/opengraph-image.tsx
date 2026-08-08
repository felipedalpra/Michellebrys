import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background:
            "radial-gradient(circle at 15% 15%, #294231, #16231a 60%)",
          color: "#fbf7f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f2c14e, #d97f1f)",
              display: "flex",
            }}
          />
          <span style={{ fontSize: 32, fontWeight: 600, letterSpacing: 1 }}>
            {siteConfig.name}
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, maxWidth: 900 }}>
          {siteConfig.tagline}.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#cdd98f",
            marginTop: 24,
          }}
        >
          Plantas · Flores · Vasos · Jardim completo — Porto Alegre
        </div>
      </div>
    ),
    { ...size }
  );
}
