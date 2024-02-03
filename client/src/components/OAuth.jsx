import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: result.user.displayName, email: result.user.email, photo: result.user.photoURL }),
            })

            const data = await res.json();
            dispatch(loginSuccess(data));
            navigate('/');

        } catch (error) {
            console.log("Couldn't sign in with Google");
        }
    }

    return (
        <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white px-4 py-2 rounded-lg uppercase hover:opacity-95'>
            <p>Continue with Google</p>
        </button>
    )
}

export default OAuth
