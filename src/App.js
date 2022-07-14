import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Shop from "./Components/Shop/Shop";
import Blogs from "./Components/Blog/Blogs";
import About from "./Components/About/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Shared/Cart";
import ShippingBag from "./Components/Shared/ShippingBag";
import { Toaster } from "react-hot-toast";
import Login from "./Components/Shared/Login";
import SignUp from "./Components/Shared/SignUp";
import RequireAuth from "./Components/Shared/RequireAuth";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/blogs" element={<Blogs />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route
                    path="/shipping-bag"
                    element={
                        <RequireAuth>
                            <ShippingBag />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/shop/:id"
                    element={
                        <RequireAuth>
                            <Cart />
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
            </Routes>
            <Footer />
            <Toaster />
        </div>
    );
}

export default App;
