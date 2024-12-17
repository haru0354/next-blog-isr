import type { Metadata } from "next";

const webSiteTitle = process.env.WEBSITE_TITLE;

export const metadata: Metadata = {
  title: {
    default: "記事一覧",
    template: `%s | ${webSiteTitle}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
