import React from 'react'
import Container from './Container'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'

const Footerbot = () => {
  return (
    <>
    <section className='bg-[#E7E4F8] py-4'>
        <Container>
                 <div className="items-center flex justify-between">
                        <div className="">
                            <h2 className='text-[16px] text-[#8A8FB9] font-Lato
                                    font-medium'>©Webecy - All Rights Reserved</h2>
                        </div>
                        <div className="">
                            <div className="flex gap-x-2 items-center">
                                <FaFacebook className='text-[24px]' />
                                <FaInstagramSquare className='text-[24px]' />
                                <AiFillTwitterCircle className='text-[24px]' />
                            </div>
                        </div>
                    </div>
        </Container>
    </section>
    </>
  )
}

export default Footerbot


