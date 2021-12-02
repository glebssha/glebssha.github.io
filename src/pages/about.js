
import BgImage from '../components/BgImage'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div>
        <BgImage hide={true}>
        <div className={styles.center}>
            <p>What is Windows of Wonder?</p>
            <p>Windows of Wonder is an online community where people around the 
            world share the views from their windows to help someone else relax, 
            focus, meditate or take a vacation without having to move.</p>
            <p>Through it, we can look through someone else's eyes and fill that deep hole in our wanderlust hearts.</p>
        </div>
        </BgImage>
    </div>
  )
}
