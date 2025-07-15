import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eternal-grid",
  description: "made-by-farhan-javed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
