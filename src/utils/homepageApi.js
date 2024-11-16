import React from "react";

export const partnerbrandsApi = [
  {
    img: "./assets/images/PartnerBrands/1.png",
  },
  {
    img: "./assets/images/PartnerBrands/2.png",
  },
  {
    img: "./assets/images/PartnerBrands/3.png",
  },
  {
    img: "./assets/images/PartnerBrands/4.png",
  },
  {
    img: "./assets/images/PartnerBrands/5.png",
  },
  {
    img: "./assets/images/PartnerBrands/6.png",
  },
];

const bannerApi = [
  {
    smtext: "Welcome to Ferrytech",
    bigtext: "Heavy Duty. No Compromise.",
    imgurl: "./assets/images/Banner/bannerfloat1.webp",
  },
  {
    smtext: "Your trusted place.",
    bigtext: "Built Tough. No Concessions.",
    imgurl: "./assets/images/Banner/bannerfloat2.png",
  },
];

const navbarApi = [
  {
    id: 1,
    name: "Dashboard",
    link: "/studashboard",
    imgurl: "./assets/images/icons/tinysquaresicon.png",
    drpdwn: [],
  },
  {
    id: 2,
    name: "Document",
    link: "/studashboard/document",
    imgurl: "./assets/images/icons/tinysquaresicon.png",
    drpdwn: [],
  },
  {
    id: 3,
    name: "Notice",
    link: "/studashboard/notice",
    imgurl: "./assets/images/icons/tinysquaresicon.png",
    drpdwn: [],
  },
  {
    id: 4,
    name: "Routine",
    link: "/studashboard/routine",
    imgurl: "./assets/images/icons/tinysquaresicon.png",
    drpdwn: [
      {
        item: "Class Routine",
        link: "/studashboard/classroutine",
      },
      {
        item: "Exam Routine",
        link: "/studashboard/examroutine",
      },
    ],
  },

  {
    id: 5,
    name: "Attendance",
    link: "/studashboard/attendance",
    imgurl: "./assets/images/icons/tinysquaresicon.png",
    drpdwn: [],
  },
  {
    id: 6,
    name: "Bill Info",
    link: "/studashboard/billinfo",
    imgurl: "./assets/images/icons/tinysquaresicon.png",
    drpdwn: [],
  },
  {
    id: 7,
    name: "Result",
    link: "/studashboard/result",
    imgurl: "./assets/images/icons/tinysquaresicon.png",
    drpdwn: [],
  },
  {
    id: 8,
    name: "Leave Form",
    link: "/studashboard/leaveform",
    imgurl: "./assets/images/icons/tinysquaresicon.png",
    drpdwn: [],
  },
  {
    id: 9,
    name: "Profile",
    link: "/studashboard/profile",
    imgurl: "./assets/images/icons/tinysquaresicon.png",
    drpdwn: [],
  },
];

const whyferrytechApi = [
  {
    id: 1,
    heading: "Global Brand",
    paragraph: "We offer more then 34 brands across the world.",
    img: "./assets/images/whyferrytech/1a.png",
  },
  {
    id: 2,
    heading: "Fast Delivery",
    paragraph: "We insure the fastest delivery after the deal.",
    img: "./assets/images/whyferrytech/2.png",
  },
  {
    id: 3,
    heading: "One Stop Service",
    paragraph: "You can find all services under an umbrella.",
    img: "./assets/images/whyferrytech/3.png",
  },
  {
    id: 4,
    heading: "Flexible Support",
    paragraph:
      "We offer flexible support from supply, install to after sell service. We also help to claim international warranty to your products.",
    img: "./assets/images/whyferrytech/4.png",
  },
];

const indcardApifr = [
  {
    id: 1,
    heading: "Ports & Terminals",
    imgurl: "./assets/images/Industries/img1.png",
  },
  {
    id: 2,
    heading: "Forest Industries",
    imgurl: "./assets/images/Industries/img2.png",
  },
  {
    id: 3,
    heading: "Recycling",
    imgurl: "./assets/images/Industries/img3.png",
  },
  {
    id: 4,
    heading: "Steel Industries",
    imgurl: "./assets/images/Industries/img4.png",
  },
  {
    id: 5,
    heading: "Transportation & Shipping",
    imgurl: "./assets/images/Industries/img5.png",
  },
  {
    id: 6,
    heading: "Firefighting & Rescuing",
    imgurl: "./assets/images/Industries/img6.png",
  },
  {
    id: 7,
    heading: "Service and Maintainance",
    imgurl: "./assets/images/Industries/img7.png",
  },
];

const productlineApiFr = [
  {
    "_id": {
      "$oid": "673840edf97cbcbcd55e23a4"
    },
    "isActive": true,
    "productname": "MANTSINEN 140",
    "details": "Mantsinen 140 is characterized by its energy efficiency and agility. With its economical and intelligent features, this machine makes material handling ever more productive.",
    "img": "./assets/images/productLine/img1.png",
    "__v": 0
  },
{
  "_id": {
    "$oid": "67384063f97cbcbcd55e239d"
  },
  "isActive": true,
  "productname": "MANTSINEN 540",
  "details": "Mantsinen 540 is characterized by its energy efficiency and agility. With its economical and intelligent features, this machine makes material handling ever more productive.",
  "img": "./assets/images/productLine/img2.png",
  "__v": 0
},
{
  "_id": {
    "$oid": "673840edf97cbcbcd55e23a4"
  },
  "isActive": true,
  "productname": "MANTSINEN 140",
  "details": "Mantsinen 140 is characterized by its energy efficiency and agility. With its economical and intelligent features, this machine makes material handling ever more productive.",
  "img": "./assets/images/productLine/img1.png",
  "__v": 0
}]

const homepageApi = () => {
  return <></>;
};
export { bannerApi, indcardApifr, navbarApi, whyferrytechApi ,productlineApiFr};

export default homepageApi;
