import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "./header";
import {Nav} from "./nav";

export const CryptoLayout = () => {
    return (
        <div className="w-full h-full crypto-font">
            <Header/>
            <main className="max-w-[420px] h-full overflow-auto">
                <Outlet/>
            </main>
            <Nav/>
        </div>
    )
}