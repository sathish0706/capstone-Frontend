import React from "react";
import { useContext } from "react";
import UserContext from "../../Context";
import Header from "../Header";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <div className="Header">
        <h3>Profile</h3>
        <i className="fa-solid fa-user">&nbsp;{user.name}</i>
      </div>
      <div className="profile-container">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAaVBMVEX///8jHyAAAAAfGxwcFxgGAADf39/7+/sXERMUDhAaFRbv7+9ycXHa2toPBwlaWVnJyMjCwsIzMDGysrKsq6s4NTYmIyNCQECCgYHl5eWfnp56eHhRT1AsKitjYmLS0dGOjY1IR0eWlZU/4mxcAAADw0lEQVR4nO2aa3OqMBCGZQNyD6DcRLn+/x95graWVhCSbMycGZ5Pbcfpu2Q3m+WNh8POzs7Ozs5/yyWurreTYZxu1yq+fFy9imoA6hGGRwHqqPpkDGFAwSPGBOIBDcIPyR8bcI0ZXGiOH5C3O3Dm5Ecc6GzV+pcIluRHIFJcCm1N3+kbBq1blfoxmO/1DcOEWKX+mvw9DcoiCE2yLs+2pKloP/rFYvn/xil8JQEE1jZ9w7ACFfrnTQXwAM74+raxqQAeEAO/IaUcC8CWIMXWtzOOBWBLkGEvAU8F3JcAuwoijy8AL8LVP3IlYITgHs28GUDPQTM7grzDbVADqPlTUGPq+7zyI5gHQsudAZYDzMkkWZmD5qAJZgCbD8IfLMwAziIBYO5D7SugPQDtu0B7H9DeCfWfBdpPQ+3zgPaJSP9MqH0q1v5ewPlmlCuwahKed0PMc+CJ7rfjg99v9Qd6Nf7AIfS2OSSeMseyhQ0REFDok+l2yUafcOVYdNX6hOxUWnNK1dvFw7xVfX98GJTLMy7BklseKDaK/e/tHQbk9b6APO8LfEVtIO6z5wa/pLecWtQxGQ77Ib+lz6cPs17JRujAM6H6+d2PqzLKTqcsKqt48swVmB6U6PJhdq9+KFYeLi4enzshd8Mz+RrJPNq8+ddhQ78/R1BHomrSg13aJLOnvR039Gd7kGm6ZBl+Nx8HTl38JwY77k5/LpPwmkL30vwIBSjKKolDRpxUZQFAXw4q6HD0h/nma7LdR13HcSn7Yf6MwlkD/peiSQQIlRhK6LMIpHejn3O/lE0huWxbDgT8sSlUcj6VKYAHcmUgmYARuSRcJRMwQq/i+kfpBIyA+JQWCJhjr7jCdYizABJLUCJUwAgVHE8u8lvgAcnFhlX5HvCNYC+4cfpSy3g3EX1+Z24ZIc8OLwOCOcBpAg+EWsHriCUOofz6PmIGWA74TyQeU2xDAPy2WSVwS7OMxf+SUCLWIKtC/m4cbPTktuHwb4Pbqh3Fg8ndC+0CcReyfVjwmsec9vxqANz2vfYAtNeA/m2ovRMecsQcmDm//savT25DzMCu8GZCQbtowRrh1xc2SlJAmEs9mSu8sN9yR/IOAr2cSZJmMiEQyKRvMP2qWP4y+XtcKCoM49xOIrC4Y3AsiOYdVRH8tLHA2nZrN14esA83KfKtgd0OTQZsKd59vZqY7MEha4ZWzdf8/WPSNX1mMBGLuiyUL0zHpePfjKxvuuSo6MJkEkabpEMZREVW54aR11kRBeWQJq1y6Z2dnZ2dHRX8A9AKN+uTgKv2AAAAAElFTkSuQmCC"
          alt="loading"
        />
        <b>name :</b>
        <h1>{user.name}</h1>
        <b>email :</b>
        <h1>{user.email}</h1>
        <b>Number :</b>
        <h1>{user.mobileNumber}</h1>
      </div>
    </div>
  );
};

export default Profile;
