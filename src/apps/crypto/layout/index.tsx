import React from "react";
import {Outlet} from "react-router-dom";
import {LinkToGallery} from "../../gallery/linkToGallery";

export const CryptoApp = () => {
    return (
        <div className="w-full h-full crypto-font bg-gray-200">
            <main className="max-w-[420px] h-full overflow-auto bg-crypto-dark m-auto scroll-hidden">
                <Outlet/>
            </main>
            <LinkToGallery/>
        </div>
    )
}