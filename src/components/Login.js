import React from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn, setIsSignIn] = React.useState(true)

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      
      <Header />
      <div className='absolute w-full h-[calc(100vh-64px)]'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg" alt="body-image" />
      </div>
      <form className='absolute w-4/12 bg-black bg-opacity-80 m-32 mx-auto left-0 right-0 p-14 rounded-xl d-flex flex-col'>
        <h1 className='font-bold text-3xl text-white mb-6 flex'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignIn && <input className='p-2 my-4 bg-transparent border border-solid rounded-md text-white flex w-full' type='input' placeholder='Full Name' />}
        <input className='p-2 my-4 bg-transparent border border-solid rounded-md text-white flex w-full' type='email' placeholder='Email Or Mobile Number' />
        <input className='p-2 my-4 bg-transparent border border-solid rounded-md text-white flex w-full' type='password' placeholder='Password' />
        <button className='p-2 my-4 bg-[#C21119] text-white flex w-full justify-center'>{isSignIn ? 'Login' : 'Sign Up'}</button>
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