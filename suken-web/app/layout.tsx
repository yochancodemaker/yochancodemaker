import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import { Noto_Sans_JP, Poppins } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-noto-sans-jp",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "数学研究同好会 - 鎌倉学園",
  description: "鎌倉学園の数学研究同好会（実質PC部）の公式サイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSansJP.variable} ${poppins.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
