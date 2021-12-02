import * as React from 'react';
import styles from '../styles/Footer.module.css'
import Navbar from './Navbar'

export default function Footer() {
  return (
    <>
    <div className={styles.footerMain}>
        <Navbar />
    </div>
    </>
  );
}