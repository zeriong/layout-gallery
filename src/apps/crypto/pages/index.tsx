import React from "react";
import {coinLi, coinLi2, cryptoHomeItem} from "./constants";
import {HomeIntroContents, RecentAndTopCoin} from "../components/homeComponent";
import {useHorizontalScroll} from "../../../hooks/useSideScroll";

export const CryptoHome = () => {
    const scrollRef = useHorizontalScroll();
    const scrollRef2 = useHorizontalScroll();

    return (
        <section className="bg-white w-full h-full pt-24 pb-100 text-crypto-dark overflow-auto scroll-hidden">
            <ul
                className="grid grid-cols-1 gap-9px mb-28 px-24"
            >
                {cryptoHomeItem.map((val) => {
                    return (
                        <HomeIntroContents
                            key={val.id}
                            img={val.img}
                            title={val.title}
                            summary={val.summary}
                            opt={val.opt}
                        />
                    )
                })}
            </ul>
            <div>
                <h1 className="font-[700] text-18 mb-16 px-24">
                    Recent Coin
                </h1>
                <div className="w-full h-[180px] overflow-x-scroll scroll-hidden" ref={scrollRef}>
                    <ul
                        className={`relative flex gap-8px h-auto w-fit px-24 justify-center cursor-default select-none`}
                    >
                        {coinLi.map((val) => {
                            return (
                                <RecentAndTopCoin
                                    key={val.id}
                                    img={val.img}
                                    price={val.price}
                                    rate={val.rate}
                                    tag={val.tag}
                                    upturn={val.upturn}
                                    fill={val.fill}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="relative -top-20">
                <h1 className="font-[700] text-18 mb-16 px-24">
                    Top Coins
                </h1>
                <div className="w-full h-[180px] overflow-x-scroll scroll-hidden" ref={scrollRef2}>
                    <ul
                        className={`relative flex gap-8px h-auto w-fit px-24 cursor-default select-none`}

                    >
                        {coinLi2.map((val) => {
                            return (
                                <RecentAndTopCoin
                                    key={val.id}
                                    img={val.img}
                                    price={val.price}
                                    rate={val.rate}
                                    tag={val.tag}
                                    upturn={val.upturn}
                                    fill={val.fill}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}