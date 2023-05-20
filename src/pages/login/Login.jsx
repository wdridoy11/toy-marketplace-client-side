import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigation} from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider';
import UserTitle from '../../components/shared/useTitle/UserTitle';
const googleIcon=`https://cdn-icons-png.flaticon.com/512/281/281764.png`;
const loginImage=`https://img.freepik.com/free-vector/home-screen-concept-illustration_114360-4703.jpg?w=826&t=st=1684343901~exp=1684344501~hmac=5129c44e94ed4c344739c3c7f5818b6421d3e0b2c50ebfa994cce263cabeb266`

const Login = () => {

    UserTitle("Login")
     // It's import from AuthProvider
    const {userLogin, createUserUsingGoogle} = useContext(AuthContext);
    const [error, setError] = useState("");
    
    const handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email,password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .catch((error)=>{
            setError(error.message)
        })
    }

  return (
    <div className='w-full items-center py-32'>
        <div className='container mx-auto'>
            <div>
                <div className='grid grid-cols-2 gap-10 items-center'>
                    <div>
                        <img className='w-full' src={loginImage} alt="login" />
                    </div>
                    <div className='border p-10'>
                        <h3 className='text-4xl text-center mb-10 font-bold'>Login</h3>
                        {error && <p className='text-red-600 text-center mb-2'>{error}</p>}
                        <form onSubmit={handleLogin}>
                            <input className='w-full border-b border-[#ddd] mb-5 pb-3 text-base outline-none' type="email" name="email" id="email" placeholder='Enter your email' required/>
                            <input className='w-full border-b border-[#ddd] mb-5 pb-3 text-base outline-none' type="password" name="password" id="password" placeholder='Enter your password' required/>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <input className='checkbox' type="checkbox" name="checkbox" id="checkbox"  value="Remember Me"/>
                                    <label className='font-medium text-black' htmlFor="checkbox">Remember Me</label>
                                </div>
                                <Link className='text-orange-400 text-base font-medium'>Forgot Password</Link>
                            </div>
                            <button className='btn text-white bg-orange-400 w-full border-0 rounded-none mt-10 mb-4 '>Login</button>
                            <p className='text-center text-base font-medium'>Don't have an account? <Link to={`/registration`} className='text-orange-400'>Create an account</Link></p>
                        </form>
                        <div className='md:w-1/2 mx-auto mt-6'>
                            <div onClick={createUserUsingGoogle} className='flex items-center justify-center border border-[#ddd] py-3 px-2 rounded-full mb-3 relative cursor-pointer'>
                                <p className='absolute top-1.5 left-2 text-4xl text-[#1877F2]'><img className='w-9' src={googleIcon} alt="" /></p>
                                <p className='text-base font-medium text-black'>Continue with Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login