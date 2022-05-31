import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
