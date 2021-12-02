import * as React from 'react';
import styles from '../styles/BgImage.module.css'
import { useEffect, useState} from 'react';
import { getNextImage } from '../lib/images'


export default function BgImage({hide, children}) {
  const [src, setSrc] = useState("");
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
      setLoading(true)
      let a = await getNextImage()
      if (a.image === src) {
        setLoading(false)
      }
      setSrc(a.image)
      setLocations(a.location)
  }

  const setLoaded = () => {
    setLoading(false)
  }
  
  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <img alt="" onLoad={setLoaded} className={`${styles.imgWrapper} ${loading ? styles.loading : ""}`} src={src} />
      {!hide && <div className={styles.openWindow}>
        <a>
          <h1 onClick={load} className={styles.open}> Open a new window </h1>
        </a>
      </div>
      }
      {children}
      <div className={styles.location}>
        <img className={styles.locationIcon} src="/location_icon.png" alt="me" width="39" height="26"/>
        <div className={styles.locationList}>
        {locations.map( (l) =>
           <div key={l} className={styles.locationEl}> {l} </div>
        )}
        </div>
      </div>
    </>
  );
}