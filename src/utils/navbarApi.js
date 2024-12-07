import React from 'react'
const navbarApidata = [{
  "_id": {
    "$oid": "67286c6d30280dc3b13e2a5e"
  },
  "menuId": 1,
  "menuName": "Home",
  "url": "/",
  "sequence": 1,
  "parentMenuId": "",
  "status": false,
  "isActive": false,
  "childNavbarVm": [],
  "__v": 0
},
{
  "_id": {
    "$oid": "67286caa30280dc3b13e2a60"
  },
  "menuId": 2,
  "menuName": "About",
  "url": "/aboutus",
  "sequence": 2,
  "parentMenuId": "about",
  "status": false,
  "isActive": false,
  "childNavbarVm": [
    {
      "menuId": 13,
      "menuName": "Introduction",
      "url": "/aboutus",
      "sequence": 0,
      "parentMenuId": "about",
      "status": false,
      "isActive": false,
      "childNavbarVm": [],
      "_id": {
        "$oid": "67286caa30280dc3b13e2a61"
      }
    },
    {
      "menuId": 14,
      "menuName": "Board of Directors",
      "url": "/boardofdirectors",
      "sequence": 0,
      "parentMenuId": "about",
      "status": false,
      "isActive": false,
      "childNavbarVm": [],
      "_id": {
        "$oid": "67286caa30280dc3b13e2a62"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "67286d6530280dc3b13e2a64"
  },
  "menuId": 10,
  "menuName": "Product",
  "url": "/truck-crane",
  "sequence": 3,
  "parentMenuId": "product",
  "status": false,
  "isActive": false,
  "childNavbarVm": [
    {
      "menuId": 15,
      "menuName": "Truck Crane",
      "url": "/truck-crane",
      "sequence": 0,
      "parentMenuId": "product",
      "status": false,
      "isActive": false,
      "childNavbarVm": [],
      "_id": {
        "$oid": "67286d6530280dc3b13e2a65"
      }
    },
    {
      "menuId": 16,
      "menuName": "Truck Mounted Crane",
      "url": "/truck-mounted-crane",
      "sequence": 0,
      "parentMenuId": "product",
      "status": false,
      "isActive": false,
      "childNavbarVm": [],
      "_id": {
        "$oid": "67286d6530280dc3b13e2a66"
      }
    },
    {
      "menuId": 17,
      "menuName": "Forklift Mounted Crane",
      "url": "/forklift-mounted-crane",
      "sequence": 0,
      "parentMenuId": "product",
      "status": false,
      "isActive": false,
      "childNavbarVm": [],
      "_id": {
        "$oid": "67286d6530280dc3b13e2a67"
      }
    },
    {
      "menuId": 19,
      "menuName": "Self-Erecting Crane",
      "url": "/self-erecting-crane",
      "sequence": 0,
      "parentMenuId": "product",
      "status": false,
      "isActive": false,
      "childNavbarVm": [],
      "_id": {
        "$oid": "67286d6530280dc3b13e2a68"
      }
    },
    {
      "menuId": 18,
      "menuName": "Spider Crane",
      "url": "/spider-crane",
      "sequence": 0,
      "parentMenuId": "product",
      "status": false,
      "isActive": false,
      "childNavbarVm": [],
      "_id": {
        "$oid": "67286d6530280dc3b13e2a69"
      }
    },
    {
      "menuId": 20,
      "menuName": "Forklift",
      "url": "/fork-lift",
      "sequence": 0,
      "parentMenuId": "product",
      "status": false,
      "isActive": false,
      "childNavbarVm": [],
      "_id": {
        "$oid": "67286d6530280dc3b13e2a6a"
      }
    }
  ],
  "__v": 0
},
{
  "_id": {
    "$oid": "67287e5b30280dc3b13e2a6d"
  },
  "menuId": 11,
  "menuName": "Services",
  "url": "/services",
  "sequence": 4,
  "parentMenuId": "0",
  "status": false,
  "isActive": false,
  "childNavbarVm": [],
  "__v": 0
},
{
  "_id": {
    "$oid": "67287e9830280dc3b13e2a6f"
  },
  "menuId": 12,
  "menuName": "Contact",
  "url": "/contact",
  "sequence": 5,
  "parentMenuId": "0",
  "status": true,
  "isActive": true,
  "childNavbarVm": [],
  "__v": 0
}]
const navbarApi = () => {
  return (
    <>
    </>
  )
}
export {navbarApidata}
export default navbarApi