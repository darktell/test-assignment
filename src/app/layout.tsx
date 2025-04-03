import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-main`}
      >
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
            removeDelay: 1000,
          }}
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
