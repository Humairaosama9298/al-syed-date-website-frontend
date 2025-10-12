import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Premium Date Export",
  description: "Export the best organic date worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-bg `}
      >
        <ThemeProvider>
          <Navbar/>
        <main className="min-h-screen">
        {children}
        <Footer/>
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
