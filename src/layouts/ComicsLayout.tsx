import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/comics.scss";
import Header from "@/components/Header/Index";
import ShadersSlider from "@/components/ShadersSlider/Index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface ComicsLayoutProps {
  children: React.ReactNode;
}

export default function ComicsLayout({ children }: ComicsLayoutProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <header style={{ position: "relative" }}>
        <Header />
        <ShadersSlider />
      </header>
      <main>{children}</main>
    </div>
  );
}
