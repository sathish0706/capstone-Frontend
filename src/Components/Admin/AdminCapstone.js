import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { useContext } from "react";
import UserContext from "../../Context";

const AdminCapstone = () => {
  const { queryDetails, user } = useContext(UserContext);
  const navigate = useNavigate();

  const [userCapstone, setUserCapstone] = useState({
    userName: "",
    capstoneTitle: "",
    batch: "",
    capstoneDescription: "",
  });
  console.log(userCapstone);

  const handleForm = (value) => {
    return setUserCapstone((capstone) => {
      return { ...capstone, ...value };
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let res = await axios.post(
        `${process.env.React_App_Url}/post/capstone`,
        userCapstone,
        { withCredentials: true }
      );
      if (res) {
        console.log(res);
        navigate("/capstone");
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
    <div>
      <AdminHeader />
      <div className="Header">
        <h3>Capstone</h3>
        <i className="fa-solid fa-user" onClick={() => navigate("/profile")}>
          {user.name}
        </i>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <br />
        <input
          className="query-title"
          type="text"
          name="name"
          value={userCapstone.userName}
          placeholder="Enter User Name"
          onChange={(e) => handleForm({ userName: e.target.value })}
        />
        <br />
        <label>Batch </label>
        <br />
        <input
          className="query-title"
          type="text"
          name="batch"
          value={userCapstone.batch}
          placeholder="Enter Batch"
          onChange={(e) => handleForm({ batch: e.target.value })}
        />
        <br />
        <label>Capstone Title </label>
        <br />

        <input
          className="query-title"
          type="text"
          name="capstoneTitle"
          value={userCapstone.capstoneTitle}
          placeholder="Enter Your capstoneTitle"
          onChange={(e) => handleForm({ capstoneTitle: e.target.value })}
        />
        <br />
        <label>Capstone Description</label>
        <br />

        <input
          className="query-title"
          type="text"
          name="capstoneDescription"
          value={userCapstone.capstoneDescription}
          placeholder="Enter Your capstoneDescription"
          onChange={(e) => handleForm({ capstoneDescription: e.target.value })}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AdminCapstone;
