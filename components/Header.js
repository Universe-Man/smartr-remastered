"use client"

// components/Header.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  if (pathname !== "/" && pathname !== "/home/quiz") {
    return (
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    );
  }
};

export default Header;