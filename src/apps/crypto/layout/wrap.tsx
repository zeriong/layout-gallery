import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import {Header} from "./header";
import {Nav} from "./nav";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";


export const CryptoLayout = () => {
    const isMenuActivated = useSelector((state:RootState) => state.menuHandler.showMenu);
    const location = useLocation();
    return (
        <div className="w-full h-full crypto-font bg-gray-200" id="crypto">
            <div className='max-w-[420px] h-full overflow-auto scroll-hidden bg-crypto-dark m-auto'>
                {location.pathname !== '/crypto/wallets' ? <Header/> : ''}
                <main
                    className={`transition-all duration-300 ease-in-out
                    ${location.pathname === '/crypto/wallets' ? 'transition-none m-0 h-full' : 'h-[calc(100%-95px)] mt-95'}
                    ${isMenuActivated ? "mt-[264px]" : ""}`}
                >
                    <Outlet/>
                </main>
                <Nav/>
            </div>
        </div>
    )
}