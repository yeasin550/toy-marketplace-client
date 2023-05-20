/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import {useContext} from 'react';

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();
  
   if (loading) {
     return <progress className="progress w-56 text-center"></progress>;
   }
   if (user) {
     return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

