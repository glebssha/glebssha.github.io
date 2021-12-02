
import BgImage from '../components/BgImage'
import styles from '../styles/About.module.css'
import navStyles from '../styles/NavbarLink.module.css'
import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div>
        <BgImage hide={true}>
        <div className={styles.center}>
            <p>Whoops! Seems like we're still working on this one...</p>
            <p>You can see some awesome Wonder Windows on our <div className={`${navStyles.link} ${navStyles.inlineLink}`}>
          <Link to="/image">home page</Link>
        </div>though </p>
        </div>
        </BgImage>
    </div>
  )
}
