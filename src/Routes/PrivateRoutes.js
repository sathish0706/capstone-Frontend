import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../Context/index";

const PrivateRoutes = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) {
    return <div> <Navigate to="/login" /> </div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
