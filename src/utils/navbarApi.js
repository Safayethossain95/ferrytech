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
      "childNavbarVm": [
        {
            "menuId": 13,
            "menuName": "Introduction",
            "url": "/aboutus",
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
            "menuName": "Board of Directors",
            "url": "/boardofdirectors",
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
      "menuId": 10,
      "menuName": "Product",
      "url": "/truck-crane",
      "sequence": 3,
      "parentMenuId": 0,
      "status": false,
      "isActive": "",
      "effectiveFrom": null,
      "effectiveTo": null,
      "childNavbarVm": [
        {
            "menuId":15,
            "menuName": "Truck Crane",
            "url": "/truck-crane",
            "sequence": 0,
            "parentMenuId": 2,
            "status": false,
            "isActive": "",
            "effectiveFrom": null,
            "effectiveTo": null,
            "childNavbarVm": []
          },
          {
            "menuId": 16,
            "menuName": "Truck Mounted Crane",
            "url": "/truck-mounted-crane",
            "sequence": 0,
            "parentMenuId": 2,
            "status": false,
            "isActive": "",
            "effectiveFrom": null,
            "effectiveTo": null,
            "childNavbarVm": []
          },
          {
            "menuId": 17,
            "menuName": "Forklift Mounted Crane",
            "url": "/forklift-mounted-crane",
            "sequence": 0,
            "parentMenuId": 2,
            "status": false,
            "isActive": "",
            "effectiveFrom": null,
            "effectiveTo": null,
            "childNavbarVm": []
          },
          {
            "menuId": 19,
            "menuName": "Self-Erecting Crane",
            "url": "/self-erecting-crane",
            "sequence": 0,
            "parentMenuId": 2,
            "status": false,
            "isActive": "",
            "effectiveFrom": null,
            "effectiveTo": null,
            "childNavbarVm": []
          },
          {
            "menuId": 18,
            "menuName": "Spider Crane",
            "url": "/spider-crane",
            "sequence": 0,
            "parentMenuId": 2,
            "status": false,
            "isActive": "",
            "effectiveFrom": null,
            "effectiveTo": null,
            "childNavbarVm": []
          },
         
          {
            "menuId": 20,
            "menuName": "Forklift",
            "url": "/fork-lift",
            "sequence": 0,
            "parentMenuId": 2,
            "status": false,
            "isActive": "",
            "effectiveFrom": null,
            "effectiveTo": null,
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
      "effectiveFrom": null,
      "effectiveTo": null,
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