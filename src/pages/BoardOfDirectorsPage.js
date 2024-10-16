import React,{useEffect}  from 'react'
import AOS from 'aos';
import MyNavbarMb from '../Components/Mobile/MyNavbarMb'
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk'
import BoardOfDirectorsComp from '../Components/Desktop/Pages/AboutUs/BoardOfDirectorsComp'
import '../sass/sassFiles/desktop/aboutuspage.scss'
import FooterComp from '../Components/Desktop/FooterComp';
const BoardOfDirectorsPage = () => {
    useEffect(() => {
        AOS.init({});
        
      }, [])
  return (
    <>
    <div className="mobile">
        <MyNavbarMb/>
        <BoardOfDirectorsComp version="mobile"/>
        <FooterComp version="mobile"/>
    </div>
    <div className="desktop">
        <MyNavbarDesk/>
        <BoardOfDirectorsComp/>
        <FooterComp/>
    </div>
    </>
  )
}

export default BoardOfDirectorsPage