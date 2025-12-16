import React, { useState } from 'react'
import Container from './Container'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const Myaccount = () => {
    const auth = getAuth();

    let [email, setemail] = useState('');
    let [password, setpassword] = useState('');
    let navigate = useNavigate()

    let handleemail = (e)=>{
        setemail(e.target.value);
        
    }
     let handlepassword = (e)=>{
        setpassword(e.target.value);
        
    }

    let handlesingin = (e)=>{
         e.preventDefault();
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    toast.success('singin successfull')

    navigate('/checkout')

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    toast.error(errorMessage)
    
  });
        
    }

  return (
   <section className=''>
     <Toaster position="top-center" />
                     <div className="bg-[#F6F5FF] py-[64px]">
                <Container>
                        <h2 className='text-[36px] font-Josefin font-bold text-[#101750] py-4'>My Account</h2>
                        <div className="flex items-center py-2 gap-x-2">
                            <Link to="/">
                                <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Home .</h3>
                            </Link>
                            <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Pages .</h3>
                            <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Shop Grid Default</h3>
                        </div>
                </Container>
                    </div>

                    <div className="">
                        <div className="bg-[#8080800a] h-[474px] w-[544px] mx-auto my-[64px]">
                            <h2 className='text-[32px] font-Josefin font-bold text-center pt-[24px] text-[#000000]'>Login</h2>
                            <p className='text-[17px] font-Lato font-medium text-[#9096B2] pt-[15px] text-center'>Please login using account detail bellow.</p>
                            <div className="ml-[40%] translate-x-[-50%]">
                            <form>
                                <input value={email} onChange={handleemail} className='h-[52px] w-[432px] border-1 mt-[44px] text-[17px]
                                 font-Lato font-medium text-[#9096B2] pl-2 outline-none' type="email"
                                   placeholder='Email Address'/>
                                <input value={password} onChange={handlepassword} className='h-[52px] w-[432px] border-1 mt-[30px] text-[17px]
                                 font-Lato font-medium text-[#9096B2] pl-2 outline-none' type="password"
                                   placeholder='Password'/>

                                     <input onClick={handlesingin} type="submit" placeholder='Sing in' className='text-[17px] font-Lato font-medium text-[red] pt-3 bg-amber-200 rounded-[3px] items-center text-center'/>
                            </form>
                            </div>

                            <div className="">
                                <p className='text-[17px] font-Lato font-medium text-[#9096B2] pt-[25px] ml-[10%] cursor-pointer'>Forgot your password?</p>
                            </div>
                            {/* <div className="">
                                <div className="group h-[52px] w-[432px] bg-[#FB2E86] mx-auto mt-[15px] cursor-pointer">
                                   <input onClick={handlesingin} type="submit" placeholder='Sing in' className='text-[17px] font-Lato font-medium text-[#fff] pt-3 rounded-[3px] items-center text-center'/>
                                </div>
                            </div> */}
                             <div className="">
                                <Link to="/registration">
                                <p className='text-[17px] cursor-pointer font-Lato font-medium text-[#9096B2] pt-[25px] ml-[10%] text-center'>Don’t have an Account?Create account</p>
                                </Link>
                            </div>
                        </div>
                    </div>
            </section>

          
  )
}

export default Myaccount