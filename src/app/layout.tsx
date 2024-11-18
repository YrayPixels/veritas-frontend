import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veritas",
  description: "Tokenize your real world goods with Veritas and provide a layer of authenticity for your business.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
