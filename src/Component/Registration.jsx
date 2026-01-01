import React, { useState } from "react";
import Container from "./Container";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const Registration = () => {

    let navigate = useNavigate()
  const auth = getAuth();

  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let handleemail = (e) => {
    setemail(e.target.value);
  };

  let handlepassword = (e) => {
    setpassword(e.target.value);
  };

  let handleemaipass = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser).then(() => {
          setemail("");
          setpassword("");
          // Signed up
          const user = userCredential.user;
          toast.success("Account Created");
          navigate('/myaccount')
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        toast.error(errorCode);
      });
  };

  return (
    <section className="">
      <Toaster position="top-center" />
      <div className="bg-[#F6F5FF] py-[64px]">
        <Container>
          <h2 className="text-[36px] font-Josefin font-bold text-[#101750] py-4">
            Registration
          </h2>
          <div className="flex items-center py-2 gap-x-2">
            <Link to="/">
              <h3 className="text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]">
                Home .
              </h3>
            </Link>
            <h3 className="text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]">
              Pages .
            </h3>
            <h3 className="text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]">
              Shop Grid Default
            </h3>
          </div>
        </Container>
      </div>

      <div className="mt-[64px] mb-[64px]">
        <div className="bg-[#8080800a] h-[800px] w-[544px] mx-auto my-[64px]">
          <h2 className="text-[32px] font-Josefin font-bold text-center pt-[24px] text-[#000000]">
            Registration
          </h2>
          <p className="text-[17px] font-Lato font-medium text-[#9096B2] pt-[15px] text-center">
            Please Registration using account detail bellow.
          </p>
          <div className="ml-[40%] translate-x-[-50%]">
            <form>
              <input  required className='h-[52px] w-[432px] border-1 mt-[44px] text-[17px] font-Lato font-medium text-[#9096B2] pl-2 outline-none' type="text"  placeholder='First Name'/>
               <input required className='h-[52px] w-[432px] border-1 mt-[30px] text-[17px] font-Lato font-medium text-[#9096B2] pl-2 outline-none' type="text"  placeholder='Last Name'/>
                                 <input required className='h-[52px] w-[432px] border-1 mt-[44px] text-[17px] font-Lato font-medium text-[#9096B2] pl-2 outline-none' type="number"  placeholder='Phone Number'/>
                                <input  required className='h-[52px] w-[432px] border-1 mt-[30px] text-[17px] font-Lato font-medium text-[#9096B2] pl-2 outline-none' type="text"  placeholder='Address'/>
              <input required
                onChange={handleemail}
                value={email}
                className="h-[52px] w-[432px] border-1 mt-[44px] text-[17px] font-Lato font-medium text-[#9096B2] pl-2 outline-none"
                type="email"
                placeholder="Email Address"
              />
              <input required
                onChange={handlepassword}
                value={password}
                className="h-[52px] w-[432px] border-1 mt-[30px] text-[17px] font-Lato font-medium text-[#9096B2] pl-2 outline-none"
                type="password"
                placeholder="Password"
              />
              <input required
                onClick={handleemaipass}
                className="h-[52px] bg-[#FB2E86] w-[432px] border-1 mt-[30px] text-[17px] font-Lato font-medium text-[#fff] pl-2 outline-none"
                type="submit"
                placeholder=""
              />
            </form>
          </div>

          <div className="">
            <Link to="/myaccount">
              <p className="text-[17px] cursor-pointer font-Lato font-medium text-[#9096B2] pt-[25px] ml-[10%] text-center">
                Do have an Account?Login
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
