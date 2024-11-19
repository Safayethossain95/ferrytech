/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/Desktop/Admin/AdminSidebar";
import MyNavbarDesk from "../../Components/Desktop/MyNavbarDesk";
import { API_URL } from "../../config";

const ContactInfoPage = () => {
  const [changeCount, setchangeCount] = useState(0);
  const [editmode, seteditmode] = useState(false);
  const [bnid, setbnid] = useState("");
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    location: [{ lname: "", address: "" ,mapLink:""}],
    contactnumber: "",
    email: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedLocations = [...prev.location];
      updatedLocations[index][name] = value;
      return { ...prev, location: updatedLocations };
    });
  };
  const addLocation = () => {
    setFormData((prev) => ({
      ...prev,
      location: [...prev.location, { lname: "", address: "" }],
    }));
  };

  const removeLocation = (index) => {
    setFormData((prev) => {
      const updatedLocations = prev.location.filter((_, i) => i !== index);
      return { ...prev, location: updatedLocations };
    });
  };

  const industryedittoggle = async (myid) => {
    try {
      const response = await axios.get(`${API_URL}/contactget/${myid}`);
      console.log("Responsedat:", response.data);
      setbnid(response.data.data._id);
      setFormData(response.data.data);
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
        const response = await axios.get(`${API_URL}/contactgetall`);
        setData(response.data.data);
        console.log(response.data.data);
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
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(`${API_URL}/contactpost`, formData);
      console.log("Response:", response.data.data);
      setFormData( {location: [{ lname: "", address: "",mapLink:"" }],
        contactnumber: "",
        email: ""});
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error posting data:", error); // Handle any errors
    }
  };
  const industryeditsubmit = async () => {
    try {
      const response = await axios.post(`${API_URL}/contactedit/${bnid}`, formData);
      console.log("Responsedat:", response.data.data);
      setchangeCount((p) => p + 1);
      setFormData({location: [{ lname: "", address: "",mapLink:"" }],
        contactnumber: "",
        email: ""});
      seteditmode(false);
      //   setData(response.data);
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };

  return (
    <div>
      <div className="desktop">
        <div className="leftsidebardash">
          <MyNavbarDesk />
          <AdminSidebar />
        </div>
        <div className="content_ad">
          <h4 className="text-center mb-4">Contact Edit</h4>
          <table className="table-auto border-collapse border border-gray-400 w-full m-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Locations</th>
                <th className="border px-4 py-2">Contact Number</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                 <tr>
                 <td colSpan="4">
                   <div style={{ height: "400px",width:"800px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <img src="/assets/loading/loading.svg" alt="Loading..." />
                   </div>
                 </td>
               </tr>
              ) :data?.map((item, index) => (
                <tr key={index}>
                  {/* Locations */}
                  <td className="border px-4 py-2">
                    <ul>
                      {item.location?.map((loc, locIndex) => (
                        <li key={locIndex}>
                          <strong>Name:</strong> {loc.lname},{" "}
                          <strong>Address:</strong> {loc.address}
                          <strong>Map link:</strong> {loc.mapLink}
                        </li>
                      ))}
                    </ul>
                  </td>

                  {/* Contact Number */}
                  <td className="border px-4 py-2">{item.contactnumber}</td>

                  {/* Email */}
                  <td className="border px-4 py-2">{item.email}</td>

                  {/* Actions */}
                  <td className="border px-4 py-2">
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
              ))}
            </tbody>
          </table>

          <div>
            <form>
              {formData.location.map((loc, index) => (
                <div key={index}>
                  <label>Location Name</label>
                  <input
                    type="text"
                    name="lname"
                    value={loc.lname}
                    onChange={(e) => handleLocationChange(index, e)}
                  />
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={loc.address}
                    onChange={(e) => handleLocationChange(index, e)}
                  />
                  <label>Map Link</label>
                  <input
                    type="text"
                    name="mapLink"
                    value={loc.mapLink}
                    onChange={(e) => handleLocationChange(index, e)}
                  />
                  {formData.location.length > 1 && (
                    <div className="downloadbutton">
                      <button
                        type="button"
                        onClick={() => removeLocation(index)}
                        className="ms-auto me-0"
                      >
                        <a>Remove</a>
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <div className="downloadbutton">
                <button type="button" onClick={addLocation} className="mt-2">
                  <a>Add Location</a>
                </button>
              </div>

              <div className="mt-4">
                <label>Contact Number</label>
                <input
                  type="text"
                  name="contactnumber"
                  value={formData.contactnumber}
                  onChange={handleInput}
                />
              </div>

              <div className="mt-4">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                />
              </div>

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

export default ContactInfoPage;
