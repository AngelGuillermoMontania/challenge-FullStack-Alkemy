import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing"
import Header from "./components/Header";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </div>
    );
};

export default App;
