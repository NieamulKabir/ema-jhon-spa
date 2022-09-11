import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('')

    const [signInWithEmailAndPassword, error, user] = useSignInWithEmailAndPassword(auth)

    const navigate = useNavigate()
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    if (user) {
        navigate('/shop')
    }
    const handleUserSignIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={handleUserSignIn} action="">
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />

                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="email" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>
                            {error?.message}
                        </p>
                        <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <p>
                        New to Ema-John? <Link to='/signup' className='form-link'>Create an account</Link>
                    </p>
                </div>

            </div>
            <br />
        </div>
    );
};

export default Login;