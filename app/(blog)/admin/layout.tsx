import { Metadata } from "next";
import AuthContext from "@/app/components/context/AuthContext";
import ToastContext from "@/app/components/context/ToastContext";
import Header from "@/app/components/section/Header";
import Footer from "@/app/components/section/Footer";

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
