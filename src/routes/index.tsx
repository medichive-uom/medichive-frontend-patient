import BookAppointment from "../pages/book-appointment/book-appointment";
import Home from "../pages/home/home";
import ViewLabReports from "../pages/view-labreports/view-labreports";
import AvailableTimes from "../pages/book-appointment/available-times";

export const getRoutes = () => [
  //{ path: "/", element: <Navigate to="home" /> },
  { path: "/bookappointment", element: <BookAppointment /> },
  { path: "/bookappointment/doctor", element: <AvailableTimes /> },
  { path: "/home", element: <Home /> },
  { path: "/viewlabreports", element: <ViewLabReports/> },
];
