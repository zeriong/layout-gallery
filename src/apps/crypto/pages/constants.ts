import intro1 from "../assets/intro-img1.svg";
import intro2 from "../assets/intro-img2.svg";
import intro3 from "../assets/intro-img3.svg";
import rocket from "../assets/rocket.svg";
import credit from "../assets/credit.svg";

import BTCSmall from "../assets/BTCSmall.svg";
import RenSmall from "../assets/RenSmall.svg";
import AdaSmall from "../assets/AdaSmall.svg";
import MftSmall from "../assets/MftSmall.svg";
import ShibSmall from "../assets/ShibSmall.svg";
import AvaxSmall from "../assets/AvaxSmall.svg";
import SolSmall from "../assets/SolSmall.svg";
import SntSmall from "../assets/SntSmall.svg";

import BTCIcon from '../assets/BTCIcon.svg';
import LINKIcon from '../assets/LINKIcon.svg';
import ADAIcon from '../assets/ADAIcon.svg';
import SHIBIcon from '../assets/SHIBIcon.svg';
import MFTIcon from '../assets/MFTIcon.svg';
import RENIcon from '../assets/RENIcon.svg';

import emptyCoinIcon from '../assets/emptyCoinIcon.svg';
import emptyWalletIcon from '../assets/emptyWalletIcon.svg';
import emptyShoppingCarIcon from '../assets/emptyShoppingCarIcon.svg';


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
    upturn: boolean;
    fill: string;
}

interface IcoinLlItem extends Array<IcoinLi> {}

export const coinLi: IcoinLlItem = [
    {
        id: "btc1",
        img: BTCSmall,
        tag: "BTC/BUSD",
        rate: "+0.81%",
        price: "40,059.83",
        upturn: true,
        fill: 'url(#grad1)',
    },
    {
        id: "btc2",
        img: AvaxSmall,
        tag: "AVAX/BUSD",
        rate: "-0.81%",
        price: "2,059.83",
        upturn: false,
        fill: 'url(#grad2)',
    },
    {
        id: "btc3",
        img: SolSmall,
        tag: "SOL/BUSD",
        rate: "+0.81%",
        price: "40,059.83",
        upturn: true,
        fill: 'url(#grad1)',
    },
    {
        id: "btc4",
        img: SntSmall,
        tag: "SNT/BUSD",
        rate: "-0.81%",
        price: "2,059.83",
        upturn: false,
        fill: 'url(#grad2)',
    },
]
export const coinLi2: IcoinLlItem = [
    {
        id: "btc1",
        img: AdaSmall,
        tag: "ADA/BUSD",
        rate: "+0.81%",
        price: "40,059.83",
        upturn: true,
        fill: 'url(#grad1)',
    },
    {
        id: "btc2",
        img: RenSmall,
        tag: "REN/BUSD",
        rate: "-0.81%",
        price: "2,059.83",
        upturn: false,
        fill: 'url(#grad2)',
    },
    {
        id: "btc3",
        img: MftSmall,
        tag: "MFT/BUSD",
        rate: "+0.81%",
        price: "40,059.83",
        upturn: true,
        fill: 'url(#grad1)',
    },
    {
        id: "btc4",
        img: ShibSmall,
        tag: "SHIB/BUSD",
        rate: "-0.81%",
        price: "2,059.83",
        upturn: false,
        fill: 'url(#grad2)',
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
interface IwalletList {
    id:string;
    img:string;
    title:string;
    sub:string;
    coin:string;
    amount:string;
}

interface IwalletLists extends Array<IwalletList> {}

export const walletList: IwalletLists = [
    {
        id: 'btcList',
        img: BTCIcon,
        title: 'Bitcoin',
        sub: 'BTC',
        coin: '32,697.05',
        amount: '$468,554.23',
    },
    {
        id: 'linkList',
        img: LINKIcon,
        title: 'Chainlink',
        sub: 'LINK',
        coin: '32,697.05',
        amount: '$468,554.23',
    },
    {
        id: 'adaList',
        img: ADAIcon,
        title: 'Cardano',
        sub: 'ADA',
        coin: '32,697.05',
        amount: '$468,554.23',
    },
    {
        id: 'shibList',
        img: SHIBIcon,
        title: 'SHIBA INU',
        sub: 'SHIB',
        coin: '32,697.05',
        amount: '$468,554.23',
    },
    {
        id: 'mftList',
        img: MFTIcon,
        title: 'HIFI',
        sub: 'MFT',
        coin: '32,697.05',
        amount: '$468,554.23',
    },
    {
        id: 'renList',
        img: RENIcon,
        title: 'REN',
        sub: 'REN',
        coin: '32,697.05',
        amount: '$468,554.23',
    },
]
interface IactivityBoxList {
    id:string;
    img:string;
    title:string;
}

interface IactivityBoxLists extends Array<IactivityBoxList> {}

export const activityBoxList: IactivityBoxLists = [
    {
        id: 'box1',
        img: emptyCoinIcon,
        title: 'Deposit',
    },
    {
        id: 'box2',
        img: emptyWalletIcon,
        title: 'Withdrawals',
    },
    {
        id: 'box3',
        img: emptyShoppingCarIcon,
        title: 'Buy Order',
    }
]

interface IrecentActivityList {
    id:string;
    log:string;
    title:string;
    date:string;
    amount1:string;
    amount2:string;
    price:string;
    status:string;
}

interface IrecentActivityLists extends Array<IrecentActivityList> {}

export const activityLists: IrecentActivityLists = [
    {
        id:'acti1',
        log:'L/B',
        title:'BTC/BUSD',
        date:'2021-08-02 04:39:26',
        amount1:'0.49975/',
        amount2:'0.49975',
        price:'2652.00',
        status:'Filled',
    },
    {
        id:'acti2',
        log:'L/S',
        title:'BTC/BUSD',
        date:'2021-08-02 04:39:26',
        amount1:'0.49975/',
        amount2:'0.49975',
        price:'2652.00',
        status:'Cancelled',
    },
    {
        id:'acti3',
        log:'L/B',
        title:'BTC/BUSD',
        date:'2021-08-02 04:39:26',
        amount1:'0.49975/',
        amount2:'0.49975',
        price:'2652.00',
        status:'Filled',
    },
    {
        id:'acti4',
        log:'L/S',
        title:'BTC/BUSD',
        date:'2021-08-02 04:39:26',
        amount1:'0.49975/',
        amount2:'0.49975',
        price:'2652.00',
        status:'Cancelled',
    },
]
interface ImarketList {
    id:string;
    img:string;
    title:string;
    sub:string;
    coin:string;
    rate:string;
    fill: string;
    upturn: boolean;
}

interface ImarketLists extends Array<ImarketList> {}

export const marketList: ImarketLists = [
    {
        id: 'btcMarket',
        img: BTCIcon,
        title: 'Bitcoin',
        sub: 'BTC',
        coin: '32,697.05',
        rate: '+0.81%',
        upturn: true,
        fill: 'url(#grad3)',
    },
    {
        id: 'linkMarket',
        img: LINKIcon,
        title: 'Chainlink',
        sub: 'LINK',
        coin: '32,697.05',
        rate: '-0.81%',
        upturn: false,
        fill: 'url(#grad4)',
    },
    {
        id: 'adaMarket',
        img: ADAIcon,
        title: 'Cardano',
        sub: 'ADA',
        coin: '32,697.05',
        rate: '+0.81%',
        upturn: true,
        fill: 'url(#grad3)',
    },
    {
        id: 'shibMarket',
        img: SHIBIcon,
        title: 'SHIBA INU',
        sub: 'SHIB',
        coin: '32,697.05',
        rate: '-0.81%',
        upturn: false,
        fill: 'url(#grad4)',
    },
    {
        id: 'mftMarket',
        img: MFTIcon,
        title: 'HIFI',
        sub: 'MFT',
        coin: '32,697.05',
        rate: '-0.81%',
        upturn: false,
        fill: 'url(#grad4)',
    },
    {
        id: 'renMarket',
        img: RENIcon,
        title: 'REN',
        sub: 'REN',
        coin: '32,697.05',
        rate: '+0.81%',
        upturn: true,
        fill: 'url(#grad3)',
    },
]

interface IchartCandleList {
    id: string;
    open: number;
    close: number;
    high: number;
    low: number;
}
interface IchartCandleLists extends Array<IchartCandleList> {}
export const chartCandleList: IchartCandleLists = [
    {
        id: "D1",
        open: 15,
        close: 80,
        high: 85,
        low: 15,
    },
    {
        id: "D2",
        open: 80,
        close: 120,
        high: 150,
        low: 80,
    },
    {
        id: "D3",
        open: 120,
        close: 100,
        high: 150,
        low: 90,
    },
    {
        id: "D4",
        open: 100,
        close: 60,
        high: 100,
        low: 40,
    },
    {
        id: "D5",
        open: 60,
        close: 40,
        high: 70,
        low: 20,
    },
    {
        id: "D6",
        open: 40,
        close: 100,
        high: 115,
        low: 37,
    },
    {
        id: "D7",
        open: 100,
        close: 150,
        high: 180,
        low: 95,
    },
    {
        id: "D8",
        open: 150,
        close: 180,
        high: 190,
        low: 140,
    },
    {
        id: "D9",
        open: 180,
        close: 160,
        high: 200,
        low: 130,
    },
    {
        id: "D10",
        open: 160,
        close: 150,
        high: 170,
        low: 100,
    },
    {
        id: "D11",
        open: 150,
        close: 120,
        high: 150,
        low: 90,
    },
    {
        id: "D12",
        open: 120,
        close: 80,
        high: 135,
        low: 40,
    },
    {
        id: "D13",
        open: 80,
        close: 90,
        high: 100,
        low: 60,
    },
    {
        id: "D14",
        open: 90,
        close: 95,
        high: 100,
        low: 80,
    },
    {
        id: "D15",
        open: 95,
        close: 70,
        high: 108,
        low: 70,
    },
    {
        id: "D16",
        open: 70,
        close: 120,
        high: 120,
        low: 45,
    },
    {
        id: "D17",
        open: 120,
        close: 130,
        high: 140,
        low: 100,
    },
    {
        id: "D18",
        open: 130,
        close: 150,
        high: 170,
        low: 97,
    },
    {
        id: "D19",
        open: 150,
        close: 100,
        high: 155,
        low: 89,
    },
    {
        id: "D20",
        open: 100,
        close: 140,
        high: 160,
        low: 100,
    },
    {
        id: "D21",
        open: 140,
        close: 160,
        high: 180,
        low: 67,
    },
    {
        id: "D22",
        open: 160,
        close: 50,
        high: 170,
        low: 44,
    },
    {
        id: "D23",
        open: 50,
        close: 100,
        high: 108,
        low: 37,
    },
    {
        id: "D24",
        open: 100,
        close: 90,
        high: 102,
        low: 70,
    },
    {
        id: "D25",
        open: 90,
        close: 60,
        high: 100,
        low: 50,
    },
    {
        id: "D26",
        open: 60,
        close: 150,
        high: 170,
        low: 30,
    },
    {
        id: "D27",
        open: 150,
        close: 200,
        high: 220,
        low: 110,
    },
];

interface IchartVolList {
    id: number;
    volume: number;
}
interface IchartVolLists extends Array<IchartVolList> {}
export const chartVolList : IchartVolLists = [];

const _random = (e: number) => {
    return Math.floor(Math.random() * e)
}

for (let i = 0; i < 27; i++) {
    chartVolList.push({
        id: i,
        volume: _random(66),
    });
}