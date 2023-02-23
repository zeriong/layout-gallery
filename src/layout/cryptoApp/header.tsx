import React from "react";
import {useNavigate} from "react-router-dom";

import noticeIcon from "../../assets/crypto-mobile/noticeIcon.svg";
import scanIcon from "../../assets/crypto-mobile/scanIcon.svg";
import searchIcon from "../../assets/crypto-mobile/searchIcon.svg";
import profileIcon from "../../assets/crypto-mobile/profileIcon.svg";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="fixed justify-center flex w-full max-w-[420px] h-95px bg-white border-b border-b-neutral-gray-lightest z-10">
            <div className="fixed"></div>
            <div className="flex justify-between w-full">
                <figure>
                    <img src={profileIcon} alt=""/>
                </figure>
                <div>
                    <button>
                        <img src={searchIcon} alt=""/>
                    </button>
                    <button>
                        <img src={scanIcon} alt=""/>
                    </button>
                    <button>
                        <img src={noticeIcon} alt=""/>
                    </button>
                </div>
            </div>
        </header>
    )
}