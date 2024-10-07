import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import clsx from "clsx";
import { Room } from "./Room";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Figma Clone",
  description:
    "A minimalist Figma clone using Fabric.JS and Liveblocks for real-time collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("antialiased bg-primary-grey-200", workSans)}>
        <Room>{children}</Room>
      </body>
    </html>
  );
}
