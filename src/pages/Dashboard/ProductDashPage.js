/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/Desktop/Admin/AdminSidebar";
import MyNavbarDesk from "../../Components/Desktop/MyNavbarDesk";
import { API_URL } from "../../config";
import FactoryImagesEditPage from "./FactoryImagesEditPage";
import CertificatesImagesEditComp from "../../Components/Desktop/Admin/CertificatesImagesEditComp";

const ProductDashPage = () => {
  const [changeCount, setchangeCount] = useState(0);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    stats: [
      {
        number: null,
        unit: "",
        power: null,
        text: "",
      },
    ],
    bg: "",
    title: "",
    description: "",
  });
 
 

 

  const [dataAboutUsDetails, setdataAboutUsDetails] = useState([]);


  const industryedittoggle = async (item) => {
    try {
      setFormData(item);
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
        const response = await axios.get(`${API_URL}/productget`);
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
      const response = await axios.delete(`${API_URL}/contactdelete/${myid}`);
      console.log("Response:", response.data.data);
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    async function aboutbannerpost() {
      console.log({ aboutBanner: formData });
      try {
        const response = await axios.post(`${API_URL}/aboutuspagepost`, {
          aboutBanner: formData,
        });
        setFormData({
          stats: [
            {
              number: "",
              unit: "",
              power: "",
              text: "",
            },
          ],
          bg: "",
          title: "",
          description: "",
        });
        setchangeCount((p) => p + 1);
        // Handle the response if needed
        console.log(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error submitting form:", error);
      }
    }
    aboutbannerpost();
  };
  const handleStatsChange = (index, e) => {
    const { name, value } = e.target;
    const updatedStats = [...formData.stats];
    updatedStats[index][name] = value;
    setFormData({ ...formData, stats: updatedStats });
  };
  const addStat = () => {
    const newStat = { number: null, unit: "", power: null, text: "" };
    setFormData({ ...formData, stats: [...formData.stats, newStat] });
  };
  const removeStat = (index) => {
    const updatedStats = formData.stats.filter((_, i) => i !== index);
    setFormData({ ...formData, stats: updatedStats });
  };

  return (
    <div>
      <div className="desktop">
        <div className="leftsidebardash">
          <MyNavbarDesk />
          <AdminSidebar />
        </div>
        <div className="content_ad">
          <h4 className="text-center mb-4">Product Page Edit</h4>
          <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 px-4 py-2">Field</th>
          <th className="border border-gray-400 px-4 py-2">Value</th>
          <th className="border border-gray-400 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Displaying the general fields */}
        {
          data?.map((olditem,key)=>{
            return(
              <>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Category Name</td>
          <td className="border border-gray-400 px-4 py-2">{olditem.catname}</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Banner Heading</td>
          <td className="border border-gray-400 px-4 py-2">{olditem.bannerheading}</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Heading</td>
          <td className="border border-gray-400 px-4 py-2">{olditem.heading}</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Description</td>
          <td className="border border-gray-400 px-4 py-2">{olditem.para}</td>
        </tr>
        <tr>
          <td className="border border-gray-400 px-4 py-2">Banner Image</td>
          <td className="border border-gray-400 px-4 py-2">
          {olditem.bannerbg}
          </td>
        <td> <div className="d-flex gap-2">
                      <button
                        className="btn btn-primary"
                        onClick={() => industryedittoggle(olditem._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => industrydelete(olditem._id)}
                      >
                        Delete
                      </button>
                      </div></td>
        </tr>
        <h5 className="border border-gray-400 px-4 py-2">Products</h5>
       
        {olditem.card.map((item) => (
              <tr >
          <td key={item._id} className="border border-gray-400 px-4 py-2" colSpan="2">
              <div className="flex items-center">
                <p>{item.imgurl}</p>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>{item.detail}</p>
                  <p>Status: {item.isActive ? 'Active' : 'Inactive'}</p>
                </div>
              </div>
            </td>
          </tr>
        ))}
           
              </>
            )
          })
        }

        {/* Divider Row */}
      

        {/* Displaying the card items */}
      </tbody>
    </table>
          <form onSubmit={handleSubmit}>
            {/* Stats Section */}
            {formData?.stats.map((stat, index) => (
              <div key={index} className="mb-4">
                <h4>Stats {index + 1}</h4>
                <div>
                  <label>Stats - Number</label>
                  <input
                    type="number"
                    name="number"
                    value={stat.number}
                    onChange={(e) => handleStatsChange(index, e)}
                  />
                </div>

                <div>
                  <label>Stats - Unit</label>
                  <input
                    type="text"
                    name="unit"
                    value={stat.unit}
                    onChange={(e) => handleStatsChange(index, e)}
                  />
                </div>

                <div>
                  <label>Stats - Power</label>
                  <input
                    type="number"
                    name="power"
                    value={stat.power}
                    onChange={(e) => handleStatsChange(index, e)}
                  />
                </div>

                <div>
                  <label>Stats - Text</label>
                  <input
                    type="text"
                    name="text"
                    value={stat.text}
                    onChange={(e) => handleStatsChange(index, e)}
                  />
                </div>

                {formData.stats.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeStat(index)}
                    className="btn btn-danger mt-2"
                  >
                    Remove Stat
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addStat}
              className="btn btn-primary mt-2"
            >
              Add Stat
            </button>

            {/* Background Image Section */}
            <div>
              <label>Background Image URL</label>
              <input
                type="text"
                name="bg"
                value={formData.bg}
                onChange={handleInputChange}
              />
            </div>

            {/* Title Section */}
            <div>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            {/* Description Section */}
            <div>
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            {/* Submit Button */}
            <div>
              <div className="downloadbutton">
                <button type="submit">
                  <a>Submit</a>
                </button>
              </div>
            </div>
          </form>

        
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDashPage;
