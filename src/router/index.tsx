import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {FoodDeliveryLayout} from "../layout/foodDelivery";
import {LoginHome} from "../pages/foodDelivery/loginHome";
import {Home} from "../pages/foodDelivery";
import {AccSettings} from "../pages/foodDelivery/accSettings";
import {GalleryPage} from "../pages/gallery";


export const Index = ()=> {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GalleryPage/>}/>

                <Route path="/food-delivery-login" element={<LoginHome/>}/>
                <Route path="/food-delivery" element={<FoodDeliveryLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="acc-settings" element={<AccSettings/>}/>
                </Route>

            </Routes>
        </Router>
    )
}