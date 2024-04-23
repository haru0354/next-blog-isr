import type { Metadata } from "next";
import "./globals.css";
import { notoSansJp } from "./components/util/Font";

export const metadata: Metadata = {
  title: "",
  description:
    "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>{children}</body>
    </html>
  );
}
