import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fraunces, DM_Sans } from "next/font/google";

// const font = DM_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '700']
// });

// const font = DM_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '700']
// });

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JusPay",
  description: "JusPay is a payments operating system for businesses in India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "bg-black")}>{children}</body>
    </html>
  );
}
