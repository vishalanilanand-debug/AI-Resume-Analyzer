"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Upload",
      path: "/upload",
    },
       {
      name: "Interview",
      path: "/interview",
    },
  ];

  return (

    <nav className="navbar">

      <div className="logo">

        <span className="logo-glow">
          AI
        </span>

        Resume Analyzer

      </div>

      <div className="nav-links">

        {navItems.map((item) => (

          <Link
            key={item.path}
            href={item.path}
            className={
              pathname === item.path
                ? "active-link"
                : ""
            }
          >
            {item.name}
          </Link>

        ))}

      </div>

      <button className="primary-btn nav-btn">

        Get Started

      </button>

    </nav>

  );

}