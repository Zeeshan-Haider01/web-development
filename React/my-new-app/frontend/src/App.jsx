// import SingleUser from "./pages/SingleProduct";
// import UserForm from "./pages/UserForm";
// import GetPost from "./pages/GetPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import SingleProduct from "./pages/SingleProduct";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/singleproduct/:id" element={<SingleProduct />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;











//  <Route path="/create" element={<UserForm />} />
//                 <Route path="/edit/:id" element={<UserForm />} />
