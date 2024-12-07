/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/Desktop/Admin/AdminSidebar";
import MyNavbarDesk from "../../Components/Desktop/MyNavbarDesk";
import { API_URL } from "../../config";

const ServiceMainTextDash = () => {
  const [changeCount, setchangeCount] = useState(0);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    mainText:"",
    isActive: false,
  });
  useEffect(() => {
    console.log(formData);
  });
  //   const [dataAboutUsDetails, setdataAboutUsDetails] = useState([]);
  const [bnid, setbnid] = useState("");
  const edittoggle = async (item) => {
    try {
      setFormData(item);
      seteditmode(true);
      setbnid(item?._id);
      //   setData(response.data);
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
    document.getElementById("editform").scrollIntoView({ behavior: "smooth" });
  };
  const editsubmit = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/serviceMaintextedit/${bnid}`,
        formData
      );
      console.log("Responsedat:", response.data.data);
      setchangeCount((p) => p + 1);
      setFormData({
        mainText:"",
        isActive: false,
      }
    );
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
        const response = await axios.get(`${API_URL}/serviceMaintextget`);
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

  const itemdelete = async (myid) => {
    try {
      const response = await axios.delete(
        `${API_URL}/serviceMaintextdelete/${myid}`
      );
      console.log("Response:", response.data.data);
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };


  // Handle change for new card input

 
  const [editmode, seteditmode] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        `${API_URL}/serviceMaintextpost`,
        formData
      );
      console.log("Response:", response.data.data);
      setFormData({
        mainText:"",
        isActive: false,
      });
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error posting data:", error); // Handle any errors
    }
  };
  const handlenewproductinsert = () => {
    document.getElementById("editform").scrollIntoView({ behavior: "smooth" });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
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
          <div className="m-auto" style={{ width: "100%" }}>
            <div className="text-end">
              <div className="downloadbutton">
                <button
                  className="ms-auto my-4"
                  style={{ width: "220px" }}
                  onClick={handlenewproductinsert}
                >
                  <a>Insert New Service Detail</a>
                </button>
              </div>
            </div>
          </div>
          <h4 className="text-center mb-4">Service Main Text Edit</h4>
          <table className="table-auto border-collapse border border-gray-400 w-full m-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">Main Text</th>
                <th className="border border-gray-400 px-4 py-2">isActive</th>
                <th className="border border-gray-400 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7">
                    <div
                      style={{
                        height: "400px",
                        width: "600px",
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
                    <td className="border border-gray-400 px-4 py-2">
                      {item.mainText || "N/A"}
                    </td>
                    
                    <td className="border border-gray-400 px-4 py-2">
                      {item.isActive ? "Active" : "Inactive"}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {/* Example Actions */}
                      <button
                        onClick={() => edittoggle(item)}
                        className="btn btn-primary mr-2 mb-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => itemdelete(item._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}

              {/* Conditional Rendering for List or mylist */}
            </tbody>
          </table>

          <div  style={{marginTop:"70px"}}>
            <form
              id="editform"
              onSubmit={handleSubmit}
              className="p-6 max-w-4xl m-auto"
             
            >
              <h2 className="text-2xl font-bold mb-4">Custom Form</h2>

              <label>Main Text</label>
              <input
                type="text"
                name="mainText"
                value={formData?.mainText}
                onChange={handleInput}
                className="border p-2 w-full mb-4"
                placeholder="Image URL"
              />

             

              <label className="block mb-2">
                Is Active:
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData?.isActive}
                  onChange={handleCheckboxChange}
                  className="ml-2"
                />
              </label>

              <div className="downloadbutton mt-3">
                {editmode ? (
                  <button type="button" onClick={editsubmit}>
                    <a>Edit</a>
                  </button>
                ) : (
                  <button onClick={handlesubmit} className="w-100">
                    <a href="">Submit</a>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMainTextDash;
