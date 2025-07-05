import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Components/Provider";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SecureAuth — Enterprise-Grade Authentication & Security Web Application",
description: "SecureAuth is a modern, full-stack web application built with Next.js and Tailwind CSS that offers robust, secure user authentication and management features. It supports username/email login, Google OAuth, OTP verification, password reset, and protected routes — all backed by Firebase Firestore and enhanced with JWT and bcrypt for maximum security."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Provider><Header/>{children}<Footer/></Provider></body>
    </html>
  );
  
}
