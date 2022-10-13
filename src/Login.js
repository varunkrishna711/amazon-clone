import React from 'react';
import {useState} from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

const Login = () => {

    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                if(auth) {
                    navigate('/');
                }    
            })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) => {
               if(auth) {          //checking if credentials are correct
                   navigate('/');
               }
            })
            .catch((error) => alert(error.message));
    }

    return ( 
        <div className="login">
            <Link to='/'>
                <img className='login_logo' src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png" alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button className='login_signInButton' onClick={signIn} type="submit">Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.
                </p>

                <button className='login_registerButton' onClick={register} type="submit">Create your Amazon account</button>
            </div>
        </div>
     );
}
 
export default Login;