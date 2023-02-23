import React from "react";
import {useNavigate} from "react-router-dom";

import logo from "../../assets/delivery-img/delivery-login-logo.svg"
import searchIcon from "../../assets/delivery-img/searchIcon.svg"
import headerAvatar from "../../assets/delivery-img/header-avatar.png"
import shopingBag from "../../assets/delivery-img/emptyShopingBagIcon.svg"
import burgerMenu from "../../assets/delivery-img/burgerMenu.svg"



export const Header = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('acc-settings');
    }
    return (
        <header className="fixed justify-center flex w-full h-80 bg-white border-b border-b-neutral-gray-lightest z-10">
            <section className="flex justify-between w-full sm:w-[1140px] px-15px py-18px sm:py-20px ">
                <div className="flex w-full items-center">
                    <img src={logo} className="mr-48px" alt=""/>
                    <div className="relative hidden md:flex w-full max-w-[224px]">
                        <input className="w-full py-10px px-12 rounded-xl font-normal bg-neutral-gray-lightest text-sm" placeholder="Search"/>
                        <img src={searchIcon} className="absolute h-auto w-20 right-12 bottom-10px" alt=""/>
                    </div>
                </div>
                <nav className="flex w-full justify-end items-center text-sm font-bold text-neutral-black whitespace-nowrap">
                    <button className="hidden sm:block mr-28 pl-4" onClick={onClick}>
                        Restaurants
                    </button>
                    <button className="hidden sm:block" onClick={onClick}>
                        Deals
                    </button>
                    <div className="hidden md:block mx-20 w-1px h-full bg-neutral-gray-lightest"/>
                    <button className="hidden sm:block mr-24" onClick={onClick}>
                        My orders
                    </button>
                    <button className="relative min-w-48px min-h-48px p-14px rounded-[16px] bg-primary-light mr-17px" onClick={onClick}>
                        <img src={shopingBag} className="w-full h-full" alt=""/>
                        <p className="absolute -top-4 -right-3px w-20 h-20 p-1px pb-1px rounded-[8px] bg-primary-default text-10px text-white">
                            4
                        </p>
                    </button>
                    <button className="border border-neutral-gray-lightest p-1px rounded-[16px] min-h-52px min-w-52px" onClick={onClick}>
                        <img src={headerAvatar} className="w-full h-full" alt=""/>
                    </button>
                    <div className="block md:hidden bg-neutral-gray-lightest mx-20 min-w-1px h-full "/>
                    <button className="block min-w-fit min-h-fit md:hidden p-14px rounded-[16px] bg-primary-light" onClick={onClick}>
                        <img src={burgerMenu} alt=""/>
                    </button>
                </nav>
            </section>
        </header>
        )
}