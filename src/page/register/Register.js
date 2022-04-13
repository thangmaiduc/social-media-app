import "./register.css";
import { useRef, useEffect, useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register() {
  const username = useRef();
  const email = useRef();
    const password = useRef();
    const cfPassword = useRef();
    const [state, dispatch]= useContext(AuthContext)
    const navigate =useNavigate();
    const handleSubmit = async(e)=>{
      e.preventDefault();
      if(password.current.value === cfPassword.current.value){
        let newUser={
          username: username.current.value, 
          email: email.current.value,
          password: password.current.value
        }
        console.log(newUser);
        try {
          await axios.post('/auth/register',newUser );
        //  console.log(user.data);
         navigate('/login')
        } catch (error) {
          console.log(error);
        }
      }
     
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
            <input placeholder="Username" className="loginInput"  ref={username} required />
            <input placeholder="Email" className="loginInput" ref={email} required/>
            <input placeholder="Password" className="loginInput" ref={password} required type='password'/>
            <input placeholder="Password Again" className="loginInput" ref={cfPassword} required type='password'/>
            <button type="submit" className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
