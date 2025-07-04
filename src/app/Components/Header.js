"use client";

import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import { useSession } from "next-auth/react";
import UserMenu from "./UserMenu";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="flex flex-wrap items-center justify-between p-4 bg-white shadow-md border-b border-gray-200">
      {/* Logo + Brand */}
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
          <span className="text-lg sm:text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            SecureAuth
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
        <Link
          href="/dashboard"
          className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-bold sm:text-base"
        >
          Dashboard
        </Link>

        {status === "authenticated" ? (
          <UserMenu />
        ) : (
          <Link
            href="/loginform"
            className="bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
