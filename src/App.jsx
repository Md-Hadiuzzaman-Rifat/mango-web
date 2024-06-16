import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Login from "./Pages/Login/Login";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route to="/productDetails" element={<ProductDetails />}></Route>
          
          
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
