import React,{useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'

const ProductCardsComp = (props) => {
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
            
        })
      }, [screenSize])
  return (
    <>
        <div className="productcardscomp">
        <div className={props.version=="mobile"?"mbContainer":screenSize.dynamicWidth>=992 && screenSize.dynamicWidth<=1199?"myContainer896": screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":"myContainerMini"}>
            <div className="heading">
                <h5>{props.data.heading}</h5>
                <p>{props.data.para}</p>
            </div>
            <div className="cardsloop">
                <Row>
                    {
                        props.data.card.map((item,key)=>{

                            return(
                                <Col lg={4} key={key}>
                                <div className="pcard">
                                    <img src={item.imgurl} alt="" />
                                    
                                <div className="pcarddetails">
                                <h5>{item.name}</h5>
                                <p>{item.detail}</p>
                                </div>
        
                                <div className="pcardbutton">
                                    <button>view details <span><img src="./assets/images/ProductPage/cards/arr.png" alt="" /></span></button>
                                </div>
                                </div>
                            </Col>
                            )
                        })
                    }
                   
                </Row>
            </div>

        </div>
        </div>
    </>
  )
}

export default ProductCardsComp