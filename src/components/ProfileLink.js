import styles from '../styles/ProfileLink.module.css'
import AuthService from '../services/auth.service';


export default function ProfileLink() {
    const auth = AuthService.getCurrentUser()
    const user = auth.username;
    const capitalize = (s) =>
    {
        return s && s[0].toUpperCase() + s.slice(1);
    }
    return (
        <>
        <div className={styles.profileWrapper}>
            <div className={styles.profileUsername}>
                Hello, {capitalize(user)}
            </div>
            <img src="profile_icon.png" />
        </div>
        </>
    )
}
