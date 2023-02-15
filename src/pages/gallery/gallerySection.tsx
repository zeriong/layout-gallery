import React from "react";
import deliveryPreview from "../../assets/delivery-img/delivery-preview.png";
import cryptoPreview from "../../assets/crypto-mobile/cryptoPreview.png";
import {GalleryItems} from "../../components/galleryItem";
interface Iitem {
    name: string;
    desc: string;
    img: string;
    path: string;
    imgClass?: string
    figureClass?: string;
}
interface Iitems extends Array<Iitem> {}

const item:Iitems = [
    {
        path: "/food-delivery-login",
        name: "Food Delivery",
        desc: "음식배달 웹페이지 레이아웃 레퍼런스이다. 제플린을 적극 사용하여 만든 레이아웃이다.",
        img: deliveryPreview,
    },
    {
        path: "/crypto-intro",
        name: "Crypto App",
        desc: "코인거래소 모바일 앱 레이아웃 레퍼런스이다. 제플린을 적극 사용하여 만든 레이아웃이다.",
        img: cryptoPreview,
        imgClass: "bg-white rounded-2xl shadow-2xl",
        figureClass: "bg-crypto-cool-grey py-1",
    },
];
export const itemLength: number = item.length
export const GallerySection = () => {
    return (
        <ul className="transition-all duration-300 relative w-full grid grid-rows-1 sm:grid-cols-3 sm:justify-start flex-row gap-6 sm:gap-[30px]">
            {
                item.map((val,i) => {
                    return (
                        <GalleryItems key={i} i={i} val={val}/>
                    )
                })
            }
        </ul>
    )
}