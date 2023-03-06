import React, {useState} from "react";
import {Tab} from "@headlessui/react";
import {marketList} from "../pages/constants";
import {LineGraph} from "../pages/tradeChart";

const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ')
}
export function MarketTab() {
    const [selectedIndex, setSelectedIndex] = useState(1);

    let [categories] = useState({
        Convert:[{title: 'Convert'}],
        Spot: [{title: 'Spot'}],
        Margin: [{title: 'Margin'}],
        Fiat: [{title: 'Fiat'}],
    })

    return (
        <div className="mb-10">
            <Tab.Group selectedIndex={selectedIndex} onChange={(i:number) => setSelectedIndex(i)}>
                <Tab.List className="grid grid-cols-4 gap-8px p-4 w-full bg-crypto-dark-two rounded-[12px] text-14">
                    {Object.values(categories).map((category: ({title: string})[], i:number) => (
                        <Tab
                            key={'conTab'+i}
                            className={({ selected }) =>
                                classNames(
                                    'py-10 px-30 text-center flex justify-center items-center rounded-[12px]',
                                    'transition-all duration-300',
                                    selected
                                        ? 'bg-crypto-dark text-crypto-silver'
                                        : 'text-crypto-warm-grey'
                                )
                            }
                        >
                            {category[0].title}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
    )
}

export const MarketList = () => {
    return (
        <ul className="w-full h-full">
            {
                marketList.map((val)=>{
                    return (
                        <li key={val.id} className="flex w-full py-20 text-14 border-b border-crypto-light-grey">
                            <figure>
                                <img src={val.img} className="w-47" alt=""/>
                            </figure>
                            <div className="flex w-full grid grid-cols-3 ml-13">
                                <div>
                                    <h1 className="font-bold text-white">
                                        {val.title}
                                    </h1>
                                    <p className="text-crypto-warm-grey font-normal">
                                        {val.sub}
                                    </p>
                                </div>
                                <div className="relative -left-10 h-40">
                                    <LineGraph upturn={val.upturn} fill={val.fill}/>
                                </div>
                                <div className="text-end">
                                    <h1 className="font-bold text-white">
                                        {val.coin}
                                    </h1>
                                    <p
                                        className={`font-normal
                                        ${val.rate.includes('-') ? 'text-crypto-pale-red' : 'text-crypto-seafoam-blue'}`}
                                    >
                                        {val.rate}
                                    </p>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}