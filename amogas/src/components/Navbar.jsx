import React from "react";

export default function NavigationBar() {
  const menu = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-red-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          Amogas
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-6">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={"#" + item.toLowerCase()}
                className="hover:text-blue-200 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
}
