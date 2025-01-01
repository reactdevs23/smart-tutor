"use client";
import Navbar from "@/src/Layouts/Navbar/Navbar";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Successfull from "../components/Modal/Successfull/Successfull";
import { checkEmailImg as successImg } from "../images";

export default function RootLayout({ children }) {
  const path = usePathname();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* <SessionProvider> */}
        <Navbar />
        {children}
        {/* </SessionProvider> */}
        {showConfirmationModal && (
          <Successfull
            isActive={showConfirmationModal}
            onClose={() => setShowConfirmationModal((prev) => !prev)}
            heading="Email Verification Succesfull"
            to="/"
            img={successImg}
          />
        )}
      </body>
    </html>
  );
}
