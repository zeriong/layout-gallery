import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {FoodDeliveryLayout} from "../apps/foodDelivery/layout";
import {LoginHome} from "../apps/foodDelivery/pages/loginHome";
import {DeliveryHome} from "../apps/foodDelivery/pages";
import {AccSettings} from "../apps/foodDelivery/pages/accSettings";
import {GalleryPage} from "../apps/gallery";
import {CryptoApp} from "../apps/crypto/layout";
import {CryptoIntro} from "../apps/crypto/pages/cryptoIntro";
import {CryptoMarkets} from "../apps/crypto/pages/cryptoMarkets";
import {CryptoTrades} from "../apps/crypto/pages/cryptoTrades";
import {CryptoWallets} from "../apps/crypto/pages/wallets";
import {CryptoActivity} from "../apps/crypto/pages/activity";
import {CryptoLoginHome} from "../apps/crypto/pages/loginHome";
import {CryptoHome} from "../apps/crypto/pages";
import {CryptoLayout} from "../apps/crypto/layout/wrap";


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

                <Route path="/crypto" element={<CryptoApp/>}>
                    <Route path="*" element={<CryptoLayout/>}>
                        <Route index element={<CryptoHome/>}/>
                        <Route path="markets" element={<CryptoMarkets/>}/>
                        <Route path="wallets" element={<CryptoWallets/>}/>
                        <Route path="activity" element={<CryptoActivity/>}/>
                        <Route path="trades" element={<CryptoTrades/>}/>
                    </Route>
                    <Route path="intro" element={<CryptoIntro/>}/>
                    <Route path="signIn" element={<CryptoLoginHome/>}/>
                </Route>
            </Routes>
        </Router>
    )
}