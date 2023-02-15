import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const GalleryItems = (props: {
    i: number,
    val: {
        img: string,
        name: string,
        desc: string,
        path: string,
        imgClass?:string,
        figureClass?:string,
    }}) => {
    const [onMouse, setOnMouse] = useState<boolean>(false);
    const navigate = useNavigate();
    const onClick = () => {
        navigate(props.val.path);
    }
    return (
        <li
            key={props.i}
            className="w-full mx-auto h-[300px] sm:h-[450px] transition-all duration-300 shadow-lg cursor-pointer box-border overflow-hidden rounded-3xl"
            onMouseEnter={() => setOnMouse(true)}
            onMouseLeave={() => setOnMouse(false)}
            onClick={onClick}
        >
            <figure className={`flex justify-center h-4/6 w-full ${props.val.figureClass}`}>
                <img src={props.val.img} className={`h-full w-auto ${props.val.imgClass}`} alt=""/>
            </figure>
            <article
                className={
                    `p-2 text-center sm:p-4 h-full overflow-hidden relative flex flex-col sm:text-start sm:items-start justify-center sm:justify-start items-center transition-all duration-300
                    ${onMouse ? "bg-white text-black" : "bg-crypto-dark text-white"}`}>
                <div className="relative text-[14px] sm:text-xl font-extrabold mb-2 sm:mb-4 px-11 flex items-center">
                    <div className="absolute flex justify-center items-center bg-gray-200 w-3 h-3 sm:w-4 sm:h-4 rounded-full left-7 sm:left-5">
                        <div className={`absolute w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full ${onMouse ? "bg-green-500" : ""}`}/>
                        <div className={`m-auto w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full ${onMouse ? "animate-ping bg-green-500" : ""}`}/>
                    </div>
                    <h1>
                        {props.val.name}
                    </h1>
                </div>
                <p className="text-sm sm:text-base h-fit line-clamp-2 sm:line-clamp-3 px-8 sm:px-5 mb-2 sm:mb-0">
                    {props.val.desc}
                </p>
            </article>
        </li>
    )
}