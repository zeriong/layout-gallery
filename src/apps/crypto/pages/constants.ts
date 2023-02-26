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

interface ItradesTime {
    id: string;
    time: string;
}

interface ItradesTimes extends Array<ItradesTime> {}
export const tradesTimes: ItradesTimes = [
    {
        id: "time1",
        time: "18:00",
    },
    {
        id: "time2",
        time: "19:00",
    },
    {
        id: "time3",
        time: "20:00",
    },
    {
        id: "time4",
        time: "21:00",
    },
    {
        id: "time5",
        time: "21:00",
    },
]
interface ItradesPrice {
    id: string;
    price: string;
}

interface ItradesPrices extends Array<ItradesPrice> {}
export const tradesPrices: ItradesPrices = [
    {
        id: 'price1',
        price: '64,000.00',
    },
    {
        id: 'price2',
        price: '64,000.00',
    },
    {
        id: 'price3',
        price: '64,000.00',
    },
    {
        id: 'price4',
        price: '64,000.00',
    },
    {
        id: 'price5',
        price: '64,000.00',
    },
    {
        id: 'price6',
        price: '64,000.00',
    },
    {
        id: 'price7',
        price: '64,000.00',
    },
    {
        id: 'price8',
        price: '64,000.00',
    },
]
interface ItradesOrder {
    value: string;
    title: string;
}

interface ItradesOrders extends Array<ItradesOrder> {}
export const tradesOrder: ItradesOrders = [
    {
        value: 'openOrder',
        title: 'Open Order (2)',
    },
    {
        value: 'OrderBooks',
        title: 'Order Books',
    },
    {
        value: 'MarketTrades',
        title: 'Market Trades',
    },
]
interface ItradesOrderBoard {
    id:string;
    price: string;
    vol: string;
    opt: string;
    opt2?:string;
}

interface ItradesOrderBoards extends Array<ItradesOrderBoard> {}
export const tradesOrderBoard: ItradesOrderBoards = [
    {
        id:'vol1',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-seafoam-blue'
    },
    {
        id:'vol2',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-seafoam-blue'
    },
    {
        id:'vol3',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-seafoam-blue'
    },
    {
        id:'vol4',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-seafoam-blue'
    },
    {
        id:'vol5',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-seafoam-blue'
    },
    {
        id:'vol6',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-seafoam-blue'
    },
    {
        id:'vol7',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-seafoam-blue'
    },
    {
        id:'vol8',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-seafoam-blue'
    },
    {
        id:'vol9',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-seafoam-blue'
    },
    {
        id:'vol10',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-seafoam-blue'
    },
]
export const tradesOrderBoard2: ItradesOrderBoards = [
    {
        id:'vol1',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-pale-red'
    },
    {
        id:'vol2',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-pale-red'
    },
    {
        id:'vol3',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-pale-red'
    },
    {
        id:'vol4',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-pale-red'
    },
    {
        id:'vol5',
        price:'`',
        vol:'`',
        opt: 'text-transparent select-none',
        opt2: 'text-transparent select-none',
    },
    {
        id:'vol6',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-pale-red'
    },
    {
        id:'vol7',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-pale-red'
    },
    {
        id:'vol8',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-pale-red'
    },
    {
        id:'vol9',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-pale-red'
    },
    {
        id:'vol10',
        price:'27,486.39',
        vol:'2485.27',
        opt: 'text-crypto-pale-red'
    },
]