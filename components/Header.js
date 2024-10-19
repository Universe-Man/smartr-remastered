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
          <Link href="/home">Home</Link>
          <Link href="/home/leaderboard">Leaderboard</Link>
          {/* <Link href="/">Log Out</Link> (only appears if logged in) */}
          <Link href="/">Exit</Link>
        </nav>
      </header>
    );
  }
};

export default Header;