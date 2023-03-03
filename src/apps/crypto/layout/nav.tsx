import React from "react";
import {cryptoNav} from "./constants";
import {NavLink} from "react-router-dom";

const NavLinkItem = (props: {img:string, title:string, path:string, actImg?:string}) => {
    return (
        <NavLink to={props.path} end className="flex flex-col items-center justify-center">
            {({ isActive }) => {
                return (
                    <>
                        <figure className="relative w-44 h-44">
                            <img src={isActive ? props.actImg : props.img} className={`absolute ${isActive ? "top-5" : ""}`} alt=""/>
                        </figure>
                        <h1 className={`font-[400] text-12 ${isActive ? "text-crypto-silver" : "text-crypto-warm-grey"}`}>
                            {props.title}
                        </h1>
                    </>
                )
            }}
        </NavLink>
    )
}

export const Nav = () => {
    return (
        <nav className="w-full max-w-[420px] fixed z-30 bottom-24 px-24">
            <ul className="grid grid-cols-5 gap-30px px-17 py-12 rounded-[20px] bg-crypto-dark shadow-[0_12px_50px_rgba(22,28,34,0.5)]">
                {
                    cryptoNav.map((val) => {
                        return (
                            <NavLinkItem key={val.id} img={val.img} title={val.title} path={val.path} actImg={val.actImg}/>
                        )
                    })
                }
            </ul>
        </nav>
    )
}