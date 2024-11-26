import React from 'react'
const navbarApidata = [
    {
      "menuId": 1,
      "menuName": "Home",
      "url": "/",
      "sequence": 1,
      "parentMenuId": 0,
      "status": false,
      "isActive": "",
      "childNavbarVm": []
    },
    {
      "menuId": 2,
      "menuName": "About",
      "url": "/aboutus",
      "sequence": 2,
      "parentMenuId": "about",
      "status": false,
      "isActive": "",
      "childNavbarVm": [
        {
            "menuId": 13,
            "menuName": "Introduction",
            "url": "/aboutus",
            "sequence": 0,
            "parentMenuId": "about",
            "status": false,
            "isActive": "",
            "childNavbarVm": []
          },
          {
            "menuId": 14,
            "menuName": "Board of Directors",
            "url": "/boardofdirectors",
            "sequence": 0,
            "parentMenuId": "about",
            "status": false,
            "isActive": "",
            "childNavbarVm": []
          }
      ]
    },
    {
      "menuId": 10,
      "menuName": "Product",
      "url": "/truck-crane",
      "sequence": 3,
      "parentMenuId":"product",
      "status": false,
      "isActive": "",
      "childNavbarVm": [
        {
            "menuId":15,
            "menuName": "Truck Crane",
            "url": "/product-single/truckCrane",
            "sequence": 0,
            "parentMenuId": "product",
            "status": false,
            "isActive": "",
            "childNavbarVm": []
          },
          {
            "menuId": 16,
            "menuName": "Truck Mounted Crane",
            "url": "/product-single/truckMountedCrane",
            "sequence": 0,
            "parentMenuId": "product",
            "status": false,
            "isActive": "",
            "childNavbarVm": []
          },
          {
            "menuId": 17,
            "menuName": "Forklift Mounted Crane",
            "url": "/product-single/forkliftMountedCrane",
            "sequence": 0,
            "parentMenuId": "product",
            "status": false,
            "isActive": "",
            "childNavbarVm": []
          },
          {
            "menuId": 19,
            "menuName": "Self-Erecting Crane",
            "url": "/product-single/selfErectingCrane",
            "sequence": 0,
            "parentMenuId": "product",
            "status": false,
            "isActive": "",
            "childNavbarVm": []
          },
          {
            "menuId": 18,
            "menuName": "Spider Crane",
            "url": "/product-single/spiderCrane",
            "sequence": 0,
            "parentMenuId": "product",
            "status": false,
            "isActive": "",
            "childNavbarVm": []
          },
          {
            "menuId": 20,
            "menuName": "Forklift",
            "url": "/product-single/forklift",
            "sequence": 0,
            "parentMenuId": "product",
            "status": false,
            "isActive": "",
            "childNavbarVm": []
          },
      ]
    },
    {
      "menuId": 11,
      "menuName": "Services",
      "url": "/services",
      "sequence": 4,
      "parentMenuId": 0,
      "status": false,
      "isActive": "",
      "childNavbarVm": [
        // {
        //     "menuId": 13,
        //     "menuName": "Sub Section",
        //     "url": "/services",
        //     "sequence": 0,
        //     "parentMenuId": 2,
        //     "status": false,
        //     "isActive": "",
        //     "effectiveFrom": null,
        //     "effectiveTo": null,
        //     "childNavbarVm": []
        //   },
        //   {
        //     "menuId": 14,
        //     "menuName": "Sub Section",
        //     "url": "/karatecourse",
        //     "sequence": 0,
        //     "parentMenuId": 2,
        //     "status": false,
        //     "isActive": "",
        //     "effectiveFrom": null,
        //     "effectiveTo": null,
        //     "childNavbarVm": []
        //   }
      ]
    },
    {
      "menuId": 12,
      "menuName": "Contact",
      "url": "/contact",
      "sequence": 5,
      "parentMenuId": 0,
      "status": false,
      "isActive": "",
      "childNavbarVm": []
    },
  ]
const navbarApi = () => {
  return (
    <>
    </>
  )
}
export {navbarApidata}
export default navbarApi