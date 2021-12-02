import * as React from 'react';
import styles from '../styles/Header.module.css'
import Menu from '../components/Menu'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    <div className={styles.headerMain}>
        <Menu />
        <h1 className={styles.title}>
          <Link to="/">Windows of Wonder</Link>
        </h1>
    </div>
    </>
  );
}