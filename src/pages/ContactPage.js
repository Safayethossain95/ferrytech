import React from 'react'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'
import ContactBanner from '../Components/Desktop/Pages/Contact/ContactBanner'
import '../sass/sassFiles/desktop/contactpage.scss'
import ReqAquoteComp from '../Components/Desktop/ReqAquoteComp'
import ContactMap from '../Components/Desktop/Pages/Contact/ContactMap'
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import ContactBannerMb from '../Components/Mobile/ContactPage/ContactBannerMb'
const ContactPage = () => {
  return (
    <>
        <div className="desktop">
            <MyNavbarDesk />
            <ContactBanner/>
            <ReqAquoteComp/>
            <ContactMap/>
            <FooterComp/>
        </div>

        <div className="mobile">
            <MyNavbarMb/>
            <ContactBannerMb/>
            <ReqAquoteComp version="mobile"/>
            <ContactMap/>
            <FooterComp version="mobile"/>
        </div>
    </>
  )
}

export default ContactPage