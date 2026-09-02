import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#f3efe6",
          color: "#1a1714",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>
          IOFitness
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -2 }}>Get better.</div>
          <div style={{ fontSize: 32, maxWidth: 820, lineHeight: 1.35, color: "#5e574e" }}>
            Adaptive training that figures out how to make you physically better.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
