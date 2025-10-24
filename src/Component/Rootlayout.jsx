import React from 'react'
import Hedear from './Hedear'
import Navbar from './Navbar'
import Footer from './Footer'
import Footerbot from './Footerbot'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
    return (
        <>
            <Hedear />
            <Navbar />
            <Outlet/>
            <Footer />
            <Footerbot />
        </>
    )
}

export default Rootlayout