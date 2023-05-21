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
      "effectiveFrom": null,
      "effectiveTo": null,
      "childNavbarVm": []
    },
    {
      "menuId": 2,
      "menuName": "About",
      "url": "/aboutus",
      "sequence": 2,
      "parentMenuId": 0,
      "status": false,
      "isActive": "",
      "effectiveFrom": null,
      "effectiveTo": null,
      "childNavbarVm": []
    },
    {
      "menuId": 10,
      "menuName": "Product",
      "url": "/product",
      "sequence": 3,
      "parentMenuId": 0,
      "status": false,
      "isActive": "",
      "effectiveFrom": null,
      "effectiveTo": null,
      "childNavbarVm": [
        {
          "menuId": 3,
          "menuName": "Sub Section",
          "url": "/product",
          "sequence": 0,
          "parentMenuId": 2,
          "status": false,
          "isActive": "",
          "effectiveFrom": null,
          "effectiveTo": null,
          "childNavbarVm": []
        },
        {
          "menuId": 4,
          "menuName": "Sub Section",
          "url": "/product",
          "sequence": 0,
          "parentMenuId": 2,
          "status": false,
          "isActive": "",
          "effectiveFrom": null,
          "effectiveTo": null,
          "childNavbarVm": []
        },
        {
          "menuId": 6,
          "menuName": "Sub Section",
          "url": "/product",
          "sequence": 0,
          "parentMenuId": 2,
          "status": false,
          "isActive": "",
          "effectiveFrom": null,
          "effectiveTo": null,
          "childNavbarVm": []
        },
        {
          "menuId": 7,
          "menuName": "Sub Section",
          "url": "/product",
          "sequence": 0,
          "parentMenuId": 2,
          "status": false,
          "isActive": "",
          "effectiveFrom": null,
          "effectiveTo": null,
          "childNavbarVm": []
        },
        {
          "menuId": 8,
          "menuName": "Sub Section",
          "url": "/product",
          "sequence": 0,
          "parentMenuId": 2,
          "status": false,
          "isActive": "",
          "effectiveFrom": null,
          "effectiveTo": null,
          "childNavbarVm": []
        }
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
      "effectiveFrom": null,
      "effectiveTo": null,
      "childNavbarVm": [
        {
            "menuId": 13,
            "menuName": "Sub Section",
            "url": "/services",
            "sequence": 0,
            "parentMenuId": 2,
            "status": false,
            "isActive": "",
            "effectiveFrom": null,
            "effectiveTo": null,
            "childNavbarVm": []
          },
          {
            "menuId": 14,
            "menuName": "Sub Section",
            "url": "/karatecourse",
            "sequence": 0,
            "parentMenuId": 2,
            "status": false,
            "isActive": "",
            "effectiveFrom": null,
            "effectiveTo": null,
            "childNavbarVm": []
          }
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
      "effectiveFrom": null,
      "effectiveTo": null,
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