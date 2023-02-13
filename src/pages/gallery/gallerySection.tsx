import React from "react";
import deliveryPreview from "../../assets/delivery-img/delivery-preview.png";
import {GalleryItems} from "../../components/galleryItem";
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
];
export const itemLength: number = item.length
export const GallerySection = () => {
    return (
        <ul className="transition-all duration-300 relative w-full grid grid-rows-1 sm:grid-cols-3 sm:justify-start flex-row gap-6 sm:gap-[30px]">
            {
                item.map((val,i,arr) => {
                    return (
                        <GalleryItems key={i} i={i} val={val}/>
                    )
                })
            }
        </ul>
    )
}