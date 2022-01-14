import * as React from 'react';
import styles from '../styles/TextInput.module.css'

export default function TextInput() {
  return (
    <>
    <div className={styles.headerMain}>
        <input type="text" required placeholder="City" name="city" value={city} onChange={e => setCity(e.target.value)} />

    </div>
    </>
  );
}