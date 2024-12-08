/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/Desktop/Admin/AdminSidebar";
import MyNavbarDesk from "../../Components/Desktop/MyNavbarDesk";
import { API_URL } from "../../config";

const SignUpDashPage = () => {
  const [changeCount, setchangeCount] = useState(0);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    "email":"",
    "password":"",
    "firstname":"",
    "lastname":"",
    "phonenumber":"",
    "branch":""
  });
 
 
  const [usid,setusid] = useState("")

  const industryedittoggle = async (item) => {
    try {
      setEditMode(true)
      setFormData(item);
      setusid(item._id)
      //   setData(response.data);
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };
  const [loading, setLoading] = useState(true);
const [editmode, setEditMode] = useState(false)
const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const industryeditsubmit = async() => {
    setEditMode(true)
    try {
      // Send PUT request to the backend
      const response = await axios.post(`${API_URL}/edituser/${usid}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Handle success response
      console.log('User updated successfully:', response.data);
      setFormData({
        "email":"",
        "password":"",
        "firstname":"",
        "lastname":"",
        "phonenumber":"",
        "branch":""
      })
      setEditMode(false)
      setchangeCount(p=>p+1)
      return response.data;  // Return data for further handling (e.g., updating UI)
    } catch (error) {
      // Handle errors
      console.error('Error updating user:', error.response?.data?.message || error.message);
      throw error;  // Re-throw the error for handling in the calling function
    }
    // Add logic for editing existing data
  };
  useEffect(() => {
    async function callapi() {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/getUsers`);
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
      const response = await axios.delete(`${API_URL}/contactdelete/${myid}`);
      console.log("Response:", response.data.data);
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    async function signuppost() {
      try {
        const response = await axios.post(`${API_URL}/signup`, formData);
        setFormData({
          "email":"",
          "password":"",
          "firstname":"",
          "lastname":"",
          "phonenumber":"",
          "branch":""
        });
        setchangeCount((p) => p + 1);
        // Handle the response if needed
        console.log(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error submitting form:", error);
      }
    }
    signuppost();
  };
 

  return (
    <div>
      <div className="desktop">
        <div className="leftsidebardash">
          <MyNavbarDesk />
          <AdminSidebar />
        </div>
        <div className="content_add">
          <h4 className="text-center mb-4">Users Edit</h4>
          <table className="table-auto border-collapse border border-gray-400 w-full m-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Password</th>
                <th className="border px-4 py-2">First Name</th>
                <th className="border px-4 py-2">Last Name</th>
                <th className="border px-4 py-2">Phone Number</th>
                <th className="border px-4 py-2">Branch</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7">
                    <div
                      style={{
                        height: "400px",
                        width: "800px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src="/assets/loading/loading.svg" alt="Loading..." />
                    </div>
                  </td>
                </tr>
              ) : (
                data?.map((item, index) => (
                  <tr key={index}>
                    
                    <td className="border px-4 py-2">{item?.email}</td>
                    <td className="border px-4 py-2">{item?.password}</td>
                    <td className="border px-4 py-2">{item?.firstname}</td>
                    <td className="border px-4 py-2">{item?.lastname}</td>
                    <td className="border px-4 py-2">{item?.phonenumber}</td>
                    <td className="border px-4 py-2">{item?.branch}</td>
                    <td className="border px-4 py-2">
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-primary"
                          onClick={() => industryedittoggle(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => industrydelete(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
         
          <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInput}
      />

      <label>Password:</label>
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleInput}
      />

      <label>First Name:</label>
      <input
        type="text"
        name="firstname"
        value={formData.firstname}
        onChange={handleInput}
      />

      <label>Last Name:</label>
      <input
        type="text"
        name="lastname"
        value={formData.lastname}
        onChange={handleInput}
      />

      <label>Phone Number:</label>
      <input
        type="text"
        name="phonenumber"
        value={formData.phonenumber}
        onChange={handleInput}
      />

      <label>Branch:</label>
      <input
        type="text"
        name="branch"
        value={formData.branch}
        onChange={handleInput}
      />


      <div className="downloadbutton mt-3">
        {editmode ? (
          <button type="button" onClick={industryeditsubmit}>
            <a>Edit</a>
          </button>
        ) : (
          <button type="submit" className="w-100">
            <a >Submit</a>
          </button>
        )}
      </div>
    </form>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpDashPage;
