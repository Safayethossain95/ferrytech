/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/Desktop/Admin/AdminSidebar";
import MyNavbarDesk from "../../Components/Desktop/MyNavbarDesk";
import { API_URL } from "../../config";

const WhyFerrytechCompDashPage = () => {
  const [changeCount, setchangeCount] = useState(0);
  const [editmode, seteditmode] = useState(false);
  const [bnid, setbnid] = useState("");
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
     heading:"", paragraph:"", img:"", isActive:false
  });

  const industryedittoggle = async (myid) => {
    try {
      const response = await axios.get(
        `${API_URL}/whyferrytechgetbyid/${myid}`
      );
      console.log("Responsewhyferrytech edit:", response.data);
      setbnid(response.data._id);
      setFormData(response.data);
      seteditmode(true);
      //   setData(response.data);
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function callapi() {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/whyferrytechget`);
        setData(response.data);
        console.log(response.data);
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
      const response = await axios.delete(
        `${API_URL}/whyferrytechdelete/${myid}`
      );
      console.log("Response:", response.data.data);
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        `${API_URL}/whyferrytechpost`,
        formData
      );
      console.log("Response:", response.data.data);
      setFormData({ heading:"", paragraph:"", img:"", isActive:false });
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error posting data:", error); // Handle any errors
    }
  };
  const industryeditsubmit = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/whyferrytechedit/${bnid}`,
        formData
      );
      console.log("Responsedat:", response.data.data);
      setchangeCount((p) => p + 1);
      setFormData({heading:"", paragraph:"", img:"", isActive:false});
      seteditmode(false);
      //   setData(response.data);
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };
  const handlechkbx = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      isActive: !prevFormData.isActive,
    }));
  };
  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="desktop">
        <div className="leftsidebardash">
          <MyNavbarDesk />
          <AdminSidebar />
        </div>
        <div className="content_add">
          <h4 className="text-center mb-4">Why Ferrytech</h4>
          <table className="table-auto m-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Active</th>
                <th className="border px-4 py-2">Heading</th>
                <th className="border px-4 py-2">Paragraph</th>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5">
                    <div
                      style={{
                        height: "400px",
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
                    <td className="border px-4 py-2">
                      {item.isActive ? "Yes" : "No"}
                    </td>

                    <td className="border px-4 py-2">{item.heading}</td>
                    <td className="border px-4 py-2">{item.paragraph}</td>
                    <td className="border px-4 py-2">{item.img}</td>

                    <td className="border px-4 py-2 ">
                      <div className="d-flex gap-2">

                      <button
                        className="btn btn-primary"
                        onClick={() => industryedittoggle(item._id)}
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

          <div>
            <form>
              <label>Heading</label>
              <input
                type="text"
                name="heading"
                value={formData.heading}
                onChange={handleInput}
              />
              <label>Paragraph</label>
              <input
                type="text"
                name="paragraph"
                value={formData.paragraph}
                onChange={handleInput}
              />
              <label>Image</label>
              <input
                type="text"
                name="img"
                value={formData.img}
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
                {editmode ? (
                  <button type="button" onClick={industryeditsubmit}>
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

export default WhyFerrytechCompDashPage;
