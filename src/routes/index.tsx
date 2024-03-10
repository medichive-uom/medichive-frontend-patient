
import React from "react";
import { Navigate } from "react-router-dom";
import App from "../App";
import BookAppointment from "../pages/book-appointment/book-appointment";
import Home from "../pages/home/home";
import ViewLabReports from "../pages/view-labreports/view-labreports";

export const getRoutes = () => [
  //{ path: "/", element: <Navigate to="home" /> },
  { path: "/bookappointment", element: <BookAppointment /> },
  { path: "/home", element: <Home /> },
  { path: "/viewlabreports", element: <ViewLabReports/> },
];
