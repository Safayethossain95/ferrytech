/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/Desktop/Admin/AdminSidebar";
import MyNavbarDesk from "../../Components/Desktop/MyNavbarDesk";
import { API_URL } from "../../config";

const NavbarDashPage = () => {
  const [changeCount, setchangeCount] = useState(0);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    menuId: 0,
    menuName: "",
    url: "",
    sequence: 0,
    parentMenuId: 0,
    status: false,
    isActive: false,
    childNavbarVm: [
      {
        menuId: 0,
        menuName: "",
        url: "",
        sequence: 0,
        parentMenuId: "", // Assuming this is a string
        status: false,
        isActive: false,
      },
    ],
  });

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleChildInput = (index, e) => {
    const { name, value, type, checked } = e.target;
  
    // Handle input changes for checkboxes
    const updatedValue = type === 'checkbox' ? checked : value;
  
    // Update the specific child object in the array based on index
    const updatedChildNavbarVm = formData.childNavbarVm.map((child, i) => {
      if (i === index) {
        return { ...child, [name]: updatedValue }; // Update only the specific child
      }
      return child;
    });
  
    setFormData((prevData) => ({
      ...prevData,
      childNavbarVm: updatedChildNavbarVm,
    }));
  };

  const addChildNavbar = () => {
    setFormData((prevState) => ({
      ...prevState,
      childNavbarVm: [
        ...prevState.childNavbarVm,
        {
          menuId: 0,
          menuName: "",
          url: "",
          sequence: 0,
          parentMenuId: "",
          status: false,
          isActive: false,
        },
      ],
    }));
  };
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
   // Function to remove a child item based on index
   const handleRemoveChild = (index) => {
    const newChildNavbarVm = formData.childNavbarVm.filter((_, i) => i !== index);
    setFormData({ ...formData, childNavbarVm: newChildNavbarVm });
  };
  const editsubmit = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/navbaredit/${bnid}`,
        formData
      );
      console.log("Responsedat:", response.data.data);
      setchangeCount((p) => p + 1);
      setFormData({
        menuId: 0,
        menuName: "",
        url: "",
        sequence: 0,
        parentMenuId: 0,
        status: false,
        isActive: false,
        childNavbarVm: [
          {
            menuId: 0,
            menuName: "",
            url: "",
            sequence: 0,
            parentMenuId: "", // assuming this is a string
            status: false,
            isActive: false,
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
        const response = await axios.get(`${API_URL}/navbarget`);
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
        `${API_URL}/navbardelete/${myid}`
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
      const response = await axios.post(`${API_URL}/navbarpost`, formData);
      console.log("Response:", response.data.data);
      setFormData({
        menuId: 0,
        menuName: "",
        url: "",
        sequence: 0,
        parentMenuId: 0,
        status: false,
        isActive: false,
        childNavbarVm: [
          {
            menuId: 0,
            menuName: "",
            url: "",
            sequence: 0,
            parentMenuId: "", // assuming this is a string
            status: false,
            isActive: false,
          },
        ],
      });
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error posting data:", error); // Handle any errors
    }
  };
  const handlenewproductinsert = () => {
    document.getElementById("editform").scrollIntoView({ behavior: "smooth" });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  // Handling input change for childNavbarVm


  const headers = data.length > 0 ? Object.keys(data[0]) : [];
  return (
    <div>
      <div className="desktop">
        <div className="leftsidebardash">
          <MyNavbarDesk />
          <AdminSidebar />
        </div>
        <div className="content_add">
          <div className="m-auto" style={{ width: "100%" }}>
            <div className="text-end">
              <div className="downloadbutton">
                <button
                  className="ms-auto my-4"
                  style={{ width: "220px" }}
                  onClick={handlenewproductinsert}
                >
                  <a>Insert New Navbar Item</a>
                </button>
              </div>
            </div>
          </div>
          <h4 className="text-center mb-4">Navbar Edit</h4>
          <table className="table-auto border-collapse border border-gray-400 w-full m-auto">
            <thead>
              <tr className="bg-gray-200">
                {headers
                  .filter((it) => it !== "_id" && it !== "__v")
                  .map((header) => (
                    <th
                      key={header}
                      className="border border-gray-400 px-4 py-2"
                    >
                      {header}
                    </th>
                  ))}
                <th className="border border-gray-400 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={9}>
                    <div
                      style={{
                        height: "400px",
                        width: "100%",
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
                data.map((item, index) => (
                  <tr key={index}>
                    {headers
                      .filter((it) => it !== "_id" && it !== "__v")
                      .map((header) => (
                        <td
                          key={header}
                          className="border border-gray-400 px-4 py-2"
                        >
                          {typeof item[header] === "object" &&
                          item[header] !== null
                            ? Array.isArray(item[header])
                              ? item[header].length > 0
                                ? item[header]
                                    .map((child) => child?.menuName || "N/A")
                                    .join(", ")
                                : "N/A"
                              : "N/A"
                            : item[header]?.toString() || "N/A"}
                        </td>
                      ))}
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
            </tbody>
          </table>

          <div style={{ marginTop: "70px" }}>
    <form
      id="editform"
      onSubmit={handleSubmit}
      className="p-6 max-w-4xl m-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Custom Form</h2>

      {/* Main Form Fields */}
      <label>Menu ID:</label>
      <input
        type="number"
        name="menuId"
        value={formData.menuId}
        onChange={handleInput}
        className="border p-2 w-full mb-4"
        placeholder="Menu ID"
      />

      <label>Menu Name:</label>
      <input
        type="text"
        name="menuName"
        value={formData.menuName}
        onChange={handleInput}
        className="border p-2 w-full mb-4"
        placeholder="Menu Name"
      />

      <label>URL:</label>
      <input
        type="text"
        name="url"
        value={formData.url}
        onChange={handleInput}
        className="border p-2 w-full mb-4"
        placeholder="URL"
      />

      <label>Sequence:</label>
      <input
        type="number"
        name="sequence"
        value={formData.sequence}
        onChange={handleInput}
        className="border p-2 w-full mb-4"
        placeholder="Sequence"
      />

      <label>Parent Menu ID:</label>
      <input
        type="number"
        name="parentMenuId"
        value={formData.parentMenuId}
        onChange={handleInput}
        className="border p-2 w-full mb-4"
        placeholder="Parent Menu ID"
      />

      <label className="block mb-2">
        Status:
        <input
          type="checkbox"
          name="status"
          checked={formData.status}
          onChange={handleCheckboxChange}
          className="ml-2"
        />
      </label>

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

      {/* Child Navbar Form Fields */}
      <div>
        <h3 className="text-xl font-bold mt-6 mb-4">Child Navbar</h3>
        {formData?.childNavbarVm?.map((child, index) => (
  <div key={index} className="border p-4 mb-4">
    <label>Child Menu ID:</label>
    <input
      type="number"
      name="menuId"
      value={child.menuId}
      onChange={(e) => handleChildInput(index, e)} // Correct handler
      className="border p-2 w-full mb-4"
      placeholder="Child Menu ID"
    />

    <label>Child Menu Name:</label>
    <input
      type="text"
      name="menuName"
      value={child.menuName}
      onChange={(e) => handleChildInput(index, e)} // Correct handler
      className="border p-2 w-full mb-4"
      placeholder="Child Menu Name"
    />

    <label>Child URL:</label>
    <input
      type="text"
      name="url"
      value={child.url}
      onChange={(e) => handleChildInput(index, e)} // Correct handler
      className="border p-2 w-full mb-4"
      placeholder="Child URL"
    />

    <label>Child Sequence:</label>
    <input
      type="number"
      name="sequence"
      value={child.sequence}
      onChange={(e) => handleChildInput(index, e)} // Correct handler
      className="border p-2 w-full mb-4"
      placeholder="Child Sequence"
    />

    <label>Child Parent Menu ID:</label>
    <input
      type="number"
      name="parentMenuId"
      value={child.parentMenuId}
      onChange={(e) => handleChildInput(index, e)} // Correct handler
      className="border p-2 w-full mb-4"
      placeholder="Child Parent Menu ID"
    />

    <label className="block mb-2">
      Child Status:
      <input
        type="checkbox"
        name="status"
        checked={child.status}
        onChange={(e) => handleChildInput(index, e)} // Correct handler
        className="ml-2"
      />
    </label>

    <label className="block mb-2">
      Child Is Active:
      <input
        type="checkbox"
        name="isActive"
        checked={child.isActive}
        onChange={(e) => handleChildInput(index, e)} // Correct handler
        className="ml-2"
      />
    </label>
    {/* Remove Button */}
    <button
              type="button"
              onClick={() => handleRemoveChild(index)} // Remove child on click
              className="bg-red-500 text-black py-2 px-4 rounded absolute top-0 right-0"
            >
              Remove
            </button>
  </div>
))}


        <button
          type="button"
          onClick={addChildNavbar}
          className="btn btn-primary mt-4"
        >
          Add Child Navbar
        </button>
         
      </div>

      <div className="downloadbutton mt-3">
        {editmode ? (
          <button
            type="button"
            onClick={editsubmit}
            className="btn btn-primary"
          >
            <a>Edit</a>
          </button>
        ) : (
          <button
            type="button"
            onClick={handlesubmit}
            className="btn btn-success"
          >
            <a>Submit</a>
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

export default NavbarDashPage;
