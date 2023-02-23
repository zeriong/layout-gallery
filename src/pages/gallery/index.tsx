import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {galleryItem} from "./constants";

export const GalleryItems = (props: {
    val: {
        id: string,
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
            key={props.val.id}
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
                    `p-8 text-center sm:p-16 h-auto min-h-full overflow-hidden relative flex flex-col sm:text-start items-center sm:justify-start transition-all duration-300
                    ${onMouse ? "bg-white text-black" : "bg-crypto-dark text-white"}`}>
                <div className="relative text-14px sm:text-20px font-extrabold mb-8 sm:mb-16 px-44 flex items-center">
                    <div className="absolute flex justify-center items-center bg-gray-200 w-12 h-12 sm:w-16 sm:h-16 rounded-full left-28 sm:left-20">
                        <div className={`absolute w-8 h-8 sm:w-12 sm:h-12 bg-gray-300 rounded-full ${onMouse ? "bg-green-500" : ""}`}/>
                        <div className={`m-auto w-8 h-8 sm:w-12 sm:h-12 bg-gray-300 rounded-full ${onMouse ? "animate-ping bg-green-500" : ""}`}/>
                    </div>
                    <h1>
                        {props.val.name}
                    </h1>
                </div>
                <p className="text-14 sm:text-16 h-fit line-clamp-2 sm:line-clamp-3 px-8 sm:px-20 mb-8 sm:mb-0">
                    {props.val.desc}
                </p>
            </article>
        </li>
    )
}

export const GalleryPage = () => {
    const itemLength: number = galleryItem.length
    return (
        <div className="h-full w-full bg-landingBack overflow-auto custom-scroll">
            <header className="block bg-landingBack w-full flex justify-center">
                <section className="w-full max-w-pageMax px-20 pt-20">
                    <h1 className="font-bold text-30 sm:text-36 pb-16">Layout Gallery</h1>
                    <h2 className="pb-16 font-bold sm:text-18">{`📚 등록된 페이지${itemLength}개`}</h2>
                </section>
            </header>
            <main className="relative h-full w-full px-24 sm:px-20 sm:w-pageMax m-auto">
                <ul className="transition-all duration-300 relative w-full grid grid-rows-1 sm:grid-cols-3 sm:justify-start flex-row gap-6 sm:gap-30px">
                    {
                        galleryItem.map((val) => {
                            return (
                                <GalleryItems key={val.id} val={val}/>
                            )
                        })
                    }
                </ul>
            </main>
        </div>
    )
}