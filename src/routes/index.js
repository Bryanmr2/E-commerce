import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import TopBar from '../components/NavBar';
import { CartContextProvider } from '../context/cart-context';
import { CartPage } from '../pages/cart';
import { OrderPage } from '../pages/orders';
import { ProductsPage } from '../pages/products';

export const AppRouter = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
            <TopBar>
                <Routes>
                    <Route path="/" element={<ProductsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/orders" element={<OrderPage />} />
                </Routes>
            </TopBar>
            </BrowserRouter>
        </CartContextProvider>

    )
}
