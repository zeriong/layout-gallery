import React from "react";
import {useNavigate} from "react-router-dom";



export const Header = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('acc-settings');
    }
    return (
        <header className="fixed justify-center flex w-full h-20 bg-white border-b border-b-neutral-gray-lightest z-10">
            header
        </header>
    )
}