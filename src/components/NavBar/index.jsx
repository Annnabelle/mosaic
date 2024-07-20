import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = ({ burgerIsOpen }) => {
  const location = useRouter();
  const pathname = usePathname();
  // const isActive = router.pathname === href;

  // console.log(router.pathname);

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
              href='./oneToOne'
              className={`navLink ${pathname === "/oneToOne" ? "active" : ""}`}
            >
              Серия 1Х1 см
            </Link>
            <Link
              // className={`navLink ${isActive ? "active" : ""}`}
              href='./twoToTwo'
              className={`navLink ${pathname === "/twoToTwo" ? "active" : ""}`}
            >
              Серия 2Х2 см
            </Link>
            <Link
              // className={`navLink ${isActive ? "active" : ""}`}
              href='./twoHalftwo'
              className={`navLink ${pathname === "/twoHalftwo" ? "active" : ""}`}
            >
              Серия 2.5Х2.5 см
            </Link>
            <Link
              // className={`navLink ${isActive ? "active" : ""}`}
              href='./fourToFour'
              className={`navLink ${pathname === "/fourToFour" ? "active" : ""}`}
            >
              Серия 4Х4 см
            </Link>
            <Link
              // className={`navLink ${isActive ? "active" : ""}`}
              href='./textured'
              className={`navLink ${pathname === "/textured" ? "active" : ""}`}
            >
              Текстурная
            </Link>
            <Link
              // className={`navLink ${isActive ? "active" : ""}`}
              href='./honeycomb'
              className={`navLink ${pathname === "/honeycomb" ? "active" : ""}`}
            >
              Соты
            </Link>
            <Link
              // className={`navLink ${isActive ? "active" : ""}`}
              href='./drop'
              className={`navLink ${pathname === "/drop" ? "active" : ""}`}
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
