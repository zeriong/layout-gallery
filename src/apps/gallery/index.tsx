import React from "react";
import {Link, useNavigate} from "react-router-dom";
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
        template?:string,
    }}) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(props.val.path);
    }
    return (
        <li key={props.val.id} className="w-full">
            <div className="w-full mx-auto transition-all duration-300 box-border overflow-hidden rounded-2xl select-none">
                <figure className={`cursor-pointer flex justify-center w-full ${props.val.figureClass}`} onClick={onClick}>
                    <img src={props.val.img} className={`h-full w-auto ${props.val.imgClass}`} alt=""/>
                </figure>
                <article
                    className={
                        `p-8 text-start sm:p-20 h-auto overflow-hidden relative flex flex-col items-start transition-all duration-300
                    bg-gall-gray-200
                `}>
                    <div className="relative w-full sm:text-20 mb-7 sm:mb-9" >
                        <h1 className="w-fit h-fit text-20 sm:text-24 text-gall-cate-gray cursor-pointer" onClick={onClick}>
                            {props.val.name}
                        </h1>
                    </div>
                    <div className="flex m-sm:justify-center w-full h-full overflow-auto mb-8 sm:mb-0">
                        <h2 className="select-text text-14 text-gall-desc-gray">
                            {props.val.desc}
                        </h2>
                    </div>
                    <div className="p-5 font-[300] mt-16 sm:mt-24">
                        <p className="text-14 sm:text-17 text-gall-temple-gray mb-0 sm:mb-3">
                            · Design Template
                        </p>
                        <Link
                            to={`${props.val.template}`}
                            target="_blank"
                            className="text-gall-link-blue hover:text-white text-14 sm:text-16"
                        >
                            figma food delivery 템플릿 링크
                        </Link>
                    </div>
                </article>
            </div>
        </li>
    )
}

export const GalleryPage = () => {
    return (
        <div className="gallery-font h-full min-h-full min-w-full bg-gall-gray-300">
            <header className="fixed flex items-center z-50 bg-gall-gray-100 w-full h-70 sm:h-80 max-m-sm:px-16 px-30">
                <h1 className="text-gall-header-title-gray text-20 sm:text-24 select-none">
                    Layout Gallery
                </h1>
            </header>
            <main className="relative w-full min-h-full max-m-sm:px-16 px-24 sm:px-20 sm:w-[1150px] mx-auto pt-70 sm:pt-80 bg-gall-gray-300">
                <div className="w-full pt-24 sm:pt-44 pb-16 sm:pb-20 border-b-2 border-gall-gray-100">
                    <h1 className="max-m-sm:text-14 sm:text-18 text-gall-title-gray select-none">
                        프론트를 구성하는 다양한 요소의<br className="max-m-sm:block hidden"/> 개발 경험을 담은 갤러리입니다.
                    </h1>
                </div>
                <ul className="transition-all duration-300 relative w-full grid grid-rows-1 sm:grid-cols-3 sm:justify-start gap-24 sm:gap-44px mt-36 pb-30">
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