import React,{useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa'
import {BsChevronUp} from 'react-icons/bs'
const ScrollTop = () => {
  const [visible, setVisible] = useState(false)
   
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        }
        else if (scrolled <= 300){
              setVisible(false)
        }
      };
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
      };
  window.addEventListener('scroll', toggleVisible);
  return (
    <>
    <div className={`scrolltop ${visible==true?"visibleclass":""}`}>
      <BsChevronUp onClick={scrollToTop}
        style={{display: visible ? 'block' : 'none'}} />
     
    </div>
    </>
  )
}

export default ScrollTop