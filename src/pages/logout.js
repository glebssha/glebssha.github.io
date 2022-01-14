import AuthService from '../services/auth.service';
import { useNavigate, Navigate} from "react-router-dom";

export default function Logout() {
    const auth = AuthService.getCurrentUser()
    if (auth) {
        AuthService.logout();
        window.location.reload();
    }
    return  <Navigate to="/" />
}