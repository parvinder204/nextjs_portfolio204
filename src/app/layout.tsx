import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { Metadata } from "next";
import MyNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "A portfolio built with Next.js, TypeScript, and Bootstrap 5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MyNavbar /> {/* Navbar */}
        <main>{children}</main>
        <Footer /> {/* Footer */}
      </body>
    </html>
  );
}
