import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/globals.scss";
import Header from "@/components/Header/Index";
import Footer from "@/components/Footer/Index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
