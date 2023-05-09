import React from 'react'

const bannerApi={
    desktop:[
        {
            imgurl:"./assets/images/Banner/img1.png"
        },
        {
            imgurl:"./assets/images/Banner/img2.png"
        }
    ],
    mobile:[
        {
            imgurl:"./assets/images/Mobile/Banner/img1.png"
        },
        {
            imgurl:"./assets/images/Mobile/Banner/img2.png"
        },
        {
            imgurl:"./assets/images/Mobile/Banner/img3.png"
        },
    ]
}


const navbarApi = [
    {
        id:1,
        name:"Dashboard",
        link:"/studashboard",
        imgurl:"./assets/images/icons/tinysquaresicon.png",
        drpdwn:[]
               
    },
    {
        id:2,
        name:"Document",
        link:"/studashboard/document",
        imgurl:"./assets/images/icons/tinysquaresicon.png", 
        drpdwn:[]
              
    },
    {
        id:3,
        name:"Notice",
        link:"/studashboard/notice",
        imgurl:"./assets/images/icons/tinysquaresicon.png", 
        drpdwn:[]       
    },
    {
        id:4,
        name:"Routine",
        link:"/studashboard/routine",
        imgurl:"./assets/images/icons/tinysquaresicon.png", 
        drpdwn:[
            {
                item:"Class Routine",
                link:"/studashboard/classroutine"
            },
            {
                item:"Exam Routine",
                link:"/studashboard/examroutine"
            }
        ]      
    },
    
    {
        id:5,
        name:"Attendance",
        link:"/studashboard/attendance",
        imgurl:"./assets/images/icons/tinysquaresicon.png", 
        drpdwn:[]       
    },
    {
        id:6,
        name:"Bill Info",
        link:"/studashboard/billinfo",
        imgurl:"./assets/images/icons/tinysquaresicon.png", 
        drpdwn:[]       
    },
    {
        id:7,
        name:"Result",
        link:"/studashboard/result",
        imgurl:"./assets/images/icons/tinysquaresicon.png", 
        drpdwn:[]       
    },
    {
        id:8,
        name:"Leave Form",
        link:"/studashboard/leaveform",
        imgurl:"./assets/images/icons/tinysquaresicon.png", 
        drpdwn:[]       
    },
    {
        id:9,
        name:"Profile",
        link:"/studashboard/profile",
        imgurl:"./assets/images/icons/tinysquaresicon.png", 
        drpdwn:[]       
    },
]

const whyferrytechApi = [
    {
        id:1,
        heading:"Global Brand",
        paragraph:"We offer more then 34 brands across the world.",
        img:"./assets/images/whyferrytech/1a.png"
        
    },
    {
        id:2,
        heading:"Fast Delivery",
        paragraph:"We insure the fastest delivery after the deal.",
        img:"./assets/images/whyferrytech/2.png"
    },
    {
        id:3,
        heading:"One Stop Service",
        paragraph:"You can find all services under an umbrella.",
        img:"./assets/images/whyferrytech/3.png"
    },
    {
        id:4,
        heading:"Flexible Support",
        paragraph:"We offer flexible support from supply, install to after sell service. We also help to claim international warranty to your products.",
        img:"./assets/images/whyferrytech/4.png"
    },
   
]

const indcardApi=[
    {
        id:1,
        heading:"Ports & Terminals",
        imgurl:"./assets/images/Industries/img1.png"
    },
    {
        id:2,
        heading:"Forest Industries",
        imgurl:"./assets/images/Industries/img2.png"
    },
    {
        id:3,
        heading:"Ports & Terminals",
        imgurl:"./assets/images/Industries/img3.png"
    },
    {
        id:4,
        heading:"Ports & Terminals",
        imgurl:"./assets/images/Industries/img4.png"
    },
    {
        id:5,
        heading:"Ports & Terminals",
        imgurl:"./assets/images/Industries/img5.png"
    },
    {
        id:6,
        heading:"Ports & Terminals",
        imgurl:"./assets/images/Industries/img6.png"
    },
    {
        id:7,
        heading:"Ports & Terminals",
        imgurl:"./assets/images/Industries/img7.png"
    },
]

const homepageApi = () => {
  return (
    <>

    </>
  )
}
export {indcardApi,whyferrytechApi,navbarApi,bannerApi}

export default homepageApi