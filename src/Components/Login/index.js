import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const formValidationSchema = yup.object({
  email: yup.string().min(3, "User name must be 8 characters").required(),
  password: yup.string().min(8).max(12).required("Why not fill this Password "),
});

function Login({ setUser }) {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${process.env.React_App_Url}/login`,
          values,
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);

        if (response.data.user.role === 0) {
          navigate("/admin");
        } else {
          navigate("/query");
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="singnin-row-container">
      <div className="singin-container">
        <h2>Log In</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            className="signin-input"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="email"
          />
          <br />
          <span className="error">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
            <br />
          </span>
          <br />

          <TextField
            label="Password"
            variant="outlined"
            className="signin-input"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            name="password"
          />
          <br />
          <span className="error">
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null}
            <br />
          </span>

          <div id="checkbox">
            <Checkbox />
            Remember me
          </div>
          <Button
            name="role"
            variant="contained"
            type="submit"
            color="success"
            className="signin-button"
          >
            Sign In
          </Button>
          <br />
        </form>
        <br />
        <div className="navigate">
          <Link to={"/"}>Dont have an account? Signup</Link>
          <Link to={"/forgot-password"}>forgetPassword</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
