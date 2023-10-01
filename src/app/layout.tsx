import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Merriweather_Sans as MerriweatherSans } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeProvider";

const merriweatherSans = MerriweatherSans({
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
});

export const metadata: Metadata = {
  title: "DkBlog",
  description: "A blog using Next.Js and Contentlayer.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={merriweatherSans.variable}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
