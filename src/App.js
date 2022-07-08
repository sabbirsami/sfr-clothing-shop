import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Hero from "./Components/Home/Hero";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Hero />}></Route>
            </Routes>
        </div>
    );
}

export default App;
