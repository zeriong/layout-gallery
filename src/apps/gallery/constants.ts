import deliveryPreview from "./assets/delivery-preview.png";
import cryptoPreview from "./assets/cryptoPreview.png";

interface IgalleryItem {
    id: string;
    name: string;
    desc: string;
    img: string;
    path: string;
    imgClass?: string
    figureClass?: string;
    template?: string;
}
interface IgalleryItems extends Array<IgalleryItem> {}

export const galleryItem:IgalleryItems = [
    {
        id: "delivery",
        path: "/food-delivery/signIn",
        name: "Food Delivery",
        desc: "피그마 디자인템플릿을 활용, 제플린과 연동하여 데스크탑과 모바일에 대응하는 반응형 개발 숙달",
        img: deliveryPreview,
        imgClass: "",
        figureClass: "bg-white h-[195px] sm:h-[225px]",
        template: "https://www.uxcrush.com/figma-delivery-ui-templates/",
    },
    {
        id: "crypto",
        path: "/crypto/intro",
        name: "Crypto App",
        desc: "피그마 디자인템플릿을 활용, 제플린과 연동하여 코인거래소 모바일앱 UI개발을 통해 svg를 사용한 데이터시각화 개발능력 숙달",
        img: cryptoPreview,
        imgClass: "bg-white rounded-2xl shadow-2xl",
        figureClass: "bg-crypto-cool-grey py-1 h-[195px] sm:h-[225px]",
        template: "https://www.uxcrush.com/free-figma-crypto-mobile-ui-kit/",
    },
];