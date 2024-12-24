import type { Metadata } from "next";
import "./globals.css";
import { notoSansJp } from "./components/util/font";

const webSiteTitle = process.env.NEXT_PUBLIC_WEBSITE_TITLE;
const webSiteDescription = process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION;

export const metadata: Metadata = {
  title: `${webSiteTitle}`,
  description: `${webSiteDescription}`,
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
