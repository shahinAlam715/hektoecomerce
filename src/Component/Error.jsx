import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
       <section>
          <Container>
            <div className="">
                <h1 className='text-[200px] font-bold text-[#262626] text-center'>404</h1>
            </div>
            <div className="text-center">
              <Link to="/">
                 <button className='bg-[#FB2E86] text-[16px] font-Josefin 
                 text-[#fff] h-[50px] w-[150px] rounded-[2px]'>Back To Home</button>
              </Link>
            </div>
          </Container>
       </section>
    </>
  )
}

export default Error