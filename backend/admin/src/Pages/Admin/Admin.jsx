import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";
import Popular from "../../Components/Popular/Popular";
import NewCollection from "../../Components/NewCollection/NewCollection";
import GetAllUser from '../../Components/GetUser/GetAllUser'
import GetAllOrder from '../../Components/GetOrders/GetOrder.jsx'

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct></AddProduct>} />
        <Route path="/listproduct" element={<ListProduct></ListProduct>} />
        <Route path="/popular" element={<Popular></Popular>} />
        <Route
          path="/newCollection"
          element={<NewCollection></NewCollection>}
        />
        <Route path="/getAllUser" element={<GetAllUser></GetAllUser>}></Route>
        <Route path="/getallorder" element={<GetAllOrder></GetAllOrder>}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
