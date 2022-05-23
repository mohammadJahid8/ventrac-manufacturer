import { Route, Routes } from 'react-router-dom';
import './App.css';
import ResetPass from './Pages/Auths/ResetPassword/ResetPass';
import SignIn from './Pages/Auths/SignIn/SignIn';
import SignUp from './Pages/Auths/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Test from './Pages/Test';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/HomePage/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
