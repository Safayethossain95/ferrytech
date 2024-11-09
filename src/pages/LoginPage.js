import React from 'react'
import LoginComp from '../Components/Common/LoginComp'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'

const LoginPage = () => {
  return (
    <>
        <div className="mobile">
            <LoginComp/>
        </div>
        <div className="desktop">
            <MyNavbarDesk/>
            <LoginComp/>
        </div>
    </>
  )
}

export default LoginPage