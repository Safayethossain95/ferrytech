/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/Desktop/Admin/AdminSidebar";
import MyNavbarDesk from "../../Components/Desktop/MyNavbarDesk";
import { API_URL } from "../../config";

const AboutUsDashPage = () => {
  const [changeCount, setchangeCount] = useState(0);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    stats:[ {
        number: null,
        unit: "",
        power: null,
        text: ""
    }],
    bg: "",
    title: "",
    description: ""
    
});
const [formAboutUsDetails,setformAboutUsDetails]=useState({
        heading: "",
        para1: "",
        para2: "",
        imageUrl: "",
        list1: [
        ],
        list2: [
        ]
})
const handleInputChangeaboutdetails = (e) => {
  const { name, value } = e.target;
  setformAboutUsDetails((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleListChange = (e, listName, index) => {
  const { value } = e.target;
  setformAboutUsDetails((prev) => {
    const updatedList = [...prev[listName]];
    updatedList[index] = value;
    return { ...prev, [listName]: updatedList };
  });
};

const addListItem = (listName) => {
  setformAboutUsDetails((prev) => ({
    ...prev,
    [listName]: [...prev[listName], ""],
  }));
};

const removeListItem = (listName, index) => {
  setformAboutUsDetails((prev) => {
    const updatedList = [...prev[listName]];
    updatedList.splice(index, 1);
    return { ...prev, [listName]: updatedList };
  });
};
const [dataAboutUsDetails,setdataAboutUsDetails]=useState([])

useEffect(()=>{
  console.log(formAboutUsDetails)
})
 


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
        const response = await axios.get(`${API_URL}/aboutuspageget`);
        console.log(response.data.aboutBanner);
        setData([response.data.aboutBanner])
        console.log([response.data.aboutUsDetails]);
        setdataAboutUsDetails([response.data.aboutUsDetails]);
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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    async function aboutbannerpost(){
        console.log({aboutBanner:formData})
        try {
          
          const response = await axios.post(`${API_URL}/aboutuspagepost`, {aboutBanner:formData}
          );
          setFormData({
            stats:[ {
                number: "",
                unit: "",
                power: "",
                text: ""
            }],
            bg: "",
            title: "",
            description: ""
            
        });
        setchangeCount(p=>p+1)
          // Handle the response if needed
          console.log(response.data);
        } catch (error) {
          // Handle any errors
          console.error('Error submitting form:', error);
        }

    }
    aboutbannerpost()
  }
  const handleStatsChange = (index, e) => {
    const { name, value } = e.target;
    const updatedStats = [...formData.stats];
    updatedStats[index][name] = value;
    setFormData({ ...formData, stats: updatedStats });
  };
  const addStat = () => {
    const newStat = { number: null, unit: "", power: null, text: "" };
    setFormData({ ...formData, stats: [...formData.stats, newStat] });
  };const removeStat = (index) => {
    const updatedStats = formData.stats.filter((_, i) => i !== index);
    setFormData({ ...formData, stats: updatedStats });
  };
  const handleEditButtonofaboutdetails=(item)=>{
    try {
      
      setformAboutUsDetails(item);
      //   setData(response.data);
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  }
  const handleSubmitaboutdetails=(e)=>{
    e.preventDefault()
    async function aboutdetailspost(){
        console.log({aboutBanner:formData})
        try {
          
          const response = await axios.post(`${API_URL}/aboutuspagepost`, {aboutUsDetails:formAboutUsDetails}
          );
          setformAboutUsDetails( {heading: "",
            para1: "",
            para2: "",
            imageUrl: "",
            list1: [
            ],
            list2: [
            ]});
        setchangeCount(p=>p+1)
          // Handle the response if needed
          console.log(response.data);
        } catch (error) {
          // Handle any errors
          console.error('Error submitting form:', error);
        }

    }
    aboutdetailspost()
  }
  return (
    <div>
      <div className="desktop">
        <div className="leftsidebardash">
          <MyNavbarDesk />
          <AdminSidebar />
        </div>
        <div className="content_ad">
          <h4 className="text-center mb-4">Contact Page Banner Edit</h4>
          <table className="table-auto border-collapse border border-gray-400 w-full m-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Stats</th>
                <th className="border px-4 py-2">Background</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Description</th>
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
                  <td className="border px-4 py-2">
                    {item?.stats?.map((stat, statIndex) => (
                      <div key={statIndex} className="mb-2">
                        <p><b>number:</b> {stat?.number}</p>
                        <p><b>power:</b> {stat?.power}</p>
                        <p><b>unit:</b> {stat?.unit}</p>
                        <p><b>text:</b> {stat?.text}</p>
                      </div>
                    ))}
                  </td>
                  <td className="border px-4 py-2">{item?.bg}</td>
                  <td className="border px-4 py-2">{item?.title}</td>
                  <td className="border px-4 py-2">{item?.description}</td>
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
              ))}
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

  <button type="button" onClick={addStat} className="btn btn-primary mt-2">
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


    <table className="table-auto border-collapse border border-gray-400 w-full">
  <thead>
    <tr>
      <th className="border px-4 py-2">Heading</th>
      <th className="border px-4 py-2">Paragraph 1</th>
      <th className="border px-4 py-2">Paragraph 2</th>
      <th className="border px-4 py-2">Image</th>
      <th className="border px-4 py-2">List 1</th>
      <th className="border px-4 py-2">List 2</th>
      <th className="border px-4 py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {dataAboutUsDetails?.map((item, index) => (
      <tr key={index}>
        <td className="border px-4 py-2">{item.heading}</td>
        <td className="border px-4 py-2">{item.para1}</td>
        <td className="border px-4 py-2">{item.para2}</td>
        <td className="border px-4 py-2">
        {item.imageUrl}
        </td>
        <td className="border px-4 py-2">
          <ul>
            {item.list1.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ul>
        </td>
        <td className="border px-4 py-2">
          <ul>
            {item.list2.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ul>
        </td>
        <td className="border px-4 py-2">
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEditButtonofaboutdetails(item)}
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

<form onSubmit={handleSubmitaboutdetails}>
      {/* Heading */}
      <div>
        <label>Heading</label>
        <input
          type="text"
          name="heading"
          value={formAboutUsDetails.heading}
          onChange={handleInputChangeaboutdetails}
        />
      </div>

      {/* Paragraph 1 */}
      <div>
        <label>Paragraph 1</label>
        <textarea
          name="para1"
          value={formAboutUsDetails.para1}
          onChange={handleInputChangeaboutdetails}
        />
      </div>

      {/* Paragraph 2 */}
      <div>
        <label>Paragraph 2</label>
        <textarea
          name="para2"
          value={formAboutUsDetails.para2}
          onChange={handleInputChangeaboutdetails}
        />
      </div>

      {/* Image URL */}
      <div>
        <label>Image URL</label>
        <input
          type="text"
          name="imageUrl"
          value={formAboutUsDetails.imageUrl}
          onChange={handleInputChangeaboutdetails}
        />
      </div>

      {/* List 1 */}
      <div>
        <label>List 1</label>
        {formAboutUsDetails.list1.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              value={item}
              onChange={(e) => handleListChange(e, "list1", index)}
            />
            {formAboutUsDetails.list1.length > 1 && (
              <button
                type="button"
                onClick={() => removeListItem("list1", index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={() => addListItem("list1")}>
          Add List 1 Item
        </button>
      </div>

      {/* List 2 */}
      <div>
        <label>List 2</label>
        {formAboutUsDetails.list2.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              value={item}
              onChange={(e) => handleListChange(e, "list2", index)}
            />
            {formAboutUsDetails.list2.length > 1 && (
              <button
                type="button"
                onClick={() => removeListItem("list2", index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={() => addListItem("list2")}>
          Add List 2 Item
        </button>
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>

          <div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDashPage;
