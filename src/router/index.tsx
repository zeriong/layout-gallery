import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {FoodDeliveryLayout} from "../layout/foodDelivery";
import {LoginHome} from "../pages/foodDelivery/loginHome";
import {DeliveryHome} from "../pages/foodDelivery";
import {AccSettings} from "../pages/foodDelivery/accSettings";
import {GalleryPage} from "../pages/gallery";
import {CryptoLayout} from "../layout/cryptoApp";
import {CryptoIntro} from "../pages/cryptoApp/cryptoIntro";
import {CryptoMarkets} from "../pages/cryptoApp/cryptoMarkets";
import {CryptoTrades} from "../pages/cryptoApp/cryptoTrades";
import {CryptoWallets} from "../pages/cryptoApp/wallets";
import {CryptoActivity} from "../pages/cryptoApp/activity";
import {CryptoLoginHome} from "../pages/cryptoApp/loginHome";
import {CryptoHome} from "../pages/cryptoApp";


export const Index = ()=> {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GalleryPage/>}/>
                <Route path="/food-delivery-login" element={<LoginHome/>}/>
                <Route path="/food-delivery" element={<FoodDeliveryLayout/>}>
                    <Route index element={<DeliveryHome/>}/>
                    <Route path="acc-settings" element={<AccSettings/>}/>
                </Route>

                <Route path="/crypto-intro" element={<CryptoIntro/>}/>
                <Route path="/crypto-login-home" element={<CryptoLoginHome/>}/>
                <Route path="/crypto" element={<CryptoLayout/>}>
                        <Route index element={<CryptoHome/>}/>
                        <Route path="markets" element={<CryptoMarkets/>}/>
                        <Route path="trades" element={<CryptoTrades/>}/>
                        <Route path="wallets" element={<CryptoWallets/>}/>
                        <Route path="activity" element={<CryptoActivity/>}/>
                </Route>

            </Routes>
        </Router>
    )
}