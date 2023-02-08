import React, {useState} from "react";
import deliveryPreview from '../styles/preview.png';
import ready from '../styles/ready.png';
import {useNavigate} from "react-router-dom";
interface Iitem {
    name: string;
    desc: string;
    img: string;
    path: string;
}
interface Iitems extends Array<Iitem> {}

const item:Iitems = [
    {
        name: "Food Delivery",
        desc: "음식배달 웹페이지 레이아웃 레퍼런스이다. 제플린을 적극 사용하여 만든 레이아웃이다.",
        img: deliveryPreview,
        path: "/food-delivery-login",
    },
    {
        name: "FaceBook",
        desc: "페이스북을 클론한 것이다.",
        img: ready,
        path: "/",
    },
    {
        name: "FaceBook",
        desc: "페이스북을 클론한 것이다.",
        img: ready,
        path: "/",
    },
    {
        name: "FaceBook",
        desc: "페이스북을 클론한 것이다.",
        img: ready,
        path: "/",
    },
];
export const itemLength: number = item.length
const ListDiv = (props: { i:number, val: {img: string, name: string, desc: string, path:string} }) => {
    const [onMouse, setOnMouse] = useState<boolean>(false);
    const navigate = useNavigate();
    const onClick = () => {
        navigate(props.val.path);
    }
    return (
        <li
            key={props.i}
            className="w-[382px] first:mt-6 md:first:mt-0 mx-auto md:w-full h-[300px] md:h-[450px] transition-all duration-200 shadow-lg cursor-pointer box-border"
            onMouseEnter={() => setOnMouse(true)}
            onMouseLeave={() => setOnMouse(false)}
            onClick={onClick}
        >
            <div
                className={
                `transition-all duration-300 w-full h-full bg-white rounded-lg overflow-hidden justify-center text-white
                ${onMouse ? "bg-white text-black" : "bg-primary-default"}`
            }>
                <img src={props.val.img} alt={""} className={`h-4/6 w-full`}/>
                <section className="p-2 text-center md:p-4 h-2/6 overflow-hidden relative flex flex-col md:text-start md:items-start justify-center items-center">
                    <div className="relative text-[14px] md:text-xl font-extrabold mb-2 md:mb-4 px-11 flex items-center">
                        <div className="absolute flex justify-center items-center bg-gray-200 w-3 h-3 md:w-4 md:h-4 rounded-full left-7 md:left-5">
                            <div
                                className={`absolute w-2 h-2 md:w-3 md:h-3 bg-gray-300 rounded-full
                            ${onMouse ? "bg-green-500" : ""}`
                                }/>
                            <div
                                className={`m-auto w-2 h-2 md:w-3 md:h-3 bg-gray-300 rounded-full
                            ${onMouse ? "animate-ping bg-green-500" : ""}`
                                }/>
                        </div>
                        {props.val.name}
                    </div>
                    <h2 className="text-[10px] md:text-base h-fit line-clamp-3 px-8 md:px-5 mb-2 md:mb-4">
                        {props.val.desc}
                    </h2>
                </section>
            </div>
        </li>
    )
}
export const GalleryItem = () => {
    return (
        <>
            {
                item.map((val,i,arr) => {
                    return (
                        <ListDiv key={i} i={i} val={val}/>
                    )
                })
            }
        </>
    )
}