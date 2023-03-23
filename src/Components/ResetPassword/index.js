import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const ResetPassword = () => {
  const [userData, setUserData] = useState({
    userId: "",
    token: "",
    password: "",
  });
  const navigate = useNavigate();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  const userId = new URLSearchParams(search).get("id");

  useEffect(() => {
    setUserData({ ...userData, userId: userId, token: token });
  }, []);

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `${process.env.React_App_Url}/resetPassword`,
        userData,
        { withCredentials: true }
      );
      if (response) {
        navigate("/login");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div>
      <div className="singnin-row-container">
        <div className="singin-container">
          <h3>Reset Password</h3>
          <br />
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <TextField
                type="password"
                className="form-control"
                id="password"
                value={userData.password}
                placeholder="Password"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>
            <br />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
