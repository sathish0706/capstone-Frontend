import React, { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../Context";
import { useNavigate, useParams } from "react-router-dom";

const TakeQuery = () => {
  const { id } = useParams();
  //   console.log(id);
  const [detail, seDetail] = useState("");

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const getDetailById = async () => {
    const res = await axios.get(
      `${process.env.React_App_Url}/get/query/${id}`,
      {
        withCredentials: true,
      }
    );
    seDetail(res.data);
    console.log(res);
  };

  useEffect(() => {
    getDetailById();
  }, []);

  return (
    <>
      <div className="Header">
        <h3>Queries</h3>
        <i className="fa-solid fa-user" onClick={() => navigate("/profile")}>
          {user.name}
        </i>
      </div>
      <div className="takeQuery-container">
        <div className="take-query">
          <h1>call him clear his doubts</h1>

          <h3>Name :{detail.name}</h3>
          <h3>Number :{detail.mobileNumber}</h3>
        </div>
      </div>
    </>
  );
};

export default TakeQuery;
