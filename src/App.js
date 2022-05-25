import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResetPass from "./Pages/Auths/ResetPassword/ResetPass";
import SignIn from "./Pages/Auths/SignIn/SignIn";
import SignUp from "./Pages/Auths/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Test from "./Pages/Test";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/HomePage/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Purchase from "./Pages/Purchase/Purchase";
import PrivateRoute from "./Pages/Auths/PrivateRoute";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyProfile from "./Pages/DashBoard/InsideDashboard/MyProfile/MyProfile";
import AddReview from "./Pages/DashBoard/InsideDashboard/AddReview/AddReview";
import MyOrders from "./Pages/DashBoard/InsideDashboard/MyOrders/MyOrders";
import MakeAdmin from "./Pages/DashBoard/InsideDashboard/MakeAdmin/MakeAdmin";

function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<PrivateRoute />}>
            <Route path="/purchase/:id" element={<Purchase />} />
            <Route path="/dashboard" element={<DashBoard />}>
              <Route path="myprofile" element={<MyProfile />} />
              <Route path="addreview" element={<AddReview />} />
              <Route path="myorders" element={<MyOrders />} />
              <Route path="makeadmin" element={<MakeAdmin />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
