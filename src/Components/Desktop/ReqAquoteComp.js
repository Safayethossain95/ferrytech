import React,{useState,useEffect,useRef} from 'react'
import SubHeading from './SubComponents/SubHeading'
import {Row,Col,Form} from 'react-bootstrap'
import {BsFacebook,BsTwitter,BsYoutube} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
const ReqAquoteComp = (props) => {
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

      const [formdata,setformdata] = useState({
        name:"",
        email:"",
        phone:"",
        messagesubject:"",
        message:""

      })

      const [namelabel,setnamelabel] = useState("")
      const [emaillabel,setemaillabel] = useState("")
      const [phonelabel,setphonelabel] = useState("")
      const [messagesublabel,setmessagesubjectlabel] = useState("")
      const [messagelabel,setmessagelabel] = useState("")

      const [bordername,setbordername] = useState("")
      const [borderemail,setborderemail] = useState("")
      const [borderphone,setborderphone] = useState("")
      const [bordermesgsub,setbordermsgsub] = useState("")
      const [bordermesg,setbordermsg] = useState("")

      const handleSubmit = (e)=>{
        e.preventDefault()

        if(formdata.name.length > 20){
            setnamelabel("less than 50 characters required")
            setbordername(true)
        }else if(formdata.name.length<3){
            setnamelabel("minimum 3 characters required")
            setbordername(true)
        }
        else if(formdata.name.length==0){
            setnamelabel("First Name Required")
            setbordername(true)
        }
        else{
            setnamelabel("")
            setbordername(false)
        }

        if (formdata.email.length==0){
            setemaillabel("Email is required")
            setborderemail(true)
         }
         else if (formdata.email && !/\S+@\S+\.\S+/.test(formdata.email)) {
            setemaillabel('Email format is incorrect')
            setborderemail(true)
          }
          else{
            setemaillabel('')
            setborderemail(false)
          }

          if(formdata.phone.length==0){
            setphonelabel("Phone is required")
            setborderphone(true)
        }
        else if(formdata.phone.length < 11){
            setphonelabel("Phone should be 11 numbers")
            setborderphone(true)
        }
        else{
            setphonelabel("")
            setborderphone(false)
        }
          if(formdata.messagesubject.length==0){
            setmessagesubjectlabel("subject is required")
            setbordermsgsub(true)
        }
        else if(formdata.messagesubject.length < 20){
            setmessagesubjectlabel("subject shoult be more than 20 characters")
            setbordermsgsub(true)
        }
        else{
            setmessagesubjectlabel("")
            setbordermsgsub(false)
        }
          if(formdata.message.length==0){
            setmessagelabel("message is required")
            setbordermsg(true)
        }
        else if(formdata.message.length < 50){
            setmessagelabel("message shoult be more than 50 characters")
            setbordermsg(true)
        }
        else{
            setmessagelabel("")
            setbordermsg(false)
        }
        

        if(
            namelabel == "" &&
            emaillabel == "" &&
            phonelabel == "" &&
            messagesublabel == "" &&
            messagelabel == ""
        ){
            console.log("Done")
        }


      }

      const handleInput=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
      }
  return (
    <>
        <div className="reqaquote">
            <div className={props.version=="mobile"?"mbContainer" :screenSize.dynamicWidth>=992 && screenSize.dynamicWidth<=1199?"myContainer896": screenSize.dynamicWidth>=1200 &&screenSize.dynamicWidth <=1399?"myContainerMinimini":"myContainerMini"}>

                <SubHeading version={props.version=="mobile"?"mobile":""} subheading="Request a quote"/>

                <Row>
                    <Col lg={8}>
                        <div className="para" data-aos-delay="500" data-aos="fade-in" data-aos-duration="1500">
                            <p>Fill all your information we will reach to you with budget planning and best deal. You can also download our brochures for get budget ideas. 
                                <span>Download Brochures <img src="./assets/images/reqaquote/Arrow.png" alt="  " /></span>
                            </p>
                        </div>
                    
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit}>

                <Row className='Form'>
                    <Col lg={7}>
                        <Row>
                            <Col lg={6}>
                                <div className="basicinput">
                                    <div className="inputgap">
                                    <input style={bordername? {borderColor:"rgb(237, 28, 36)"}:{borderColor:"rgba(0,0,0,1)"}} type="text" placeholder='Name' name="name" value={formdata.name} onChange={handleInput} />
                                    <label>{namelabel}</label>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="basicinput">
                                    <div className="inputgap">
                                    <input style={borderemail? {borderColor:"rgb(237, 28, 36)"}:{borderColor:"rgba(0,0,0,1)"}} type="text" placeholder='Email' name="email" value={formdata.email} onChange={handleInput} />
                                    <label>{emaillabel}</label>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="basicinput">
                                    <div className="inputgap">
                                    <input style={borderphone? {borderColor:"rgb(237, 28, 36)"}:{borderColor:"rgba(0,0,0,1)"}} type="text" placeholder='Phone' name="phone" value={formdata.phone} onChange={handleInput} maxLength={11} />
                                    <label>{phonelabel}</label>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="basicinput">
                                    <div className="inputgap">
                                        <input style={bordermesgsub ? { borderColor: "rgb(237, 28, 36)" } : { borderColor: "rgba(0,0,0,1)" }} type="text" placeholder='Message Subject' name="messagesubject" value={formdata.messagesubject} onChange={handleInput}  />
                                        <label>{messagesublabel}</label>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="basicinput marginremove">
                                <div className="inputgap">
                                        <textarea style={bordermesg ? { borderColor: "rgb(237, 28, 36)" } : { borderColor: "rgba(0,0,0,1)" }} type="text" placeholder='Message Subject' name="message" value={formdata.message} onChange={handleInput} ></textarea>
                                        <label>{messagelabel}</label>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={5} className="desktop">
                        <div className="contactcard">
                            <div className="item" >
                                <h4>Contact Number</h4>
                                <a href="tel:+880 123 456 789">+880 123 456 789</a>
                            </div>
                            <div className="item" >
                                <h4>Email</h4>
                                <a href="mailto:exampleinfo@gmail.com 789">exampleinfo@gmail.com</a>
                            </div>
                            <div className="item" >
                                <h4>Socials</h4>
                                <div className="icons">
                                <a href="#"><BsFacebook/></a>
                                <a href="#"><BsTwitter/></a>
                                <a href="#"><BsYoutube/></a>
                                <a href="#"><HiMail/></a>
                                
                                
                                
                                
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} className="desktop">
                        <div className="submitbutton text-center">
                            <button type="submit">
                                Send Message
                            </button>
                        </div>
                    </Col>
                    <Col lg={12} className="mobile">
                        <div className="submitbutton text-center">
                            <button type="submit">
                                Send Message
                            </button>
                        </div>
                    </Col>
                    <Col lg={5} xs={12} className="mobile">
                        <div className="contactcard" >
                            <div className="item">
                                <h4>Contact Number</h4>
                                <a href="tel:+880 123 456 789">+880 123 456 789</a>
                            </div>
                            <div className="item">
                                <h4>Email</h4>
                                <a href="mailto:exampleinfo@gmail.com 789">exampleinfo@gmail.com</a>
                            </div>
                            <div className="item">
                                <h4>Socials</h4>
                                <div className="icons">
                                <a href="#"><BsFacebook/></a>
                                <a href="#"><BsTwitter/></a>
                                <a href="#"><BsYoutube/></a>
                                <a href="#"><HiMail/></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                   
                </Row>
                </Form>
                
            </div>
        </div>
    </>
  )
}

export default ReqAquoteComp