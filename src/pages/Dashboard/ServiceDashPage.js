/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/Desktop/Admin/AdminSidebar";
import MyNavbarDesk from "../../Components/Desktop/MyNavbarDesk";
import { API_URL } from "../../config";

const ServiceDashPage = () => {
  const [changeCount, setchangeCount] = useState(0);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    "img":"",
    "subheading":"",
    "heading":"",
    "mylist":[],
    "flip":"",
    "list":"",
    "isActive":"",
  });
  useEffect(()=>{
    console.log(formData)
  })
//   const [dataAboutUsDetails, setdataAboutUsDetails] = useState([]);
  const [bnid, setbnid] = useState("");
  const industryedittoggle = async (item) => {
    try {
      setFormData(item);
      seteditmode(true);
      setbnid(item._id);
      //   setData(response.data);
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
    document.getElementById('editform').scrollIntoView({ behavior: 'smooth' });
  };
  const industryeditsubmit = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/producteditById/${bnid}`,
        formData
      );
      console.log("Responsedat:", response.data.data);
      setchangeCount((p) => p + 1);
      setFormData({
        "img":"",
        "subheading":"",
        "heading":"",
        "mylist":[],
        "flip":"",
        "list":"",
        "isActive":"",
      });
      seteditmode(false);
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function callapi() {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/serviceitemsget`);
        console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoading(false); // Set loading to false after data fetch
        }, 1000); // Delay the loading message for 1 second
        // Set loading to false after data fetch
      }
    }
    callapi();
  }, [changeCount]);

  const industrydelete = async (myid) => {
    try {
      const response = await axios.delete(`${API_URL}/productdelete/${myid}`);
      console.log("Response:", response.data.data);
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };

 

  // Handle change for general fields
  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle change for new card input

  // Add new card to the form data
  const addCard = () => {
    setFormData({
      ...formData,
      card: [
        ...formData.card,
        { imgurl: "", name: "", detail: "", isActive: true },
      ],
    });
  };
  const handleCardChange = (index, field, value) => {
    const updatedCards = formData.card.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setFormData({ ...formData, card: updatedCards });
  };
  const [editmode, seteditmode] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(`${API_URL}/productpost`, formData);
      console.log("Response:", response.data.data);
      setFormData({
        "img":"",
        "subheading":"",
        "heading":"",
        "mylist":[],
        "flip":"",
        "list":"",
        "isActive":"",
      });
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error posting data:", error); // Handle any errors
    }
  };
  const handlenewproductinsert=()=>{
    document.getElementById('editform').scrollIntoView({ behavior: 'smooth' });
  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleListChange = (index, value) => {
    const newList = [...formData.mylist];
    newList[index] = value;
    setFormData({ ...formData, mylist: newList });
  };

  const addListItem = () => {
    setFormData({ ...formData, mylist: [...formData.mylist, ''] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <div className="desktop">
        <div className="leftsidebardash">
          <MyNavbarDesk />
          <AdminSidebar />
        </div>
        <div className="content_ad">
          <div className="m-auto" style={{width:"100%"}}>
            <div className="text-end">
              <div className="downloadbutton">
                <button className="ms-auto my-4" style={{width:"220px"}} onClick={handlenewproductinsert}>
                  <a>Insert New Product Line</a>
                </button>
              </div>
            </div>
          </div>
          <h4 className="text-center mb-4">Service Page Edit</h4>
          <table className="table-auto border-collapse border border-gray-400 w-full m-auto">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 px-4 py-2">subheading</th>
          <th className="border border-gray-400 px-4 py-2">img</th>
          <th className="border border-gray-400 px-4 py-2">mylist</th>
          <th className="border border-gray-400 px-4 py-2">flip</th>
          <th className="border border-gray-400 px-4 py-2">list</th>
          <th className="border border-gray-400 px-4 py-2">isActive</th>
          <th className="border border-gray-400 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item, index) => (
    <tr key={index}>
      <td className="border border-gray-400 px-4 py-2">{item.subheading || 'N/A'}</td>
      <td className="border border-gray-400 px-4 py-2">{item.img || 'N/A'}</td>
      <td className="border border-gray-400 px-4 py-2">
        {Array.isArray(item.mylist) && item.mylist.length > 0
          ? item.mylist.join(', ')
          : 'N/A'}
      </td>
      <td className="border border-gray-400 px-4 py-2">{item.flip.toString()}</td>
      <td className="border border-gray-400 px-4 py-2">{item.list.toString()}</td>
      <td className="border border-gray-400 px-4 py-2">
        {item.isActive ? 'Active' : 'Inactive'}
      </td>
      <td className="border border-gray-400 px-4 py-2">
              {/* Example Actions */}
              <button className="btn btn-primary mr-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
    </tr>
  ))}
           
      
   

        {/* Conditional Rendering for List or mylist */}
        {formData.mylist.length > 0 && (
          <>
            <tr>
              <td colSpan="3" className="border border-gray-400 px-4 py-2 bg-gray-100">
                <h5 className="font-semibold">My List Items</h5>
              </td>
            </tr>
            {formData.mylist.map((item, idx) => (
              <tr key={idx}>
                <td className="border border-gray-400 px-4 py-2">Item {idx + 1}</td>
                <td className="border border-gray-400 px-4 py-2">{item}</td>
                <td className="border border-gray-400 px-4 py-2">
                  {/* Add more actions if needed */}
                  <button className="btn btn-primary mr-2">Edit</button>
                  <button className="btn btn-danger">Remove</button>
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>

          <div>
          <form onSubmit={handleSubmit} className="p-6 max-w-4xl m-auto">
      <h2 className="text-2xl font-bold mb-4">Custom Form</h2>

      <label>Image</label>
      <input
        type="text"
        name="img"
        value={formData.img}
        onChange={handleInput}
        className="border p-2 w-full mb-4"
        placeholder="Image URL"
      />

      <label>Subheading</label>
      <input
        type="text"
        name="subheading"
        value={formData.subheading}
        onChange={handleInput}
        className="border p-2 w-full mb-4"
        placeholder="Subheading"
      />

      <label>Heading</label>
      <input
        type="text"
        name="heading"
        value={formData.heading}
        onChange={handleInput}
        className="border p-2 w-full mb-4"
        placeholder="Heading"
      />

      <label>Flip</label>
      <input
        type="text"
        name="flip"
        value={formData.flip}
        onChange={handleInput}
        className="border p-2 w-full mb-4"
        placeholder="Flip"
      />

      <label>List</label>
      <input
        type="text"
        name="list"
        value={formData.list}
        onChange={handleInput}
        className="border p-2 w-full mb-4"
        placeholder="List"
      />

      <label className="block mb-2">My List:</label>
      {formData.mylist.map((item, index) => (
        <input
          key={index}
          type="text"
          value={item}
          onChange={(e) => handleListChange(index, e.target.value)}
          className="border p-2 w-full mb-2"
          placeholder={`List Item ${index + 1}`}
        />
      ))}
      <button type="button" onClick={addListItem} className="btn btn-secondary mb-4">
        Add List Item
      </button>

      <label className="block mb-2">
        Is Active:
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={handleCheckboxChange}
          className="ml-2"
        />
      </label>

      <div className="downloadbutton mt-3">
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </div>
    </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDashPage;
