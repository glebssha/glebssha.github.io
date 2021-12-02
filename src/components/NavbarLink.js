import * as React from 'react';
import styles from '../styles/NavbarLink.module.css'
import { Link } from "react-router-dom";


export default function NavbarLink({text, href}) {
  return (
    <>
        <div className={styles.link}>
          <Link to={href}>{text}</Link>
        </div>
    </>
  );
}