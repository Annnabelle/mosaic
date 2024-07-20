"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import "./styles.sass";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footerContainer'>
          <div className='footerBody'>
            <div className='footerItems'>
              <div className='footerBox'>
                <div className='footerLogo'>
                  <Link
                    href='./'
                    className='footerLogo'
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
                <div className='footerInfo'>
                  <p className='text'>ООО «GOOD GLASS MOSAIC»</p>
                  <p className='text'>
                    Адрес: об. Ташкент, ТАШКЕНТСКАЯ ОБЛАСТЬ ЮКОРИ ЧИРЧИКСКИЙ РАЙОН, Миям Кангли МФЙ, ул.Калдиргоч, дом 4
                  </p>
                </div>
              </div>
            </div>
            <div className='footerItems'>
              <div className='footerBox'>
                <Link
                  // className='footerLink'
                  href='./oneToOne'
                  className={`footerLink ${pathname === "/oneToOne" ? "active" : ""}`}
                >
                  Серия 1Х1 см
                </Link>
                <Link
                  // className='footerLink'
                  href='./twoToTwo'
                  className={`footerLink ${pathname === "/twoToTwo" ? "active" : ""}`}
                >
                  Серия 2Х2 см
                </Link>
                <Link
                  // className='footerLink'
                  href='./twoHalftwo'
                  className={`footerLink ${pathname === "/twoHalftwo" ? "active" : ""}`}
                >
                  Серия 2.5Х2.5 см
                </Link>
                <Link
                  // className='footerLink'
                  href='./fourToFour'
                  className={`footerLink ${pathname === "/fourToFour" ? "active" : ""}`}
                >
                  Серия 4Х4 см
                </Link>
                <Link
                  // className='footerLink'
                  href='./textured'
                  className={`footerLink ${pathname === "/textured" ? "active" : ""}`}
                >
                  Текстурная
                </Link>
                <Link
                  // className='footerLink'
                  href='./honeycomb'
                  className={`footerLink ${pathname === "/honeycomb" ? "active" : ""}`}
                >
                  Соты
                </Link>
                <Link
                  // className='footerLink'
                  href='./drop'
                  className={`footerLink ${pathname === "/drop" ? "active" : ""}`}
                >
                  DROP
                </Link>
              </div>
            </div>
            <div className='footerItems'>
              <div className='footerBox'>
                <h5 className='title'>Свяжитесь с нами:</h5>
                <div className='iconsBox'>
                  <Link
                    href='tel:+998992088888'
                    className='icon'
                  >
                    <FaTelegramPlane />
                  </Link>
                  <Link
                    href='mailto:almazsagatova@gmail.com'
                    className='icon'
                  >
                    <TbMailFilled />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='footerRights'></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
