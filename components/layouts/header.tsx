import Link from "next/link";
import React from "react";

export default async function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-gradient-to-br">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="block font-bold text-2xl transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Onion Note
        </Link>
        <ul className="hidden md:flex text-xl gap-4 text-muted-foreground">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="flex items-center gap-4"></div>
      </div>
    </header>
  );
}
