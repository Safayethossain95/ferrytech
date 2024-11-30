/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/Desktop/Admin/AdminSidebar";
import MyNavbarDesk from "../../Components/Desktop/MyNavbarDesk";
import { API_URL } from "../../config";

const ProductDashPage = () => {
  const [changeCount, setchangeCount] = useState(0);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    catname: "",
    bannerheading: "",
    bannerbg: "",
    heading: "",
    para: "",
    card: [
      {
        imgurl: "",
        name: "",
        detail: "",
        isActive: true,
      },
    ],
  });
  // const [dataAboutUsDetails, setdataAboutUsDetails] = useState([]);
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
        catname: "",
        bannerheading: "",
        bannerbg: "",
        heading: "",
        para: "",
        card: [
          {
            imgurl: "",
            name: "",
            detail: "",
            isActive: true,
          },
        ],
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
        catname: "",
        bannerheading: "",
        bannerbg: "",
        heading: "",
        para: "",
        card: [
          {
            imgurl: "",
            name: "",
            detail: "",
            isActive: false,
          },
        ],
      });
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error posting data:", error); // Handle any errors
    }
  };
  const handlenewproductinsert=()=>{
    document.getElementById('editform').scrollIntoView({ behavior: 'smooth' });
  }
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
          <h4 className="text-center mb-4">Product Page Edit</h4>
          <table className="table-auto border-collapse border border-gray-400 w-full m-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">Field</th>
                <th className="border border-gray-400 px-4 py-2">Value</th>
                <th className="border border-gray-400 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Displaying the general fields */}
              {loading ? (
                <tr>
                  <td colSpan="3">
                    <div
                      style={{
                        width: "600px",
                        height:"600px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src="/assets/loading/loading.svg" alt="Loading..." />
                    </div>
                  </td>
                </tr>
              ) :data?.map((olditem, key) => {
                return (
                  <>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        Category Name
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {olditem.catname}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        Banner Heading
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {olditem.bannerheading}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        Heading
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {olditem.heading}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        Description
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {olditem.para}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        Banner Image
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {olditem.bannerbg}
                      </td>
                      <td style={{ padding: "20px" }}>
                        {" "}
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-primary"
                            onClick={() => industryedittoggle(olditem)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => industrydelete(olditem._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                    <td colSpan={2}>
                      <h5 className="border border-gray-400 px-4 py-2">
                        Products
                      </h5>
                    </td>

                    {olditem.card.map((item,key) => (
                      <tr>
                        <td
                          key={item._id}
                          className="border border-gray-400 px-4 py-2"
                          colSpan="2"
                        >
                          <div className="flex items-center">
                            <b>Product No. {key+1}</b>
                            <p>
                              <b>Image: </b> {item.imgurl}
                            </p>
                            <div>
                              <p className="font-semibold">
                                <b>Name: </b> {item.name}
                              </p>
                              <p>
                                <b>Detail: </b>
                                {item.detail}
                              </p>
                              <p>
                                <b>Status:</b>{" "}
                                {item.isActive ? "Active" : "Inactive"}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                );
              })}

              {/* Divider Row */}

              {/* Displaying the card items */}
            </tbody>
          </table>

          <div>
            <div className="form mt-4" id="editform">
              <div className="p-6 max-w-4xl m-auto">
                <h2 className="text-2xl font-bold mb-4">Truck Crane Form</h2>
                {/* General fields */}
                <div className="space-y-4">
                  <input
                    name="catname"
                    value={formData?.catname}
                    onChange={handleGeneralChange}
                    className="border p-2 w-full"
                    placeholder="Category Name"
                  />
                  <input
                    name="bannerheading"
                    value={formData?.bannerheading}
                    onChange={handleGeneralChange}
                    className="border p-2 w-full"
                    placeholder="Banner Heading"
                  />
                  <input
                    name="bannerbg"
                    value={formData?.bannerbg}
                    onChange={handleGeneralChange}
                    className="border p-2 w-full"
                    placeholder="Banner Background URL"
                  />
                  <input
                    name="heading"
                    value={formData?.heading}
                    onChange={handleGeneralChange}
                    className="border p-2 w-full"
                    placeholder="Heading"
                  />
                  <textarea
                    name="para"
                    value={formData?.para}
                    onChange={handleGeneralChange}
                    className="border p-2 w-full"
                    placeholder="Description"
                  />
                </div>

                {/* Existing cards */}
                <h3 className="text-xl font-bold mt-6 mb-2">Existing Cards</h3>
                {formData?.card?.map((cardItem, index) => (
                  <div key={index} className="card-form">
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={cardItem.imgurl}
                      onChange={(e) =>
                        handleCardChange(index, "imgurl", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      value={cardItem.name}
                      onChange={(e) =>
                        handleCardChange(index, "name", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Detail"
                      value={cardItem.detail}
                      onChange={(e) =>
                        handleCardChange(index, "detail", e.target.value)
                      }
                    />
                    <label>
                      Active:
                      <input
                        type="checkbox"
                        checked={cardItem.isActive}
                        onChange={(e) =>
                          handleCardChange(index, "isActive", e.target.checked)
                        }
                      />
                    </label>
                    <hr />
                  </div>
                ))}
                {/* Button to add a new card */}
                <button onClick={addCard}>Add New Card</button>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDashPage;
