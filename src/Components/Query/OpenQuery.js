import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../Context";
import "./query.css";

const OpenQuery = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);

  console.log(query);

  const { id } = useParams();

  const getQueryById = async () => {
    let response = await axios.get(
      `${process.env.React_App_Url}/get/query/${id}`
    );
    if (response) {
      console.log(response.data);
      setQuery(response.data);
    }
  };
  useEffect(() => {
    getQueryById();
  }, []);

  return (
    <div>
      <div className="Header">
        <h3>Queries</h3>
        <i className="fa-solid fa-user" onClick={() => navigate("/profile")}>
          &nbsp;{user.name}
        </i>
      </div>

      {query ? (
        <div className="query-cards">
          <h4>Title :</h4>
          <h3>{query.queryTitle}</h3>
          <h4>Query Category</h4>
          <h3>{query.category}</h3>

          <h4>Creates at :</h4>
          <h3>{query.createdAt}</h3>

          <h4>Description :</h4>
          <h3>{query.queryDescription}</h3>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default OpenQuery;
