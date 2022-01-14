import { useState } from 'react';
import styles from '../styles/Menu.module.css'
import NavbarLink from './NavbarLink'
import AuthService from '../services/auth.service';

export default function Menu() {
  const [isActive, setActive] = useState(false);
  const auth = AuthService.getCurrentUser()

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
    <div className={`${styles.menu} ${isActive ? styles.active : ""}`} onClick={toggleClass}>
    <div className={styles.menuOpener}>
        <div className={`${styles.dot} ${styles.first}`}></div>
        <div className={`${styles.dot} ${styles.second}`}></div>
        <div className={`${styles.dot} ${styles.third}`}></div>
        <div className={`${styles.dot} ${styles.fourth}`}></div>
    </div>

      <ul>
        <NavbarLink text="Upload" href="/upload" />
        <NavbarLink text="About" href="/about" />
        {auth && <NavbarLink text="Logout" href="/logout" />}
      </ul>
    </div>
    </>
  );
}