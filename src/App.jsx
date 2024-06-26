import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Login from "./Pages/Login/Login";
import { AuthProvider } from "./context/AuthContext";
import ControllerPrivateRoute from "./AdminPannel/components/ControllerPrivateRoute/ControllerPrivateRoute"
import Overview from "./AdminPannel/Overview/Overview";
import EditProduct from "./AdminPannel/pages/EditProduct/EditProduct";
import OrderCollection from "./AdminPannel/components/OrderCollection/OrderCollection";
import UploadProduct from "./AdminPannel/pages/Product/UploadProduct";
import ViewOrder from "./AdminPannel/pages/ViewOrder/ViewOrder";
import Control from "./AdminPannel/pages/Control/Control";
import CreateCategory from "./AdminPannel/pages/Category/CreateCategory";
import ProductTable from "./AdminPannel/components/ProductTable/ProductTable";
import Invoice from "./AdminPannel/pages/Invoice/Invoice";
import GarbageCollection from "./Pages/GarbageCollection/GarbageCollection";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import Payment from "./components/Payment/Payment";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess"
import MainPageLayout from "./components/MainPageLayout/MainPageLayout"
import Category from "./Category/Category"

const App = () => {
  return (
    <div className="scroll-smooth">
      <AuthProvider>
      <MainPageLayout>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/productDetails/:id" element={<ProductDetails />}></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="orderSuccess" element={<OrderSuccess />}></Route>
          <Route path="/paymentPage" element={<Payment />}></Route>
          <Route
              path="/category/:categoryName"
              element={<Category />}
            ></Route>
          <Route
              path="/dashboard"
              element={<ControllerPrivateRoute></ControllerPrivateRoute>}
            >
              <Route path="overview" element={<Overview />}></Route>
              {/* <AdminLayout> */}
              {/* <Route path="users" element={<AllUsers />}></Route> */}
              <Route path="edit/:id" element={<EditProduct />}></Route>
              <Route path="upload" element={<UploadProduct />}></Route>
              
              <Route
                path="orders"
                element={<OrderCollection></OrderCollection>}
              />
              <Route path="orders/:orderId" element={<ViewOrder />}></Route>
              <Route path="control" element={<Control></Control>} />
              <Route path="createCategory" element={<CreateCategory />}></Route>
              <Route path="allProducts" element={<ProductTable />}></Route>
              <Route path="garbage" element={<GarbageCollection />}></Route>
              <Route path="orders/invoice/:id" element={<Invoice />}></Route>
              {/* </AdminLayout> */}
            </Route>
          
        </Routes>
        </MainPageLayout>
      </AuthProvider>
    </div>
  );
};

export default App;
