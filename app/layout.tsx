import type { Metadata } from "next";
import "./globals.css";
import { notoSansJp } from "./components/util/Font";

const webSiteTitle = process.env.NEXT_PUBLIC_WEBSITE_TITLE;

export const metadata: Metadata = {
  title: `${webSiteTitle}`,
  description: "",
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
