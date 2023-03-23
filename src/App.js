import Header from "./Components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UseFindUser from "./Hooks/UseFindUser";
import CreateQuery from "./Components/Query/CreateQuery";
import Query from "./Components/Query";
import { useEffect, useState } from "react";
import UserContext from "./Context";
import axios from "axios";
import Admin from "./Components/Admin/AdminQuery";
import TakeQuery from "./Components/Admin/TakeQuery";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import Capstone from "./Components/Capstone";
import AdminCapstone from "./Components/Admin/AdminCapstone";
import CapstoneDetails from "./Components/Capstone/CapstoneDetails";
import PrivateRoutes from "./Routes/PrivateRoutes";
import PublicRoutes from "./Routes/PublicRoutes";
import Profile from "./Components/Profile";
import OpenQuery from "./Components/Query/OpenQuery";

function App() {
  const [user, setUser] = UseFindUser();
  const [queryDetails, setQueryDetails] = useState([]);

  console.log(user);
  console.log("url", process.env.React_App_Url);
  let getData = async () => {
    try {
      let response = await axios.get(`${process.env.React_App_Url}/get/query`);
      if (response) {
        setQueryDetails(await response.data);
      }
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <UserContext.Provider value={{ queryDetails, user }}>
      <div className="App">
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path="/create" element={<CreateQuery />} />
            <Route path="/query" element={<Query />} />
            <Route path="admin" element={<Admin />} />
            <Route path="/take-query/:id" element={<TakeQuery />} />
            <Route path="/capstone" element={<Capstone />} />
            <Route path="/add-capstone" element={<AdminCapstone />} />
            <Route path="/capstone-details" element={<CapstoneDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/openQuery/:id" element={<OpenQuery />} />
          </Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
