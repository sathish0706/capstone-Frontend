import React, { useContext } from "react";
import UserContext from "../../Context";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { queryDetails, user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className="header-container">
        <div className="title">
          <h3>Zen desk</h3>
        </div>
        <div className="main-content">
          <div className="main" onClick={() => navigate("/admin")}>
            Query
          </div>
          <div className="main" onClick={() => navigate("/add-capstone")}>
            Capstone
          </div>
          <div className="main">Login/Logout</div>
        </div>
      </div>
      <div className="Header">
        <h3>Queries</h3>
        <i className="fa-solid fa-user" onClick={() => navigate("/profile")}>
          {user.name}
        </i>
      </div>
      {queryDetails === []
        ? "Loading"
        : queryDetails.map((queryDetail, i) => (
            <div key={i}>
              <div className="query-card">
                <section>
                  {queryDetail.queryTitle}
                  <br />
                  <b>{queryDetail.category}</b>
                </section>
                <div className="query-close">
                  <button
                    onClick={() => navigate(`/take-query/${queryDetail._id}`)}
                  >
                    Take Query
                  </button>
                  <br />
                  <br />
                  <b>{queryDetail.createdAt}</b>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Admin;
