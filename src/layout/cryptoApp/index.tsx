import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "./header";
import {Nav} from "./nav";

export const CryptoLayout = () => {
    return (
        <div className="w-full h-full crypto-font bg-gray-200">
            <main className="max-w-[420px] h-full overflow-auto bg-crypto-dark m-auto">
                <Header/>
                <Outlet/>
                <Nav/>
            </main>
        </div>
    )
}