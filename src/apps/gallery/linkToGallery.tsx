import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

export const LinkToGallery = () => {
    const el = useRef<HTMLDivElement>(null);
    const [isMsgBox, setIsMsgBox] = useState(false);
    const timer = () => {
        setIsMsgBox(true);
        setTimeout(()=>{
            setIsMsgBox(false);
            setTimeout(()=>{
                if (el.current) el.current.style.display = "none"
            },800);
        },4000);
    }
    const stop = () => {
        setIsMsgBox(false);
        setTimeout(()=>{
            if (el.current) el.current.style.display = "none"
        },800);
    }
    useEffect(()=>{
        timer();
    },[])
    return (
        <>
            <div
                className={`fixed bottom-60 right-50 transition-all duration-700 bg-white px-30 py-15 rounded-lg shadow-[0_5px_20px_rgba(22,28,34,0.5)] animate-bounce z-[150] select-none
                ${isMsgBox ? "opacity-100" : "opacity-0"}`}
                ref={el}
                onClick={stop}
            >
                <div className="text-gall-gray-300 font-bold">
                    갤러리 화면으로 돌아거려면 <br/>
                    <span className="font-extrabold text-20">
                        "Link to Gallery"
                    </span>
                    버튼을 눌러주세요!
                </div>
                <p className="absolute -bottom-15 right-5 msg-box w-50 h-50 bg-white"/>
            </div>
            <nav className="fixed bottom-3 right-3 z-[200] bg-orange-500 text-white text-15 transition-all duration-300 px-7 py-2 font-semibold rounded-lg">
                <Link to="/">
                    Link to Gallery
                </Link>
            </nav>
        </>

    )
}