import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {FoodDelivery} from "../apps/foodDelivery/layout";
import {LoginHome} from "../apps/foodDelivery/pages/loginHome";
import {DeliveryHome} from "../apps/foodDelivery/pages";
import {AccSettings} from "../apps/foodDelivery/pages/accSettings";
import {GalleryPage} from "../apps/gallery";
import {CryptoApp} from "../apps/crypto/layout";
import {Intro} from "../apps/crypto/pages/intro";
import {Markets} from "../apps/crypto/pages/markets";
import {Trades} from "../apps/crypto/pages/trades";
import {CryptoWallets} from "../apps/crypto/pages/wallets";
import {CryptoActivity} from "../apps/crypto/pages/activity";
import {CryptoLoginHome} from "../apps/crypto/pages/loginHome";
import {CryptoHome} from "../apps/crypto/pages";
import {CryptoLayout} from "../apps/crypto/layout/wrap";
import {FoodDeliveryLayout} from "../apps/foodDelivery/layout/wrap";


export const Index = ()=> {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GalleryPage/>}/>

                <Route path="/food-delivery" element={<FoodDelivery/>}>
                    <Route path="*" element={<FoodDeliveryLayout/>}>
                        <Route index element={<DeliveryHome/>}/>
                        <Route path="acc-settings" element={<AccSettings/>}/>
                    </Route>
                    <Route path="signIn" element={<LoginHome/>}/>
                </Route>

                <Route path="/crypto" element={<CryptoApp/>}>
                    <Route path="*" element={<CryptoLayout/>}>
                        <Route index element={<CryptoHome/>}/>
                        <Route path="markets" element={<Markets/>}/>
                        <Route path="wallets" element={<CryptoWallets/>}/>
                        <Route path="activity" element={<CryptoActivity/>}/>
                        <Route path="trades" element={<Trades/>}/>
                    </Route>
                    <Route path="intro" element={<Intro/>}/>
                    <Route path="signIn" element={<CryptoLoginHome/>}/>
                </Route>
            </Routes>
        </Router>
    )
}