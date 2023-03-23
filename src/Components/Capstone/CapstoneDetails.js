import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const CapstoneDetails = () => {
  let navigate = useNavigate();
  const [capstone, setCapstone] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [submitDetail, setSubmitDetail] = useState({
    froentSourceCode: "",
    backendSourceCode: "",
    frontendDeploy: "",
    backendDeploy: "",
  });

  const getCapstone = async () => {
    var response = await axios.get(`${process.env.React_App_Url}/get/capstone`);
    console.log(response);
    setCapstone(response.data);
  };

  useEffect(() => {
    getCapstone();
  }, []);

  const formHandle = (value) => {
    return setSubmitDetail((cptsn) => {
      return { ...cptsn, ...value };
    });
  };
  console.log(submitDetail);

  return (
    <>
      <Header />
      <div className="Header">
        <h3>Capstone</h3>
        <i className="fa-solid fa-user">&nbsp;</i>
      </div>
      <br />
      <Button variant="outlined" id="back" onClick={() => navigate(-1)}>
        Back
      </Button>
      <div>
        {capstone
          ? capstone.map((cpstn, i) => (
              <div key={i}>
                <h3>{cpstn.userName}</h3>
                <br />
                <b>description</b>
                <p>{cpstn.capstoneDescription}</p>
                <b>Requirement</b>
                <ul>
                  <li>The project should achieve the CODE QUALITY</li>
                  <li>Use fonts/icons if it’s required in the design.</li>
                  <li>The use of various charts is required in the design.</li>
                  <li>
                    The use of bootstrap/ material CSS is required in the design
                  </li>
                </ul>
                <b>How do I submit my work</b>
                <ul>
                  <li>
                    Push all your work files to GitHub in two different
                    repositories as given below
                  </li>
                  <li>Front-end repo name project-name-frontend.</li>
                  <li>Back-end repo name project-name-backend.</li>
                  <li>
                    Deploy your front-end application on
                    Netlify(https://www.netlify.com) and back-end application on
                    Render(https://render.com/).
                  </li>
                </ul>
                <br />
                <b>frontend Source code</b>&nbsp;&nbsp;&nbsp;
                {!isSubmit ? (
                  <input
                    type="text"
                    name="froentSourceCode"
                    value={submitDetail.froentSourceCode}
                    onChange={(e) =>
                      formHandle({ froentSourceCode: e.target.value })
                    }
                  />
                ) : (
                  <a href="#">{submitDetail.froentSourceCode}</a>
                )}
                <br />
                <br />
                <b>Back-end Source code</b>&nbsp;&nbsp;&nbsp;
                {!isSubmit ? (
                  <input
                    name="backendSourceCode"
                    value={submitDetail.backendSourceCode}
                    onChange={(e) =>
                      formHandle({ backendSourceCode: e.target.value })
                    }
                  />
                ) : (
                  <a href="#">{submitDetail.backendSourceCode}</a>
                )}
                <br />
                <br />
                <b>Front-end Deployed URL</b>&nbsp;&nbsp;&nbsp;
                {!isSubmit ? (
                  <input
                    name="frontendDeploy"
                    value={submitDetail.frontendDeploy}
                    onChange={(e) =>
                      formHandle({ frontendDeploy: e.target.value })
                    }
                  />
                ) : (
                  <a href="#">{submitDetail.frontendDeploy}</a>
                )}
                <br />
                <br />
                <b>Back-end Deployed URL</b>&nbsp;&nbsp;&nbsp;
                {!isSubmit ? (
                  <input
                    name="backendDeploy"
                    value={submitDetail.backendDeploy}
                    onChange={(e) =>
                      formHandle({ backendDeploy: e.target.value })
                    }
                  />
                ) : (
                  <a href="#">{submitDetail.backendDeploy}</a>
                )}
                <br />
                <br />
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => setIsSubmit(true)}
                >
                  Submit
                </Button>
              </div>
            ))
          : "Loading"}
      </div>
    </>
  );
};

export default CapstoneDetails;
