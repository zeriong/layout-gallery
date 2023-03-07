import React, {useState} from "react";
import {tradesOrderBoard, tradesOrderBoard2, tradesPrices, tradesTimes} from "./constants";
import {
    TradeConvertTab,
    TradeDateTab, TradeOrderTab,
    TradePopMarketTab, TradePopRangeTab,
    TradesOrderBoard,
    TradesPriceList,
    TradesTimeList
} from "../components/tradesComponent";
import bulkIcon from '../assets/bulkIcon.svg'
import arrowSwapIcon from '../assets/arrowSwapIcon.svg'
import tradesArrow from '../assets/tradesArrow.svg'
import tradesAddIcon from '../assets/tradesAddIcon.svg'
import tradesPopMinusIcon from '../assets/tradesPopMinusIcon.svg'
import tradesPopAddIcon from '../assets/tradesPopAddIcon.svg'
import {Chart} from "./tradeChart";

export const Trades = () => {
    const [popPriceValue, setPopPriceValue] = useState<string | number>(38418.49);
    const [popQuantityValue, setPopQuantityValue] = useState<string | number>(38418.490);
    const [isPopUp, setIsPopUp] = useState<boolean>(false);
    const [isBuy, setIsBuy] = useState<boolean>(true);

    const popSwitch = () => {
        return isPopUp ? setIsPopUp(false) : setIsPopUp(true);
    }

    return (
        <section className="relative w-full h-[calc(100%-320px)] min-h-[590px] pb-100 pt-20">
            <article className="w-full h-auto">
                <div className="trade-graph-gradient">
                    <div className="px-24">
                        <TradeConvertTab/>
                    </div>
                    <div className="mt-24">
                        <div className="absolute left-24 z-30">
                            <div className="flex items-center gap-8px">
                                <h1 className="text-white text-28 font-bold">
                                    40,059.83
                                </h1>
                                <p className="text-crypto-seafoam-blue text-14 font-normal range">
                                    +0.81%
                                </p>
                            </div>
                            <div className="relative flex text-crypto-silver items-center -left-4">
                                <figure>
                                    <img src={arrowSwapIcon} alt=""/>
                                </figure>
                                <p className="text-crypto-silver text-14 font-normal">
                                    BTC/BUSD
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="w-[calc(100%-70px)]">
                                <div className="flex justify-center items-center h-[258px]">
                                    <Chart/>
                                </div>
                                <div className="grid grid-cols-5 text-center text-12 py-16 text-crypto-warm-grey">
                                    {tradesTimes.map((val) => <TradesTimeList key={val.id} time={val.time}/>)}
                                </div>
                            </div>
                            <div className="grid flex items-end items-start w-full max-w-[70px] text-12 text-start font-normal text-crypto-warm-grey">
                                {tradesPrices.map((val) => <TradesPriceList key={val.id} price={val.price}/>)}
                                <figure>
                                    <img src={bulkIcon} className="relative -top-10" alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <TradeDateTab/>
            </article>
            <article className="w-full h-full bg-white">
                <div className="w-full text-14 text-crypto-dark-three">
                    <button
                        className="w-1/2 bg-crypto-seafoam-blue py-16"
                        onClick={() => {
                            setIsPopUp(true);
                            setIsBuy(true);
                        }}
                        type="button"
                    >
                        Buy
                    </button>
                    <button
                        className="w-1/2 bg-crypto-pale-red py-16"
                        onClick={() => {
                            setIsPopUp(true);
                            setIsBuy(false);
                        }}
                        type="button"
                    >
                        Sell
                    </button>
                </div>
                <TradeOrderTab/>
                <div className="grid grid-cols-2 grow text-12 bg-white border-b border-crypto-pale-grey pb-12">
                    <div className="border-r border-crypto-pale-grey pt-10">
                        <p className="text-crypto-cool-grey pb-4 pl-24 border-b border-crypto-pale-grey">
                            Bid
                        </p>
                        <div className="pr-10 pl-24 pt-12">
                            {
                                tradesOrderBoard.map((val) => <TradesOrderBoard key={val.id} price={val.price} vol={val.vol} opt={val.opt}/>)
                            }
                        </div>
                    </div>
                    <div className="border-r border-crypto-pale-grey pt-10 ">
                        <p className="text-crypto-cool-grey pb-4 pl-10 border-b border-crypto-pale-grey">
                            Ask
                        </p>
                        <div className="pr-24 pl-10 pt-12">
                            {
                                tradesOrderBoard2.map((val) => <TradesOrderBoard key={val.id} price={val.price} vol={val.vol} opt={val.opt} opt2={val.opt2}/>)
                            }
                        </div>
                    </div>
                </div>
            </article>
            <nav
                className={`fixed w-full max-w-[420px] h-auto bg-crypto-dark z-50 pb-24 pt-16 rounded-t-[20px]
                transition-all duration-300 ${isPopUp ? "-bottom-0" : "-bottom-[540px]"}`}
            >
                <figure className="absolute -top-36" onClick={popSwitch}>
                    <img src={tradesArrow} alt=""/>
                </figure>
                <div className="flex justify-end items-center text-12 px-24 pb-16 gap-[8px] border-b border-crypto-light-grey">
                    <p className="text-crypto-warm-grey">Available:</p>
                    <p className="text-white">15.234164400</p>
                    <p className="text-crypto-cool-grey">BUSD</p>
                    <img src={tradesAddIcon} alt=""/>
                </div>
                <div className="px-24 pt-20 grid gap-8px">
                    <TradePopMarketTab/>
                    <div className="flex items-center justify-between relative bg-crypto-dark-two rounded-[12px]">
                        <h1 className="ml-16 text-12 text-crypto-cool-grey my-18">
                            Price:
                        </h1>
                        <p className="absolute left-1/2 -translate-x-1/2 text-14 font-normal text-white">
                            {popPriceValue}
                        </p>
                        <div className="flex">
                            <figure
                                className="p-10 rounded-l-[12px] mr-3 active:bg-crypto-dark"
                                onMouseUp={()=> setPopPriceValue((+popPriceValue + 0.01).toFixed(2))}
                            >
                                <img src={tradesPopAddIcon} alt=""/>
                            </figure>
                            <figure
                                className="p-10 rounded-r-[12px] active:bg-crypto-dark mr-4"
                                onMouseUp={()=> setPopPriceValue((+popPriceValue - 0.01).toFixed(2))}
                            >
                                <img src={tradesPopMinusIcon} alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div className="relative bg-crypto-dark-two rounded-t-[12px] rounded-b-[12px] mb-10">
                        <div className="flex items-center justify-between relative border-b border-crypto-dark">
                            <h1 className="ml-16 text-12 text-crypto-cool-grey my-18">
                                Quantity:
                            </h1>
                            <p className="absolute left-1/2 -translate-x-1/2 text-14 font-normal text-white">
                                {popQuantityValue}
                            </p>
                            <div className="flex">
                                <figure
                                    className="p-10 rounded-l-[12px] mr-3 active:bg-crypto-dark"
                                    onMouseUp={()=> setPopQuantityValue((+popQuantityValue + 0.01).toFixed(2))}
                                >
                                    <img src={tradesPopAddIcon} alt=""/>
                                </figure>
                                <figure
                                    className="p-10 rounded-r-[12px] active:bg-crypto-dark mr-4"
                                    onMouseUp={()=> setPopQuantityValue((+popQuantityValue - 0.01).toFixed(2))}
                                >
                                    <img src={tradesPopMinusIcon} alt=""/>
                                </figure>
                            </div>
                        </div>
                        <TradePopRangeTab/>
                    </div>
                    <div className="flex justify-end pr-23 text-14 font-normal mb-22">
                        <p className="text-crypto-warm-grey mr-8">
                            Total:
                        </p>
                        <p className="text-white">
                            25.234164400
                        </p>
                    </div>
                    <div className="text-18">
                        <button
                            className={`w-full  text-center py-16 rounded-[16px] transition-all duration-200
                            ${isBuy ? 'bg-crypto-seafoam-blue' : 'bg-crypto-pale-red'}`}
                            type="button"
                        >
                            {isBuy ? "Buy" : "Sell"}
                        </button>
                    </div>
                </div>
            </nav>
        </section>
    )
}