import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { firestore } from '../firebaseConfig';
import { getAuth } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

const auth = getAuth();
const user = auth.currentUser;

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });


const Login = ({ setIsLoggedIn }) => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
        
    const handleEmailChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    const handleSubmit = () => {
        // Simulated login logic
        // if (username === 'admin' && password === 'password') {
        //     setIsLoggedIn(true); // Update login status
        // }
        // firestore.collection('users').add({
        //     name: username,

        // })
        navigate('/our-story');
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log("here")
        });
    };

    return (
        <div>
            <h2>Please Login</h2>
            <TextField 
                label="Email" 
                value={email} 
                onChange={handleEmailChange} 
                variant="outlined" 
                fullWidth 
                margin="normal" 
            />
            <TextField 
                label="Password" 
                type="password" 
                value={password} 
                onChange={handlePasswordChange} 
                variant="outlined" 
                fullWidth 
                margin="normal" 
            />
            <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                onClick={handleSubmit}
            >
                Login
            </Button>
        </div>
    );
};

export default Login;