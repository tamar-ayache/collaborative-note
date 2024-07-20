import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!email || !password) {
            alert('Email and password are required.');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('User registered successfully');
            console.log('Registered user:', email);
            navigate('/notes');
        } catch (error) {
            console.error("Error registering user: ", error);
            alert(`Registration Error: ${error.message}`);
        }
    };

    const handleLogin = async () => {
        if (!email || !password) {
            alert('Email and password are required.');
            return;
        }

        console.log('Login Attempt:', email, password); // הוספת הדפסה לקונסול

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('User logged in successfully');
            console.log('Logged in user:', email);
            navigate('/notes');
        } catch (error) {
            console.error("Error logging in user: ", error);
            console.log('Login Error Details:', error.code, error.message);
            alert(`Login Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
