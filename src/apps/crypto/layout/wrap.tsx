import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "./header";
import {Nav} from "./nav";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";


export const CryptoLayout = () => {
    const isMenuActivated = useSelector((state:RootState) => state.menuHandler.showMenu);
    return (
        <div className="w-full h-full crypto-font bg-gray-200" id="crypto">
            <div className='max-w-[420px] h-full overflow-auto scroll-hidden bg-crypto-dark m-auto'>
                <Header/>
                <main className={`transition-all duration-300 ease-in-out h-[calc(100%-95px)] ${isMenuActivated ? "mt-[264px]" : "mt-95"}`}>
                    <Outlet/>
                </main>
                <Nav/>
            </div>
        </div>
    )
}