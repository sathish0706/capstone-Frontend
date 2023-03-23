import "./query.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import UseFindUser from "../../Hooks/UseFindUser";
import { useContext } from "react";
import UserContext from "../../Context";

function CreateQuery() {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const [userQuery, setUserQuery] = useState({
    name: "",
    mobileNumber: "",
    queryTitle: "",
    category: "",
    queryDescription: "",
  });
  console.log(userQuery);

  const handleForm = (value) => {
    return setUserQuery((query) => {
      return { ...query, ...value };
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let res = await axios.post(
        `${process.env.React_App_Url}/post/query`,
        userQuery,
        { withCredentials: true }
      );
      if (res) {
        console.log(res);
        navigate("/query");
      }

      console.log(res);
    } catch (err) {
      console.log("err:", err);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <div className="Header">
        <h3> Queries</h3>
        <i className="fa-solid fa-user" onClick={() => navigate("/profile")}>
          &nbsp;{user.name}
        </i>
      </div>
      <br />
      <Button variant="outlined" id="back" onClick={() => navigate(-1)}>
        Back
      </Button>

      <div className="createquery-container">
        <form onSubmit={handleSubmit}>
          <b>Details :</b>
          <br />
          <br />
          <h3>Name</h3>
          <input
            className="query-title"
            type="text"
            name="name"
            value={userQuery.name}
            placeholder="Enter Your Name"
            onChange={(e) => handleForm({ name: e.target.value })}
          />
          <br />
          <h3>Mobile Number</h3>
          <input
            className="query-title"
            type="number"
            name="mobileNumbe"
            value={userQuery.mobileNumber}
            placeholder="Enter Your Mobile Number"
            onChange={(e) => handleForm({ mobileNumber: e.target.value })}
          />
          <h3>Query Title</h3>
          <input
            className="query-title"
            type="text"
            name="title"
            placeholder="Enter the Query Title"
            value={userQuery.title}
            onChange={(e) => handleForm({ queryTitle: e.target.value })}
          />
          <br />
          <h3>Category</h3>
          <input
            className="query-title"
            type="text"
            name="category"
            value={userQuery.category}
            placeholder="Enter the Category"
            onChange={(e) => handleForm({ category: e.target.value })}
          />
          <br />
          <h3>Query Description</h3>
          <textarea
            className="query-description"
            placeholder="Enter the Description"
            type="text"
            name="description"
            onChange={(e) => handleForm({ queryDescription: e.target.value })}
            value={userQuery.description}
          />

          <br />
          <br />
          <b>Your available Time ? ( Ours : 9:00 AM - 7:00 PM )</b>
          <br />
          <br />
          <h4>From</h4>
          <input
            type="time"
            id="app"
            name="app"
            min="09:00"
            max="18:00"
            value="09:00"
            required
            className="query-title"
          />
          <h4>Till</h4>
          <input
            type="time"
            id="app"
            name="app"
            min="09:00"
            max="18:00"
            value="17:00"
            required
            className="query-title"
          />

          <br />

          <div className="Query-button">
            <Button variant="outlined">Cancel</Button>&nbsp;&nbsp;
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateQuery;
