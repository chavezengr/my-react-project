import React from "react";
import { Route, Routes } from "react-router-dom";
import SideMenu from "./app/components/Sidebar/Sidebar";
import routes from "./app/routes";
import MainLayout from "./app/views/layouts/MainLayout";
import ItemsSelection from "./app/views/pages/Bid/is/is_100/container";
import { Medicines } from "./app/views/pages/Medoc/Products";

const Router: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

        <Route index element={<ItemsSelection />} />

        <Route path="/products" element={<SideMenu routes={routes.productRoutes} />}>
          <Route index element={<Medicines />} />
          {routes.productRoutes.map(({ path, element: Element }) => (
            <Route path={path} element={<Element />}></Route>
          ))}
        </Route>

      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>404 Not Found!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default Router;
