import React from 'react'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import FooterComp from '../Components/Desktop/FooterComp'
import ContactBanner from '../Components/Desktop/Pages/Contact/ContactBanner'

const ContactPage = () => {
  return (
    <>
        <div className="desktop">
            <MyNavbarDesk />
            <ContactBanner/>
            <FooterComp/>
        </div>
    </>
  )
}

export default ContactPage