import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Home from "./Components/Home/Home";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </div>
    );
}

export default App;
