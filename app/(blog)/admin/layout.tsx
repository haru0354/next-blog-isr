import { Metadata } from "next";

import AuthContext from "@/app/context/AuthContext";
import ToastContext from "@/app/context/ToastContext";
import Header from "@/app/components/layout/blog/Header";
import Footer from "@/app/components/layout/blog/Footer";

export const metadata: Metadata = {
  title: "ログイン画面",
  robots: {
    index: false, 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthContext>
        <ToastContext />
        <Header />
        {children}
        <Footer />
      </AuthContext>
    </>
  );
}
