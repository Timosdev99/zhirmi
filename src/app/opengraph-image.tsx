import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = "Zhirmitech — websites, marketing, AI and operations";
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0b1f3a 0%, #123057 100%)",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                border: "4px solid #00a8a8",
                borderRadius: "6px",
              }}
            />
          </div>
          <div style={{ fontSize: "38px", letterSpacing: "-0.01em" }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: "22px",
              color: "#00a8a8",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                background: "#00a8a8",
              }}
            />
            <div>Tech and growth partner</div>
          </div>
          <div
            style={{
              fontSize: "72px",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "1020px",
            }}
          >
            Websites, marketing, AI and operations, handled.
          </div>
          <div style={{ fontSize: "28px", color: "rgba(255,255,255,0.7)" }}>
            One point of contact. A team of specialists.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "22px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div>{site.url.replace(/^https?:\/\//, "")}</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                background: "#00a8a8",
              }}
            />
            <div>Book a free call</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
