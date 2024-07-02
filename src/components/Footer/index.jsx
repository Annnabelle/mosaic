import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import "./styles.sass";

const Footer = () => {
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
                  className='footerLink'
                  href=''
                >
                  Серия 1Х1 см
                </Link>
                <Link
                  className='footerLink'
                  href=''
                >
                  Серия 2Х2 см
                </Link>
                <Link
                  className='footerLink'
                  href=''
                >
                  Серия 2.5Х2.5 см
                </Link>
                <Link
                  className='footerLink'
                  href=''
                >
                  Серия 4Х4 см
                </Link>
                <Link
                  className='footerLink'
                  href=''
                >
                  Текстурная
                </Link>
                <Link
                  className='footerLink'
                  href=''
                >
                  Соты
                </Link>
                <Link
                  className='footerLink'
                  href=''
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
                    href=''
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
