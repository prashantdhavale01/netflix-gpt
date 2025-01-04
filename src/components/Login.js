import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateSignInData, checkValidateSignUpData } from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase.config';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }

  const handleButtonClick = () => {
    // handle validation data
    if(isSignIn) {
      const message = checkValidateSignInData(emailRef.current.value, passwordRef.current.value);
      setErrorMessage(message);
      if(message) return;

      // Sign In Firebase API
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+" - "+errorMessage);
          navigate('/');
        });
    }
    else {
      const message = checkValidateSignUpData(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
      setErrorMessage(message);
      if(message) return;
      
      // Sign Up Firebase API
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // Update Profile Firebase API
        updateProfile(user, {
          displayName: nameRef.current.value, photoURL: "https://avatars.githubusercontent.com/u/47112475?v=4"
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(setUser({uid:uid, email:email, displayName:displayName, photoUrl: photoURL}))
          navigate('/browse');
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.code+" - "+error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" - "+errorMessage);
      });

    }
  }

  return (
    <div>
      
      <Header />
      <div className='absolute w-full h-[calc(100vh-64px)]'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg" alt="body-image" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='absolute w-4/12 bg-black bg-opacity-80 m-32 mx-auto left-0 right-0 p-14 rounded-xl d-flex flex-col'>
        <h1 className='font-bold text-3xl text-white mb-6 flex'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignIn && 
        <input ref={nameRef} className='p-2 my-4 bg-transparent border border-solid rounded-md text-white flex w-full' type='input' placeholder='Full Name' />}
        <input ref={emailRef} className='p-2 my-4 bg-transparent border border-solid rounded-md text-white flex w-full' type='email' placeholder='Email Or Mobile Number' />
        <input ref={passwordRef} className='p-2 my-4 bg-transparent border border-solid rounded-md text-white flex w-full' type='password' placeholder='Password' />
        <div className='font-bold text-red-600'>{errorMessage}</div>
        <button className='p-2 my-4 bg-[#C21119] text-white flex w-full justify-center' type='button' onClick={handleButtonClick}>{isSignIn ? 'Login' : 'Sign Up'}</button>
        <div className='text-white'>
          {isSignIn ? 
            <>New to Netflix? <span onClick={toggleSignInForm} className='cursor-pointer font-bold'>SignUp Now</span></> 
            : 
            <>Already Registered User? <span onClick={toggleSignInForm} className='cursor-pointer font-bold'>SignIn Now</span></>
          }
        </div>

      </form>
    </div>
  )
}

export default Login