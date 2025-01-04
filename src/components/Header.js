import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

  return (
    <div>
      <div className='flex justify-between absolute bg-gradient-to-b from-[rgba(0,0,0,0.9)] w-full h-16 items-center p-4 z-10'>
        <img className='h-16' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo' />
       {
        user && (
          <div className='flex items-center space-x-4'>
            <img 
              className='h-10 rounded-full' 
              src={user.photoUrl} 
              alt={user.displayName} 
            />
            <button onClick={handleSignOut} className='bg-[#E50914] text-white p-2 rounded-md'>Sign Out</button>
          </div>
        )
       }
      </div>
      
    </div>
  )
}

export default Header