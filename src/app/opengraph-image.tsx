import { ImageResponse } from "next/og";

// Default social share image (1200x630) for every page that doesn't set its own.
// Blog posts override this with their cover image.
export const alt = "BIM Africa | Professional Websites, Cybersecurity & Digital Support Mauritius";
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
          padding: "80px",
          background: "#000",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700 }}>
          BIM <span style={{ color: "#ff1f00", marginLeft: 24 }}>Africa</span>
        </div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#e5e5e5" }}>
          Professional Websites, Cybersecurity & Digital Support
        </div>
        <div style={{ fontSize: 32, marginTop: 40, color: "#ff1f00" }}>
          Mauritius · Africa · Europe
        </div>
      </div>
    ),
    size,
  );
}
