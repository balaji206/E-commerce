import React, { useState } from 'react'
import { IoMailSharp } from 'react-icons/io5';  // Correct import
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const handlePasswordVisibilityToggle = () => {
        setVisible(!visible);
    };

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100'>
            <div className='box-border flex flex-col bg-slate-200 h-96 w-96 shadow-xl rounded-xl'>
                <div>
                    <h1 className='text-center text-2xl font-bold'>User Login</h1>
                </div>
                <div className='w-full flex flex justify-center items-center'>
                    <form className='w-full flex flex-col justify-center items-center mt-4'>
                        <div className='flex rounded-lg bg-sky-100 shadow-lg w-full h-10 justify-between items-center mb-4'>
                            <input
                                className='w-full focus:outline-none text-center py-2 px-4'
                                type="email"
                                required
                                autoComplete='email'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                            />
                            <IoMailSharp className='mr-4 h-6 w-6 text-gray-500'/>
                        </div>  

                        <div className='flex rounded-lg bg-sky-100 shadow-lg w-full h-10 justify-between items-center mb-4'>
                            <input
                                className='w-full focus:outline-none text-center py-2 px-4'
                                type={visible ? 'text' : 'password'}
                                required
                                autoComplete='password'
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                            />
                            {visible 
                                ? <LuEye className='mr-4 h-6 w-6 text-gray-500' onClick={handlePasswordVisibilityToggle} />
                                : <LuEyeClosed className='mr-4 h-6 w-6 text-gray-500' onClick={handlePasswordVisibilityToggle} />
                            }
                        </div>

                        <div className='w-full flex mt-2 justify-center items-center'>
                            <input className='ml-2' type="checkbox" />
                            <label className='text-xs ml-2'>Remember me</label>
                            <a className='ml-6 text-xs text-sky-500' href='#'>Forgot Password?</a>
                        </div>

                        <button type='submit' className='w-full bg-cyan-400 text-center text-xl mt-5 rounded-lg h-10'>
                            Submit
                        </button>

                        <div className='flex w-full mt-3 justify-center'>
                            <h6 className='text-xs'>Don't have an account?</h6>
                            <Link className='ml-3 text-xs text-sky-500' to="/signup">Sign-up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
