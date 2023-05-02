import React,{useState,useEffect} from 'react'




    


const Helpers = () => {
  
  const [screenSize, getDimension] = useState({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });
    const setDimension = () => {
      getDimension({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      })
    }
    
    useEffect(() => {
      window.addEventListener('resize', setDimension);
      
      return(() => {
          window.removeEventListener('resize', setDimension);
          console.log(screenSize.dynamicWidth)
      })
    }, [screenSize])

  return (
    
    <>
    
    </>
  )
}


export default Helpers