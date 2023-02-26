import accountIcon from "../assets/accountIcon.svg";
import addressIcon from "../assets/addressIcon.svg";
import paymentIcon from "../assets/paymentIcon.svg";
import securityIcon from "../assets/securityIcon.svg";
import introDessert from "../assets/dessert.png";
import introBurger from "../assets/burger.png";
import pizzaI from "../assets/pizza-e.svg";
import burgerI from "../assets/burger-e.svg";
import BBQI from "../assets/meat-e.svg";
import sushiI from "../assets/sushi-e.svg";
import veganI from "../assets/broccoli-e.svg";
import dessertI from "../assets/cake-e.svg";
import RoyalSushi from "../assets/component-img-1.png";
import BurgersPizza from "../assets/component-img-2.png";
import NinjaSushi from "../assets/component-img-3.png";
import RollHouse from "../assets/component-img-4.png";
import KimbobHeaven from "../assets/component-img-5.png";
import USARolls from "../assets/component-img-6.png";



/**-------------------------------------  accSettings.tsx constants ------------------------------------*/
interface IfoodDeliverySetting {
    id: string;
    img?: string;
    title: string;
    desc?: string;
    i?: number;
}
interface IfoodDeliverySettings extends Array<IfoodDeliverySetting> {}

export const foodDeliveryCheckList: IfoodDeliverySettings = [
    {
        id: "New deals",
        title: "New deals",
    },
    {
        id: "Password changes",
        title: "Password changes",
    },
    {
        id: "New restaurants",
        title: "New restaurants",
    },
    {
        id: "Special offers",
        title: "Special offers",
    },
    {
        id: "Order statuses",
        title: "Order statuses",
    },
    {
        id: "Newsletter",
        title: "Newsletter",
    },
];

export const foodDeliveryInputList: IfoodDeliverySettings = [
    {
        id: "input-first",
        title: "First name",
        desc: "Jane",
    },
    {
        id: "input-last",
        title: "Last name",
        desc: "Robertson",
    },
    {
        id: "input-email",
        title: "Email",
        desc: "jane.robertson@example.com",
    },
    {
        id: "input-phone",
        title: "Phone number",
        desc: "(217) 555-0113",
    },
];

export const foodDeliverySettingList: IfoodDeliverySettings = [
    {
        id: "set-account",
        img: accountIcon,
        title: "Account",
        desc: "Personal information",
    },
    {
        id: "set-address",
        img: addressIcon,
        title: "Address",
        desc: "Shippings addresses",
    },
    {
        id: "set-payment",
        img: paymentIcon,
        title: "Payment method",
        desc: "Connected credit cards",
    },
    {
        id: "set-security",
        img: securityIcon,
        title: "Security",
        desc: "Password, 2FA",
    },
];



/**------------------------------------------  index.tsx constants ----------------------------------------*/
interface IdeliveryMainContent {
    id: string;
    title: string;
    food?: string;
    img: string;
    tagIcon?: string[];
    waiting?: string;
    minAmount?: string;
    shopingBag?: number;
    featured?: boolean;
    summary?: string;
    bg?: string;
    text?: string;
}
interface IdeliveryMainContents extends Array<IdeliveryMainContent> {}

export const deliveryIntroEvent:IdeliveryMainContents = [
    {
        id: "e1",
        title: "20% OFF",
        food: "All desserts",
        img: introDessert,
        summary: "Deserty",
        bg: "bg-primary-light",
        text: "text-primary-default",
    },
    {
        id: "e2",
        title: "50% OFF",
        food: "Big Burgers",
        img: introBurger,
        summary: "Fooddies",
        bg: "bg-secondary-light",
        text: "text-secondary-default",
    },
];

export const deliveryFoodList:IdeliveryMainContents = [
    {
        id: "FL1",
        title: "pizza",
        img:pizzaI,
    },
    {
        id: "FL2",
        title: "Burger",
        img:burgerI,
    },
    {
        id: "FL3",
        title: "BBQ",
        img:BBQI,
    },
    {
        id: "FL4",
        title: "Sushi",
        img:sushiI,
    },
    {
        id: "FL5",
        title: "Vegan",
        img:veganI,
    },
    {
        id: "FL6",
        title: "Desserts",
        img:dessertI,
    },
];

export const deliveryRestaurantList:IdeliveryMainContents = [
    {
        id: "RTR1",
        title: "Royal Sushi House",
        img:RoyalSushi,
        waiting: "30~40",
        minAmount: "$32",
        tagIcon: [sushiI],
        shopingBag: 0,
        featured: true,
    },
    {
        id: "RTR2",
        title: "Burgers & Pizza",
        img: BurgersPizza,
        waiting: "40~60",
        minAmount: "$24",
        tagIcon: [burgerI,pizzaI],
        shopingBag: 2,
        featured: true,
    },
    {
        id: "RTR3",
        title: "Ninja sushi",
        img: NinjaSushi,
        waiting: "20~40",
        minAmount: "$40",
        tagIcon: [sushiI],
        shopingBag: 0,
    },
    {
        id: "RTR4",
        title: "Roll House",
        img: RollHouse,
        waiting: "30~40",
        minAmount: "$40",
        tagIcon: [sushiI],
        shopingBag: 0,
    },
    {
        id: "RTR5",
        title: "Sushi Kimbob Heaven",
        img: KimbobHeaven,
        waiting: "20~30",
        minAmount: "$100",
        tagIcon: [sushiI],
        shopingBag: 0,
    },
    {
        id: "RTR6",
        title: "USA Rolls",
        img: USARolls,
        waiting: "30~40",
        minAmount: "$15",
        tagIcon: [sushiI],
        shopingBag: 0,
    },
];



/**----------------------------------------  loginHome.tsx constants ---------------------------------------*/
export interface IloginHomeUser {
    gender: string;
    name: string;
    star: number;
    date: string;
    review: string;
    like: string;
    bad: string;
}

interface IloginHomeUsers extends Array<IloginHomeUser> {}
export const loginHomeUserList: IloginHomeUsers = [
    {
        gender: "woman",
        name: "Savannah Miles",
        star: 5,
        date: "10 days ago",
        review: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
        like: "14",
        bad: "4",
    },
    {
        gender: "man",
        name: "Jacob Jones",
        star: 4,
        date: "10 days ago",
        review: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
        like: "14",
        bad: "4",
    },
]