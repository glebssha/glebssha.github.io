import styles from '../styles/Login.module.css'
import inputs from '../styles/Inputs.module.css'
import AuthService from "../services/auth.service";
import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import BgImage from '../components/BgImage'


export default function Login() {
    const navigate = useNavigate();

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        AuthService.login(login, password).then(
            (r) => {
                setErr("");
                navigate("/", {replace: false})
                window.location.reload(); 
            }, (respErr)=>{
                setErr("Authentication error")
            });
    }
    return (
        <>
    <BgImage hide={true}/>
    <div className={styles.loginWrapper}>
        <form onSubmit={handleLogin}>
            <div className={inputs.form}>
                <div className={inputs.row}>
                    <input type="text" placeholder="Login" name="login" value={login} onChange={e=>setLogin(e.target.value)} />
                </div>
                <div className={inputs.row}>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={e=>setPassword(e.target.value)} />
                </div>
                <div className={inputs.row}>
                    <div className={inputs.loadingButton}>
                        <button className={inputs.submitButton}>Login</button>
                        <div className={inputs.loading}>
                        </div>
                    </div>
                </div>
                <div className={inputs.err}>{err}</div>

            </div>
        </form>
    </div>
    </>
    )   
}