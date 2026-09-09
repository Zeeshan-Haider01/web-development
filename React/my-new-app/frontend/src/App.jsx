import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleUser from "./pages/SingleUser";
import UserForm from "./pages/UserForm";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:id" element={<SingleUser />} />
                <Route path="/create" element={<UserForm />} />
                <Route path="/edit/:id" element={<UserForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
