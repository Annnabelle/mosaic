import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavBar = ({ burgerIsOpen }) => {
  const location = useRouter();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  return (
    <nav className={`nav ${burgerIsOpen ? "activeMenu" : ""}`}>
      <div className='navContainer'>
        <div className='navBox'>
          <div className='links'>
            <Link
              className='navLink'
              href='./'
            >
              Серия 1Х1 см
            </Link>
            <Link
              className='navLink'
              href='./about'
            >
              Серия 2Х2 см
            </Link>
            <Link
              className='navLink'
              href='./portfolio'
            >
              Серия 2.5Х2.5 см
            </Link>
            <Link
              className='navLink'
              href='./services'
            >
              Серия 4Х4 см
            </Link>
            <Link
              className='navLink'
              href='./news'
            >
              Текстурная
            </Link>
            <Link
              className='navLink'
              href='./news'
            >
              Соты
            </Link>
            <Link
              className='navLink'
              href='./news'
            >
              DROP
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
