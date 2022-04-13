import { useRef,useContext,useEffect } from 'react';
import './login.css'
import {loginCall} from '../../apiCalls';
import {AuthContext} from '../../store/AuthContext';
import {useNavigate} from 'react-router-dom';
function Login() {
    const email = useRef();
    const password = useRef();
    const [state, dispatch]= useContext(AuthContext)
    const navigate =useNavigate();
    useEffect(()=>{
        state.user && navigate('/')
    })
    const handleSubmit =(e)=>{
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
          );
        console.log(state.user);
    }
    return (
        
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h1 className="logo">Social Media </h1>
                    <h4 className="desc">Ket noi moi luc moi noi</h4>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input placeholder="username or email"
                            type="email"
                            className="loginInput"
                            required
                            ref={email}
                            />
                        <input placeholder="password" 
                            type="password" 
                            className="loginInput" 
                            required
                            ref={password}
                            />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Sign up</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;