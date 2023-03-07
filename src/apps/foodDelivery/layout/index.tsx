import React from "react";
import {Outlet} from "react-router-dom";

export const FoodDelivery = () => {
    return (
        <div className="w-full h-full">
            <main className="relative flex w-full h-full overflow-auto justify-center transition-all duration-300 sm:min-w-[1440px] sm:min-h-[860px]">
                <Outlet/>
            </main>
        </div>
    )
}