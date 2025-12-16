import React from 'react'
import Container from '../Container'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

    let navigate = useNavigate()

    let handlepament = ()=>{
        navigate('/myaccount')
    }

  return (
     <>
        <section className="py-[64px] bg-amber-300"> 
            <Container>
                <div className="" onClick={handlepament}>
                    <button className='bg-[#FB2E86] ml-[40%] text-[16px] font-Josefin text-[#fff] h-[50px] w-[150px] rounded-[2px]'>Payment</button>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Checkout