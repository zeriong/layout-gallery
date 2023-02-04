import React from "react";
import {LandingLayout} from "../layout/landing";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export const Index = ()=> {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingLayout/>}>
                </Route>
            </Routes>
        </Router>
    )
}