"use client";
import React, { useState, useEffect } from 'react';
import styles from "./Header.module.scss"
import Image from 'next/image'
import LogoImage from "../../../../public/images/site-logo.svg"
import Link from 'next/link'
const Header = () => {
/* Toggle Class in body for overflow */
const [isMenuOpen, setIsMenuOpen] = useState(false);

useEffect(() => {
  // Toggle class on body
  if (isMenuOpen) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
}, [isMenuOpen]);

/* Added sticky class for small header in scroll */
const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const stickySaved = localStorage.getItem('isSticky') === 'true';
    if (stickySaved) {
      setIsSticky(true);
    }
    const handleScroll = () => {
      const shouldBeSticky = window.scrollY > 50;

      setIsSticky(shouldBeSticky);
      localStorage.setItem('isSticky', shouldBeSticky);
    };

    window.addEventListener('scroll', handleScroll);
})


    const MenuLists = [
        {
            title:'Book a treatment',
            url:'#'
        },
        {
            title:'Purchase product',
            url:'#'
        }
    ]
  return (
    <header className={`${styles.headerWrapper} ${isSticky ? styles.sticky : ''}`}>
        <div className={`container ${styles.container}`}>
            <div className={`${styles.headerContent}`}>
            <div className={`${styles.logo}`}>
                <Link href='/'>
                <Image src={LogoImage} alt='' width={114} height={44} />
                </Link>
            </div>

            <nav className={`${styles.navaBar} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <ul className={`${styles.navLists}`}>
                {MenuLists?.map((items, i) => (
                    <li key={i}>
                    <Link href={items?.url} className={`${styles.navLink}`}>
                        {items?.title}
                    </Link>
                    </li>
                ))}
                </ul>
            </nav>

            <span
                className={`${styles.toggleMenu} ${isMenuOpen ? styles.menuOpen : ''}`}
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                <i className={styles.toggleBtn}></i>
            </span>
            </div>
        </div>
    </header>

  )
}

export default Header