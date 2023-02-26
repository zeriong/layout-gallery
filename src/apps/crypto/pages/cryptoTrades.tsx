import React, {ChangeEvent, useState} from "react";
import {tradesOrderBoard, tradesOrderBoard2, tradesPrices, tradesTimes} from "./constants";
import {TradesOrderBoard, TradesPriceList, TradesTimeList} from "../components/homContents";
import bulkIcon from '../assets/bulkIcon.svg'
import arrowSwapIcon from '../assets/arrowSwapIcon.svg'
import tradesArrow from '../assets/tradesArrow.svg'
import tradesAddIcon from '../assets/tradesAddIcon.svg'

export const CryptoTrades = () => {
    const [dateValue, setDateValue] = useState('1m');
    const [navValue, setNavValue] = useState('Spot');
    const [orderValue, setOrderValue] = useState('OrderBooks');
    const [popValue, setPopValue] = useState('popMarket');
    const onDateValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDateValue(e.currentTarget.value);
    }
    const onNavValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNavValue(e.currentTarget.value);
    }
    const onOrderValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setOrderValue(e.currentTarget.value);
    }
    const onPopValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPopValue(e.currentTarget.value);
    }

    return (
        <section className="relative w-full h-full pb-100 pt-20 max-h-[590px]">
            <article className="w-full h-auto">
                <div className="trade-graph-gradient">
                    <div className="px-24">
                        <nav className="grid grid-cols-4 gap-8px p-4 w-full bg-crypto-dark-two rounded-[12px] text-14">
                            <div>
                                <input
                                    value="Convert"
                                    type="radio"
                                    name="tradeNav"
                                    className="hidden trade-radio first:checked"
                                    id="Convert"
                                    checked={navValue === 'Convert'}
                                    onChange={onNavValueChange}
                                />
                                <label htmlFor="Convert" className="py-10 px-30 text-center flex justify-center items-center rounded-[12px] text-crypto-warm-grey">
                                    Convert
                                </label>
                            </div>
                            <div>
                                <input
                                    value="Spot"
                                    type="radio"
                                    name="tradeNav"
                                    className="hidden trade-radio first:checked"
                                    id="Spot"
                                    checked={navValue === 'Spot'}
                                    onChange={onNavValueChange}
                                />
                                <label htmlFor="Spot" className="py-10 px-30 text-center flex justify-center items-center rounded-[12px] text-crypto-warm-grey">
                                    Spot
                                </label>
                            </div>
                            <div>
                                <input
                                    value="Margin"
                                    type="radio"
                                    name="tradeNav"
                                    className="hidden trade-radio first:checked"
                                    id="Margin"
                                    checked={navValue === 'Margin'}
                                    onChange={onNavValueChange}
                                />
                                <label htmlFor="Margin" className="py-10 px-30 text-center flex justify-center items-center rounded-[12px] text-crypto-warm-grey">
                                    Margin
                                </label>
                            </div>
                            <div>
                                <input
                                    value="Fiat"
                                    type="radio"
                                    name="tradeNav"
                                    className="hidden trade-radio first:checked"
                                    id="Fiat"
                                    checked={navValue === 'Fiat'}
                                    onChange={onNavValueChange}
                                />
                                <label htmlFor="Fiat" className="py-10 px-30 text-center flex justify-center items-center rounded-[12px] text-crypto-warm-grey">
                                    Fiat
                                </label>
                            </div>
                        </nav>
                    </div>
                    <div className="mt-24">
                        <div className="absolute left-24">
                            <div className="flex items-center gap-8px">
                                <h1 className="text-white text-28 font-bold">
                                    40,059.83
                                </h1>
                                <p className="text-crypto-seafoam-blue text-14 font-normal">
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
                                    Graph
                                </div>
                                <div className="grid grid-cols-5 text-center text-12 py-16 text-crypto-warm-grey">
                                    {
                                        tradesTimes.map((val) => {
                                            return (
                                                <TradesTimeList key={val.id} time={val.time}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="grid flex items-end items-start w-full max-w-[70px] text-12 text-start font-normal text-crypto-warm-grey">
                                {
                                    tradesPrices.map((val) => {
                                        return (
                                            <TradesPriceList key={val.id} price={val.price}/>
                                        )
                                    })
                                }
                                <figure>
                                    <img src={bulkIcon} className="relative -top-10" alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-1px bg-crypto-light-grey text-12">
                    <div>
                        <input
                            id="1m"
                            value="1m"
                            type="radio"
                            name="tradeDateNav"
                            className="hidden trade-date-radio"
                            checked={dateValue === '1m'}
                            onChange={onDateValueChange}
                        />
                        <label htmlFor="1m" className="py-10 px-30 text-center flex justify-center items-center text-crypto-warm-grey bg-crypto-dark">
                            1m
                        </label>
                    </div>
                    <div>
                        <input
                            id="5m"
                            value="5m"
                            type="radio"
                            name="tradeDateNav"
                            className="hidden trade-date-radio"
                            checked={dateValue === '5m'}
                            onChange={onDateValueChange}
                        />
                        <label htmlFor="5m" className="py-10 px-30 text-center flex justify-center items-center text-crypto-warm-grey bg-crypto-dark">
                            5m
                        </label>
                    </div>
                    <div>
                        <input
                            id="15m"
                            value="15m"
                            type="radio"
                            name="tradeDateNav"
                            className="hidden trade-date-radio"
                            checked={dateValue === '15m'}
                            onChange={onDateValueChange}
                        />
                        <label htmlFor="15m" className="py-10 px-30 text-center flex justify-center items-center text-crypto-warm-grey bg-crypto-dark">
                            15m
                        </label>
                    </div>
                    <div>
                        <input
                            id="15m2"
                            value="15m2"
                            type="radio"
                            name="tradeDateNav"
                            className="hidden trade-date-radio"
                            checked={dateValue === '15m2'}
                            onChange={onDateValueChange}
                        />
                        <label htmlFor="15m2" className="py-10 px-30 text-center flex justify-center items-center text-crypto-warm-grey bg-crypto-dark">
                            15m
                        </label>
                    </div>
                    <div>
                        <input
                            id="1d"
                            value="1d"
                            type="radio"
                            name="tradeDateNav"
                            className="hidden trade-date-radio"
                            checked={dateValue === '1d'}
                            onChange={onDateValueChange}
                        />
                        <label htmlFor="1d" className="py-10 px-30 text-center flex justify-center items-center text-crypto-warm-grey bg-crypto-dark">
                            1d
                        </label>
                    </div>
                    <div>
                        <input
                            id="More"
                            value="More"
                            type="radio"
                            name="tradeDateNav"
                            className="hidden trade-date-radio"
                            checked={dateValue === 'More'}
                            onChange={onDateValueChange}
                        />
                        <label htmlFor="More" className="py-10 px-30 text-center flex justify-center items-center text-crypto-warm-grey bg-crypto-dark">
                            More
                        </label>
                    </div>
                </div>
            </article>
            <article className="w-full h-full bg-white">
                <div className="w-full text-14 text-crypto-dark-three">
                    <button className="w-1/2 bg-crypto-seafoam-blue py-16">
                        Buy
                    </button>
                    <button className="w-1/2 bg-crypto-pale-red py-16">
                        Sell
                    </button>
                </div>
                <div className="grid grid-cols-3 text-14 font-normal w-full border-b border-crypto-pale-grey">
                    <div className="w-full">
                        <input
                            id="openOrder"
                            value="openOrder"
                            type="radio"
                            name="tradeOrder"
                            className="hidden trade-order-radio"
                            checked={orderValue === 'openOrder'}
                            onChange={onOrderValueChange}
                        />
                        <label htmlFor="openOrder" className="py-16 h-full text-center flex justify-center items-center text-crypto-cool-grey bg-white border-r border-crypto-pale-grey">
                            Open Order (2)
                        </label>
                    </div>
                    <div className="w-full">
                        <input
                            id="OrderBooks"
                            value="OrderBooks"
                            type="radio"
                            name="tradeOrder"
                            className="hidden trade-order-radio"
                            checked={orderValue === 'OrderBooks'}
                            onChange={onOrderValueChange}
                        />
                        <label htmlFor="OrderBooks" className="py-16 h-full text-center flex justify-center items-center text-crypto-cool-grey bg-white border-r border-crypto-pale-grey">
                            Order Books
                        </label>
                    </div>
                    <div className="w-full">
                        <input
                            id="MarketTrades"
                            value="MarketTrades"
                            type="radio"
                            name="tradeOrder"
                            className="hidden trade-order-radio"
                            checked={orderValue === 'MarketTrades'}
                            onChange={onOrderValueChange}
                        />
                        <label htmlFor="MarketTrades" className="py-16 h-full text-center flex justify-center items-center text-crypto-cool-grey bg-white border-r border-crypto-pale-grey">
                            Market Trades
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-2 h-auto text-12">
                    <div className="border-r border-crypto-pale-grey pt-10 ">
                        <p className="text-crypto-cool-grey pb-4 pl-24 border-b border-crypto-pale-grey">
                            Bid
                        </p>
                        <div className="pr-10 pl-24 pt-12">
                            {
                                tradesOrderBoard.map((val) => {
                                    return (
                                        <TradesOrderBoard key={val.id} price={val.price} vol={val.vol} opt={val.opt}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="border-r border-crypto-pale-grey pt-10 ">
                        <p className="text-crypto-cool-grey pb-4 pl-10 border-b border-crypto-pale-grey">
                            Ask
                        </p>
                        <div className="pr-24 pl-10 pt-12">
                            {
                                tradesOrderBoard2.map((val) => {
                                    return (
                                        <TradesOrderBoard key={val.id} price={val.price} vol={val.vol} opt={val.opt} opt2={val.opt2}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </article>
            <nav className="fixed w-full max-w-[420px] h-[468px] bg-crypto-dark bottom-0 z-50 pb-24 pt-16 rounded-t-[20px] transition-all duration-300">
                <figure className="absolute -top-36">
                    <img src={tradesArrow} alt=""/>
                </figure>
                <div className="flex justify-end items-center text-12 px-24 py-16 gap-[8px] border-b border-crypto-light-grey">
                    <p className="text-crypto-warm-grey">Available:</p>
                    <p className="text-white">15.234164400</p>
                    <p className="text-crypto-cool-grey">BUSD</p>
                    <img src={tradesAddIcon} alt=""/>
                </div>
                <div className="px-24 pt-20 grid gap-8px">
                    <div className="bg-crypto-dark-two rounded-[12px] p-4 grid grid-cols-3 gap-6px">
                        <div className="w-full text-14">
                            <input
                                id="popLimit"
                                value="popLimit"
                                type="radio"
                                name="tradePopover"
                                className="hidden trade-pop-radio"
                                checked={popValue === 'popLimit'}
                                onChange={onPopValueChange}
                            />
                            <label htmlFor="popLimit" className="py-10 h-full text-center flex justify-center items-center text-crypto-warm-grey rounded-[12px]">
                                Limit
                            </label>
                        </div>
                        <div className="w-full text-14">
                            <input
                                id="popMarket"
                                value="popMarket"
                                type="radio"
                                name="tradePopover"
                                className="hidden trade-pop-radio"
                                checked={popValue === 'popMarket'}
                                onChange={onPopValueChange}
                            />
                            <label htmlFor="popMarket" className="py-10 h-full text-center flex justify-center items-center text-crypto-warm-grey rounded-[12px]">
                                Market
                            </label>
                        </div>
                        <div className="w-full text-14">
                            <input
                                id="popStopLimit"
                                value="popStopLimit"
                                type="radio"
                                name="tradePopover"
                                className="hidden trade-pop-radio"
                                checked={popValue === 'popStopLimit'}
                                onChange={onPopValueChange}
                            />
                            <label htmlFor="popStopLimit" className="py-10 h-full text-center flex justify-center items-center text-crypto-warm-grey rounded-[12px]">
                                Stop Limit
                            </label>
                        </div>
                    </div>
                    <div className="bg-crypto-dark-two">d</div>
                    <div className="bg-crypto-dark-two">d</div>
                </div>
            </nav>
        </section>
    )
}