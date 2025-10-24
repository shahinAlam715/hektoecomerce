import React from 'react'
import Container from './Container'
import update from "../assets/update.png"
import update1 from "../assets/update1.png"

const Update = () => {
    return (
        <>
            <section>
                <div className="">
                    <img src={update} alt="" />
                </div>
                <Container>
                    <div className="flex justify-center my-[64px]">
                        <img src={update1} alt="" />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Update