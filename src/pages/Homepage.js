import React,{useEffect, useState} from 'react'
import Banner from '../Components/Desktop/Banner'
import '../sass/sassFiles/desktop/homepage.scss'
import '../sass/sassFiles/mobile/homepagemb.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyNavbarDesk from '../Components/Desktop/MyNavbarDesk';
import IntroComp from '../Components/Desktop/IntroComp';
import IndustriesComp from '../Components/Desktop/IndustriesComp';
import ProductLineComp from '../Components/Desktop/ProductLineComp';

import WhyFerrytechComp from '../Components/Desktop/WhyFerrytechComp';
import Testimonial from '../Components/Desktop/Testimonial';
import ReqAquoteComp from '../Components/Desktop/ReqAquoteComp';
import FooterComp from '../Components/Desktop/FooterComp';
import MyNavbarMb from '../Components/Mobile/MyNavbarMb';
import ProdLineMbComMp from '../Components/Mobile/ProdLineMbComMp';
import { bannerApi, indcardApifr, partnerbrandsApi, productlineApiFr, whyferrytechApi } from '../utils/homepageApi';
import ConstructionQuote from '../Components/Desktop/Pages/AboutUs/ConstructionQuote';
import SubHeading from '../Components/Desktop/SubComponents/SubHeading';
import { API_URL, Only_Frontend } from '../config';
import axios from 'axios';

const Homepage = () => {
  useEffect(() => {
    AOS.init({});
    
  }, [])
  const [bannerApidata,setBannerApi] = useState([])
  const [indcardApi,setindcardApi] = useState([])
  const [partnerbrandsApifinal,setpartnerbrandsApi] = useState([])
  const [whyferrytechApifinal,setwhyferrytechApi] = useState([])
  const [introCompApifinal,introCompApiFinal] = useState([])
  const [productlineApifinal,setproductlineApiFinal] = useState(productlineApiFr)
 useEffect(()=>{
  const fetchProducts = async () => {
      
    try {
      if(Only_Frontend){

        setBannerApi(bannerApi)
        setindcardApi(indcardApifr)
        setpartnerbrandsApi(partnerbrandsApi)
        setwhyferrytechApi(whyferrytechApi)
        setproductlineApiFinal(productlineApiFr)
        console.log("frontend")
      }else{
        const response = await axios.get(`${API_URL}/bannerget`);
        const insudtrycarddata = await axios.get(`${API_URL}/industryget`);
        const partnerbrandsdata = await axios.get(`${API_URL}/partnerbrandsget`);
        const whyferrytechdata = await axios.get(`${API_URL}/whyferrytechget`);
        const introcompdata = await axios.get(`${API_URL}/introgetall`);
        const productlinedata = await axios.get(`${API_URL}/productlinegetall`)
        setproductlineApiFinal(productlinedata.data.data)
        introCompApiFinal(introcompdata.data.data)
        console.log("productline bk",productlinedata.data.data)
        setwhyferrytechApi(whyferrytechdata.data)
        console.log("bk why",whyferrytechdata.data)
        setpartnerbrandsApi(partnerbrandsdata.data)
        console.log("bk",partnerbrandsdata.data)
        setBannerApi(response.data.data);
        setindcardApi(insudtrycarddata.data.data)
        console.log("backend")
      }
    } catch (error) {
      console.log(error.message || 'Something went wrong');
    } 
  };
 
  fetchProducts();
 },[])

 
 
  const imgurldesk = "./assets/images/Intro/vector.png"
  const imgurlmb = "./assets/images/Mobile/homepage/info/arrodown.png"
  return (
    <>
   

    <div className="mobile">

        <MyNavbarMb/>
        <Banner version="mobile" bannerapi={bannerApidata} />
        <IntroComp imgurl={imgurlmb} version="mobile"/>
        <IndustriesComp version="mobile" data={indcardApi}/>
        <ProdLineMbComMp/>
        <SubHeading
            version="mobile"
            subheading="Partner Brands"
            mb="120px"
          />
        <ConstructionQuote version="mobile" partnerbrandsdata={partnerbrandsApifinal}/>
        <WhyFerrytechComp version="mobile" data={whyferrytechApifinal}/>
        <Testimonial version="mobile"/>
        <ReqAquoteComp version="mobile"/>        
        <FooterComp version="mobile"/>
        
    </div>
    
    <div className="desktop">
        <MyNavbarDesk/>
        <Banner version="desktop" bannerapi={bannerApidata}/>
        <IntroComp data={introCompApifinal} imgurl={imgurldesk}/>
        <IndustriesComp data={indcardApi}/>
        <ProductLineComp data={productlineApifinal}/>
        <SubHeading
            version="desktop"
            subheading="Partner Brands"
            mb="140px"
          />
        <ConstructionQuote partnerbrandsdata={partnerbrandsApifinal}/>
        <WhyFerrytechComp data={whyferrytechApifinal}/>
        <Testimonial/>
        <ReqAquoteComp/>  
        <FooterComp/>
    </div>

    </>
  )
}

export default Homepage