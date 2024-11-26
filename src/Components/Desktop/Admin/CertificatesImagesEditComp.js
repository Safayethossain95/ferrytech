/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL, Only_Frontend } from "../../../config";
import { certificateImagesApi } from "../../../utils/aboutUsPageApi";
const CertificatesImagesEditComp = () => {
  const [changeCount, setchangeCount] = useState(0);
  const [editmode, seteditmode] = useState(false);
  const [bnid, setbnid] = useState("");
  const [formData, setFormData] = useState({
    isActive: false,
    img: "",
  });

  const [certificatefinaldata,setcertificatefinaldata]=useState(certificateImagesApi)

 

  const industryedittoggle = async (myitem) => {
    try {
      setbnid(myitem._id)
      setFormData(myitem);
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
        if(!Only_Frontend){

          const response = await axios.get(`${API_URL}/certificateimagesget`);
          setcertificatefinaldata(response.data);
          console.log(response.data);
        } else{
          console.log("frontend cirtificate")
        }
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
        `${API_URL}/certificateimagesdelete/${myid}`
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
        `${API_URL}/certificateimagespost`,
        formData
      );
      console.log("Response:", response.data.data);
      setFormData({ isActive: false, img: "" });
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error posting data:", error); // Handle any errors
    }
  };
  const industryeditsubmit = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/certificateimagesedit/${bnid}`,
        formData
      );
      console.log("Responsedat:", response.data.data);
      setchangeCount((p) => p + 1);
      setFormData({ isActive: false, img: "" });
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
       
        <h4 className="text-center mb-4">Certificate Images Edit</h4>
          <table className="table-auto m-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Active</th>
                <th className="border px-4 py-2">Image URL</th>
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
                certificatefinaldata?.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">
                      {item.isActive ? "Yes" : "No"}
                    </td>

                    <td className="border px-4 py-2">{item.img}</td>

                    <td className="border px-4 py-2 d-flex gap-2">
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
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div>
            <form>
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
  );
};

export default CertificatesImagesEditComp;
