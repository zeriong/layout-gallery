import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "./header";
import {Nav} from "./nav";

export const CryptoLayout = () => {
    return (
        <div className="w-full">
            <Header/>
            <main className="w-full sm:w-[1140px] h-auto pt-[104px] pb-6 px-[15px] mx-auto">
                <Outlet/>
            </main>
            <Nav/>
        </div>
    )
}