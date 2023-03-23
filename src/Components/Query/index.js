import "./query.css";
import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../Context";
import Header from "../Header";
import { useState } from "react";

const Query = () => {
  const { queryDetails, user } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(queryDetails);
  console.log(user);

  return (
    <>
      <Header />
      <div className="Header">
        <h3>Queries</h3>
        <i className="fa-solid fa-user" onClick={() => navigate("/profile")}>
          &nbsp;{user.name}
        </i>
      </div>
      <br />
      <Button variant="outlined" id="back" onClick={() => navigate("/create")}>
        + Create Query
      </Button>
      <div className="totall-Query">
        {queryDetails === []
          ? "Loading"
          : queryDetails.map((queryDetail, i) => (
              <div>
                <div className="query-card" key={i}>
                  <section>
                    {queryDetail.queryTitle}
                    <br />
                    <b>{queryDetail.category}</b>
                  </section>
                  <div className="query-close">
                    <button
                      onClick={() => navigate(`/openQuery/${queryDetail._id}`)}
                    >
                      open Query
                    </button>
                    <br />
                    <br />
                    <br />
                    <b>{queryDetail.createdAt}</b>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default Query;
