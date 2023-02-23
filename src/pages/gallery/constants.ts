import deliveryPreview from "../../assets/delivery-img/delivery-preview.png";
import cryptoPreview from "../../assets/crypto-mobile/cryptoPreview.png";

interface IgalleryItem {
    id: string;
    name: string;
    desc: string;
    img: string;
    path: string;
    imgClass?: string
    figureClass?: string;
}
interface IgalleryItems extends Array<IgalleryItem> {}

export const galleryItem:IgalleryItems = [
    {
        id: "delivery",
        path: "/food-delivery-login",
        name: "Food Delivery",
        desc: "음식배달 웹페이지 레이아웃 레퍼런스이다. 제플린을 적극 사용하여 만든 레이아웃이다.",
        img: deliveryPreview,
    },
    {
        id: "crypto",
        path: "/crypto/intro",
        name: "Crypto App",
        desc: "코인거래소 모바일 앱 레이아웃 레퍼런스이다. 제플린을 적극 사용하여 만든 레이아웃이다.",
        img: cryptoPreview,
        imgClass: "bg-white rounded-2xl shadow-2xl",
        figureClass: "bg-crypto-cool-grey py-1",
    },
];