import intro1 from "../assets/intro-img1.svg";
import intro2 from "../assets/intro-img2.svg";
import intro3 from "../assets/intro-img3.svg";
import rocket from "../assets/rocket.svg";
import credit from "../assets/credit.svg";
import BTCSmall from "../assets/BTCSmall.svg";

interface IintroItem {
    id: string;
    img: string;
    title: string;
    summary: string;
}

interface IintroItems extends Array<IintroItem> {}

export const cryptoIntroItems:IintroItems = [
    {
        id: "cryptoIntro1",
        img: intro1,
        title: "Trade anytime anywhere",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
        id: "cryptoIntro2",
        img: intro2,
        title: "Save and invest at the same time",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
        id: "cryptoIntro3",
        img: intro3,
        title: "Transact fast and easy",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
]

interface IcryptoHome {
    id: string;
    img: string;
    title: string;
    summary: string;
    opt?: string;
}

interface IcryptoHomeItem extends Array<IcryptoHome> {}

export const cryptoHomeItem: IcryptoHomeItem = [
    {
        id: "homeItem1",
        title: "P2P Trading",
        img: rocket,
        summary: "Bank Trasfer, Paypal Revolut...",
        opt: "absolute -bottom-8 -right-8",
    },
    {
        id: "homeItem2",
        title: "Credit/Debit Card",
        img: credit,
        summary: "Visa, Mastercard",
        opt: "absolute -right-4 bottom-2",
    },
]

interface IcoinLi {
    id: string;
    img: string;
    tag: string;
    rate: string;
    price: string;
    opt?: string;
}

interface IcoinLlItem extends Array<IcoinLi> {}

export const coinLi: IcoinLlItem = [
    {
        id: "btc1",
        img: BTCSmall,
        tag: "BTC/BUSD",
        rate: "+0.81%",
        price: "40,059.83",
    },
    {
        id: "btc2",
        img: BTCSmall,
        tag: "BTC/BUSD",
        rate: "+0.81%",
        price: "40,059.83",
    },
    {
        id: "btc3",
        img: BTCSmall,
        tag: "BTC/BUSD",
        rate: "+0.81%",
        price: "40,059.83",
    },
    {
        id: "btc4",
        img: BTCSmall,
        tag: "BTC/BUSD",
        rate: "+0.81%",
        price: "40,059.83",
    },
]
export const coinLi2: IcoinLlItem = [
    {
        id: "btc1",
        img: BTCSmall,
        tag: "BTC/BUSD",
        rate: "+0.81%",
        price: "40,059.83",
    },
    {
        id: "btc2",
        img: BTCSmall,
        tag: "BTC/BUSD",
        rate: "+0.81%",
        price: "40,059.83",
    },
    {
        id: "btc3",
        img: BTCSmall,
        tag: "BTC/BUSD",
        rate: "+0.81%",
        price: "40,059.83",
    },
    {
        id: "btc4",
        img: BTCSmall,
        tag: "BTC/BUSD",
        rate: "+0.81%",
        price: "40,059.83",
    },
]