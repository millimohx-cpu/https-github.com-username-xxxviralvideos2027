import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "xxxviralvideos2027 | Streaming UI Prototype",
  description: "A placeholder-only streaming interface prototype.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
