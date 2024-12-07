import React from 'react'
import LoginComp from '../Components/Common/LoginComp'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import FooterComp from '../Components/Desktop/FooterComp'

const LoginPage = () => {
  return (
    <>
        <div className="mobile">
          <MyNavbarMb/>
            <LoginComp/>
            <FooterComp version="mobile"/>
        </div>
        <div className="desktop">
            <MyNavbarDesk/>
            <LoginComp/>
            <FooterComp/>
        </div>
    </>
  )
}

export default LoginPage