import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "",
    template: "%s | サイトタイトル",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
