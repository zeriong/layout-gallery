import depositIcon from "../assets/depositIcon.svg";
import referralIcon from "../assets/referralIcon.svg";
import gridTradingIcon from "../assets/gridTradingIcon.svg";
import marginIcon from "../assets/marginIcon.svg";
import launchpadIcon from "../assets/starStick.svg";
import savingIcon from "../assets/savingIcon.svg";
import exchangeIcon from "../assets/exchangeIcon.svg";
import moreIcon from "../assets/moreIcon.svg";
import navHomeActive from "../assets/navHomeActive.svg";
import navHome from "../assets/navHome.svg";
import navMarket from "../assets/navMarket.svg";
import navMarketActive from "../assets/navMarketActive.svg";
import navTrades from "../assets/navTrades.svg";
import navTradesActive from "../assets/navTradesActive.svg";
import navActivity from "../assets/navActivity.svg";
import navActivityActive from "../assets/navActivityActive.svg";
import navWallet from "../assets/navWallet.svg";
import navWalletActive from "../assets/navWalletActive.svg";


interface IcryptoMenuItem {
    id: string;
    img: string;
    title: string;
    option?: string;
    path: string;
    actImg?:string;
}

interface IcryptoMenuItems extends Array<IcryptoMenuItem> {}

export const cryptoMenu1:IcryptoMenuItems = [
    {
        id: "cryptoMenu1",
        img: depositIcon,
        title: "Deposit",
        path: 'wallets',
    },
    {
        id: "cryptoMenu2",
        img: referralIcon,
        title: "Referral",
        path: 'trades',
    },
    {
        id: "cryptoMenu3",
        img: gridTradingIcon,
        title: "Grid Trading",
        path: 'trades',
    },
    {
        id: "cryptoMenu4",
        img: marginIcon,
        title: "Margin",
        option: "border-r-0",
        path: 'trades',
    },
]
export const cryptoMenu2:IcryptoMenuItems = [
    {
        id: "cryptoMenu5",
        img: launchpadIcon,
        title: "Launchpad",
        path: 'trades',
    },
    {
        id: "cryptoMenu6",
        img: savingIcon,
        title: "Savings",
        path: 'wallets',
    },
    {
        id: "cryptoMenu7",
        img: exchangeIcon,
        title: "Liquid Swap",
        path: 'wallets',
    },
    {
        id: "cryptoMenu8",
        img: moreIcon,
        title: "More",
        option: "border-r-0",
        path: 'trades',
    },
]

export const cryptoNav:IcryptoMenuItems = [
    {
        id: "cryptoNav1",
        actImg: navHomeActive,
        img: navHome,
        title: "Home",
        path: '/crypto',
    },
    {
        id: "cryptoNav2",
        actImg: navMarketActive,
        img: navMarket,
        title: "Markets",
        path: 'markets',
    },
    {
        id: "cryptoNav3",
        actImg: navTradesActive,
        img: navTrades,
        title: "Trades",
        path: 'trades',
    },
    {
        id: "cryptoNav4",
        actImg: navActivityActive,
        img: navActivity,
        title: "Activity",
        path: 'activity',
    },
    {
        id: "cryptoNav5",
        actImg: navWalletActive,
        img: navWallet,
        title: "Wallets",
        path: 'wallets',
    },
]