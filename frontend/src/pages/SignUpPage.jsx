import React from 'react'
import WrapperAuth from '../components/Auth/WrapperAuth'
import SignUpImage from './../assets/auth/3d-rendering-website-hosting-concept.png'
import SignUp from '../components/Auth/SignUp'

const SignUpPage = () => {
    return (
        <>
            <WrapperAuth img={SignUpImage} name={`Sign Up`} >
                <SignUp />
            </WrapperAuth>
        </>
    )
}

export default SignUpPage