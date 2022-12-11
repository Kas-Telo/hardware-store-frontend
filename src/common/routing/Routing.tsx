import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Catalog} from "../../features/catalog/ui/Catalog";
import {Product} from "../../features/product/ui/Product";
import {Cart} from "../../features/cart/ui/Cart";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Catalog/>}/>
        <Route path={'/:id'} element={<Product/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
      </Routes>
    </>
  );
};