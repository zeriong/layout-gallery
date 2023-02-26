import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState, store} from "../../../store";
import {MENU_SWITCH} from "../../../store/slices/headerHandler.slice";

import noticeIcon from "../assets/noticeIcon.svg";
import scanIcon from "../assets/scanIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import profileIcon from "../assets/profileIcon.svg";
import buyIcon from "../assets/buyIcon.svg";
import starIcon from "../assets/starIcon.svg";
import candlesIcon from "../assets/candlesIcon.svg";

import {cryptoMenu1, cryptoMenu2} from "./constants";
import {useLabels} from "@headlessui/react/dist/components/label/label";

const MenuCreator = (props: {option?:string, path:string, img:string, title:string}) => {
    const menuHandler = () => store.dispatch(MENU_SWITCH());
    const navigate = useNavigate()

    return (
        <li
            className={`cursor-pointer flex flex-col items-center w-91 bg-crypto-dark-two pt-8 pb-14 last:border-0 border-r border-crypto-dark ${props.option}`}
            onClick={() => {
                navigate(props.path);
                menuHandler();
            }}
        >
            <figure className="relative w-44 h-44">
                <img src={props.img} className="absolute left-1/2 -translate-x-1/2 top-3" alt=""/>
            </figure>
            <h1 className="text-12 font-normal text-crypto-silver">
                {props.title}
            </h1>
        </li>
    )
}

export const Header = () => {
    const isMenuActivated = useSelector((state:RootState) => state.menuHandler.showMenu);
    const menuHandler = () => store.dispatch(MENU_SWITCH());
    const [isShadow, setIsShadow] = useState(true);
    const location = useLocation();

    return (
        <div className="fixed justify-center flex w-full max-w-[420px] h-auto z-10">
            <header
                className={`fixed justify-center flex w-full max-w-[420px] h-95px bg-crypto-dark z-20 transition-all duration-300
                ${location.pathname === '/crypto' ? "shadow-none" : "shadow-[0_12px_16px_rgba(22,28,34,0.5)]"}
                `}>
                <div className="flex justify-between w-full h-auto mt-41 pl-24 pr-14">
                    <figure onClick={menuHandler} className="cursor-pointer">
                        <img src={profileIcon} alt=""/>
                    </figure>
                    <div>
                        {
                            location.pathname === '/crypto/trades' ? (
                                <>
                                    <button>
                                        <img src={candlesIcon} alt=""/>
                                    </button>
                                    <button>
                                        <img src={buyIcon} alt=""/>
                                    </button>
                                    <button>
                                        <img src={starIcon} alt=""/>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button>
                                        <img src={searchIcon} alt=""/>
                                    </button>
                                    <button>
                                        <img src={scanIcon} alt=""/>
                                    </button>
                                    <button>
                                        <img src={noticeIcon} alt=""/>
                                    </button>
                                </>
                            )
                        }
                    </div>
                </div>
            </header>
            <section
                className={`absolute transition-all duration-300 w-full bg-crypto-dark z-10 top-95 overflow-hidden
                ${isMenuActivated ? "h-169" : "h-[0vh]"}`}
            >
                    <div className="grid grid-cols-1 gap-1px bg-crypto-dark">
                        <div className="w-full px-16 bg-crypto-dark-two">
                            <ul className="w-auto h-full grid grid-cols-4 gap-1px m-auto">
                                {
                                    cryptoMenu1.map((val) => {
                                        return (
                                            <MenuCreator
                                                key={val.id}
                                                title={val.title}
                                                img={val.img}
                                                option={val.option}
                                                path={val.path}
                                            />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="w-full px-16 bg-crypto-dark-two">
                            <ul className="w-auto h-full grid grid-cols-4 gap-1px m-auto">
                                {
                                    cryptoMenu2.map((val) => {
                                        return (
                                            <MenuCreator
                                                key={val.id}
                                                title={val.title}
                                                img={val.img}
                                                option={val.option}
                                                path={val.path}
                                            />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
            </section>
        </div>
    )
}