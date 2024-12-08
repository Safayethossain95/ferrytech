/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../Components/Desktop/Admin/AdminSidebar";
import MyNavbarDesk from "../Components/Desktop/MyNavbarDesk";
import { API_URL } from "../config";
import "../sass/sassFiles/desktop/dashboardpage.scss";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const [changeCount, setchangeCount] = useState(0);
  const [formData, setFormData] = useState({
    isActive: false,
    smtext: "",
    bigtext: "",
    imgurl: "",
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handlechkbx = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      isActive: !prevFormData.isActive,
    }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(`${API_URL}/bannerpost`, formData);
      console.log("Response:", response.data.data);
      setFormData({ isActive: false, smtext: "", bigtext: "", imgurl: "" });
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error posting data:", error); // Handle any errors
    }
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    async function callapi() {
      try {
        const response = await axios.get(`${API_URL}/bannerget`);
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    callapi();
  }, [changeCount]);

  const bannerdelete = async (myid) => {
    try {
      const response = await axios.delete(`${API_URL}/bannerdelete/${myid}`);
      console.log("Response:", response.data.data);
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };
  const [editmode,seteditmode] = useState(false)
  const [bnid,setbnid] = useState("")
  const banneredittoggle = async (myid) => {
    try {
      const response = await axios.get(`${API_URL}/bannerget/${myid}`);
      console.log("Responsedat:", response.data.data);
      setbnid(response.data.data._id)
      setFormData(response.data.data)
      seteditmode(true)
    //   setData(response.data);
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };
  const editsubmit =async()=>{
    try {
        const response = await axios.post(`${API_URL}/banneredit/${bnid}`,formData);
        console.log("Responsedat:", response.data.data);
        setchangeCount(p=>p+1)
        setFormData({ isActive: false, smtext: "", bigtext: "", imgurl: "" })
        seteditmode(false)
      //   setData(response.data);
      } catch (error) {
        console.error("Error deleting data:", error); // Handle any errors
      }
  } 
  
    return (
      <div>
        <div className="desktop">
          <div className="leftsidebardash">
            <MyNavbarDesk />
            <AdminSidebar />
          </div>
          <div className="content_add">
            <div>
              <table className="table-auto m-auto w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Is Active</th>
                    <th className="border px-4 py-2">Small Text</th>
                    <th className="border px-4 py-2">Big Text</th>
                    <th className="border px-4 py-2">Image URL</th>
                    <th className="border px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">
                        {item.isActive ? "Yes" : "No"}
                      </td>
                      <td className="border px-4 py-2">{item.smtext}</td>
                      <td className="border px-4 py-2">{item.bigtext}</td>
                      <td className="border px-4 py-2">{item.imgurl}</td>
  
                      <td className="border px-4 py-2 d-flex gap-2">
                        <button
                          className="btn btn-primary"
                          onClick={() => banneredittoggle(item._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => bannerdelete(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <form>
                <label>Small Text</label>
                <input
                  type="text"
                  name="smtext"
                  value={formData.smtext}
                  onChange={handleInput}
                />
                <label>Big Text</label>
                <input
                  type="text"
                  name="bigtext"
                  value={formData.bigtext}
                  onChange={handleInput}
                />
                <label>Image URL</label>
                <input
                  type="text"
                  name="imgurl"
                  value={formData.imgurl}
                  onChange={handleInput}
                />
  
                <label>
                  Is Active:
                  <input
                    type="checkbox"
                    onChange={handlechkbx}
                    name="isActive"
                    checked={formData.isActive}
                    readOnly
                  />
                </label>
                <div className="downloadbutton mt-3">
                  {
                      editmode ?
                      <button type="button" onClick={editsubmit}><a >Edit</a></button>
                      :
  
                  <button onClick={handlesubmit} className="w-100">
                    <a href="">Submit</a>
                  </button>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

  }


export default DashboardPage;
