import type { Metadata } from "next";

const webSiteTitle = process.env.WEBSITE_TITLE;

export const metadata: Metadata = {
  title: {
    default: "",
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
