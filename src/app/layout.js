"use client";
import Navbar from "@/src/Layouts/Navbar/Navbar";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
      >
        {/* <SessionProvider> */}
        <Navbar />
        {children}
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
