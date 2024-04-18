import React from 'react'
import WrapperAuth from '../components/Auth/WrapperAuth'
import loginImage from './../assets/auth/hands-stack-business-people.png'
import LogIn from '../components/Auth/LogIn'
const LogInPage = () => {
    return (
        <>
            <WrapperAuth img={loginImage} name={`Login`} >
                <LogIn />
            </WrapperAuth>
        </>
    )
}

export default LogInPage