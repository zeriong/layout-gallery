import React, {useEffect, useRef, useState} from "react";
import {coinLi, coinLi2, cryptoHomeItem} from "./constants";
import {HomeIntroContents, RecentAndTopCoin} from "../components/homeComponent";


export const CryptoHome = () => {
    const scrollEl = useRef<HTMLUListElement>(null);
    const elCurnt = scrollEl.current;
    const [isClicked, setIsClicked] =useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [currentX, setCurrentX] = useState<number>(0);
    const [movePointX, setMovePointX] = useState<number>(0);
    const [startScrollLeft, setStartScrollLeft] = useState<number>(0);

    const onMouseUp = (e: React.MouseEvent) => {
        setIsClicked(false);
        console.log(e)
    }
    const onMouseLeave = () => setIsClicked(false);
    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsClicked(true);
        if (elCurnt && e.type === 'mousedown' && 'pageX' in e) {
            setStartX(e.pageX - elCurnt.offsetLeft);
            setStartScrollLeft(elCurnt.scrollLeft)
        }
        console.log(startX)
    }
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isClicked) return
        if (elCurnt && e.type === 'mousemove' && 'pageX' in e) {
            setCurrentX(e.pageX - elCurnt.offsetLeft);
            setMovePointX(currentX - startX);
            elCurnt.scrollLeft = startScrollLeft - movePointX
            elCurnt.style.transform = `translateX(${movePointX}px)`
        }
    }

    useEffect(()=>{

    },[])

    return (
        <section className="bg-white w-full h-full pt-24 pb-100 text-crypto-dark overflow-auto scroll-hidden">
            <ul
                className="grid grid-cols-1 gap-9px mb-28 px-24"
            >
                {
                    cryptoHomeItem.map((val) => {
                        return (
                            <HomeIntroContents key={val.id} img={val.img} title={val.title} summary={val.summary} opt={val.opt}/>
                        )
                    })
                }
            </ul>
            <div>
                <h1 className="font-[700] text-18 mb-16 px-24">
                    Recent Coin
                </h1>
                <div className="w-full h-[180px] overflow-x-scroll scroll-hidden">
                    {/**  왜 오른쪽만 px24 안먹히는지 모르겠음  */}
                    <ul
                        className={`relative flex gap-8px h-auto w-full min-w-full px-24 cursor-default select-none ${isClicked ? "" : "transition-all duration-300"}`}
                        ref={scrollEl}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                    >
                        {
                            coinLi.map((val) => {
                                return (
                                    <RecentAndTopCoin key={val.id} img={val.img} price={val.price} rate={val.rate} tag={val.tag}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="relative -top-20">
                <h1 className="font-[700] text-18 mb-16 px-24">
                    Top Coins
                </h1>
                <div className="w-full h-[180px] overflow-x-scroll scroll-hidden">
                    {/**  왜 오른쪽만 px24 안먹히는지 모르겠음  */}
                    <ul
                        className={`relative flex gap-8px h-auto w-full min-w-full px-24 cursor-default select-none ${isClicked ? "" : "transition-all duration-300"}`}
                        ref={scrollEl}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                    >
                        {
                            coinLi2.map((val) => {
                                return (
                                    <RecentAndTopCoin key={val.id} img={val.img} price={val.price} rate={val.rate} tag={val.tag}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}