import * as React from 'react';
import styles from '../styles/Navbar.module.css'
import NavbarLink from './NavbarLink'

export default function Navbar() {
  return (
    <>
    <ul className={styles.navbarList}>
      <NavbarLink text="About" href="/about" />
      <NavbarLink text="Contact Us" href="/contact" />
      <NavbarLink text="Submit" href="/upload" />
    </ul>
    </>
  );
}