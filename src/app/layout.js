"use client";
import Navbar from "@/src/Layouts/Navbar/Navbar";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const path = usePathname();

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* <SessionProvider> */}
        <Navbar />
        {children}
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
