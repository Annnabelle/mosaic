"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../NavBar";
import Button from "../UI/Button";
import "./styles.sass";

const Header = ({ bgBlack }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const toggleMenu = (toOpen) => {
    setBurgerIsOpen(toOpen);
  };

  const pathName = usePathname();

  return (
    <header
      className={`header  ${burgerIsOpen ? "white" : ""} ${scroll ? "bgFirst" : ""}
      }`}
    >
      <div className=' container'>
        <div className='headerItems'>
          <div className='headerItem'>
            <Link
              href='./'
              className='headerLogo'
            >
              <Image
                src='/premiumLogo2.svg'
                alt='premiumLogo2'
                className='logo'
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className='headerItem'>
            <span
              className={`mobileOverlay ${burgerIsOpen ? "activeMenu" : ""}`}
              onClick={(e) => toggleMenu(false)}
            ></span>
            <NavBar burgerIsOpen={burgerIsOpen} />
          </div>
          <div className='headerPhone'>
            <Link
              className='link'
              href='tel:+998992088888'
            >
              +9989 99 208 88 88
            </Link>
          </div>
          <div
            className='burgerBtnContainer'
            onClick={() => toggleMenu(!burgerIsOpen)}
          >
            <div className={`burgerBtn ${burgerIsOpen ? "active" : ""}`}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
