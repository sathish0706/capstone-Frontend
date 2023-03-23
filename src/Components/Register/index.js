import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const formValidationSchema = yup.object({
  name: yup.string().min(3, "User name must be 8 characters").required(),
  email: yup.string().min(4, "email must be 8 characters").required(),
  mobileNumber: yup
    .string()
    .min(10, "User name must be 10 characters")
    .required(),
  password: yup.string().min(8).max(12).required("Why not fill this Password "),
});

function Login() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobileNumber: "",
      password: "",
      role: 1,
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${process.env.React_App_Url}/signup`,
          values,
          { withCredentials: true }
        );

        if (response.data) {
          console.log(response.data);
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    },
  });
  console.log(formik.values);
  return (
    <div className="singnin-row-container">
      <div className="singin-container">
        <h2>Signup</h2>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            className="signin-input"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="name"
          />
          <br />
          <span>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </span>
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
          <span>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""}
          </span>
          <br />

          <TextField
            label="Mobile Number"
            variant="outlined"
            className="signin-input"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            s
            name="mobileNumber"
          />
          <br />
          <span>
            {formik.touched.mobileNumber && formik.errors.email
              ? formik.errors.mobileNumber
              : ""}
          </span>

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
          <span className="error">
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null}
            <br />
          </span>
          <section>if you are admin enter 0</section>
          <TextField
            name="role"
            type="number"
            className="signin-input"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Button
            variant="contained"
            type="submit"
            color="success"
            className="signin-button"
          >
            Sign In
          </Button>
          <br />
        </form>

        <Link to={"/login"}>Allready have an account? Signin</Link>
      </div>
    </div>
  );
}
export default Login;
