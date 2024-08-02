import { FaUser , FaLock} from "react-icons/fa";
import './Login.css';


const LoginForm=()=>{

    const handleLogin = (event) => {
        event.preventDefault();
        
        // Assume login is successful untill backend is implemented
        const isLoggedIn = true;
    
        if (isLoggedIn) {
            window.location.href = '/TicTacToe'; 
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };
    return(
        <footer>
        <div className="login-wrapper">
            <form onSubmit={handleLogin}>
                <div className="login-header">
                <h1 >Login</h1>
                </div>
                <div className="input-box">
                    <input type="text" id="name" placeholder="Username" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="text" id="name" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>

            </form>
        </div>
        </footer>
    )
}

export default LoginForm;