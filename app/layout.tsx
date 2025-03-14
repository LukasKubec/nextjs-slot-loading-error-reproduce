import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
    topSlot,
    footerSlot,
}: Readonly<{
  children: React.ReactNode;
  topSlot: React.ReactNode;
  footerSlot: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <p>This is topSlot:</p>
          {topSlot}
        <p>This is children:</p>
          {children}
        <p>This is footerSlot:</p>
          {footerSlot}
      </body>
    </html>
  );
}
