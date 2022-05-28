import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing"
import Header from "./components/Header";
import Home from "./components/Home/Home";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
