import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";


const ROBOTO = Roboto({subsets: ["latin"], weight: ['400', '700', ]})

export const metadata: Metadata = {
  title: "E-commerce Cia. do Escritório",
  description: "Loja de cadeiras e móveis para escritório com 20 anos de tradição em Curitiba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ROBOTO.className}`}>
      <div className="flex flex-col min-h-screen">
      <NavBar/>
      <main className="flex-grow bg-black">{children}</main>
      <Footer/>
      </div>
      </body>
    </html>
  );
}
