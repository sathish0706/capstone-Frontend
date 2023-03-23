import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `${process.env.React_App_Url}/forgotPassword`,
        { email: email },
        { withCredentials: true }
      );
      if (response) {
        setIsEmailSent(true);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div>
      {!isEmailSent ? (
        <form onSubmit={handleSubmit}>
          <div className="singnin-row-container">
            <div className="singin-container">
              <h3>Forgot Password</h3>
              <br />
              <h3>Email Address</h3>
              <br />
              <TextField
                type="email"
                className="form-control"
                id="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div>Reset password link has been sent to your email address</div>
      )}
    </div>
  );
};

export default ForgotPassword;
