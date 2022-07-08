import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Shop from "./Components/Shop/Shop";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
