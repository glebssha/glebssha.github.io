import * as React from 'react';
import styles from '../styles/Header.module.css'
import Menu from '../components/Menu'
import ProfileLink from '../components/ProfileLink'
import { Link } from "react-router-dom";
import AuthService from '../services/auth.service';

export default function Header() {
  const auth = AuthService.getCurrentUser()

  return (
    <>
    <div className={styles.headerMain}>
        <Menu />
        <h1 className={styles.title}>
          <Link to="/">Windows of Wonder</Link>
        </h1>

        {auth && 
          <ProfileLink />
        }
    </div>
    </>
  );
}