import React, {useState} from "react";
import {Tab} from "@headlessui/react";
import {walletList} from "../pages/constants";

const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ')
}

export function WalletsTab() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    let [categories] = useState({
        item1:[{title: 'Deposit'}],
        item2: [{title: 'Withdraw'}],
        item3: [{title: 'Transfer'}],
    })

    return (
        <Tab.Group selectedIndex={selectedIndex} onChange={(i:number) => setSelectedIndex(i)}>
            <Tab.List className="grid grid-cols-3 gap-6px text-16">
                {Object.values(categories).map((category: ({title: string})[], i:number) => (
                    <Tab
                        key={'walletsTab'+i}
                        className={({ selected }) =>
                            classNames(
                                'py-10 h-full text-center flex justify-center items-center rounded-[8px] py-12',
                                'transition-all duration-300',
                                selected
                                    ? 'bg-crypto-seafoam-blue text-crypto-dark-three'
                                    : 'text-crypto-warm-grey bg-crypto-dark-four'
                            )
                        }
                    >
                        {category[0].title}
                    </Tab>
                ))}
            </Tab.List>
        </Tab.Group>
    )
}
export const WalletsList = (props: {isShouw:boolean}) => {
    return (
        <ul className="w-full h-full min-h-[590px] px-24">
            {
                walletList.map((val)=>{
                    return (
                        <li key={val.id} className="flex h-full w-full py-20 text-14 border-b border-crypto-light-grey">
                            <figure>
                                <img src={val.img} className="w-47" alt=""/>
                            </figure>
                            <div className="flex w-full justify-between ml-14">
                                <div>
                                    <h1 className="font-bold text-white">
                                        {val.title}
                                    </h1>
                                    <p className="text-crypto-warm-grey font-normal">
                                        {val.sub}
                                    </p>
                                </div>
                                <div className="text-end">
                                    <h1 className="font-bold text-white">
                                        {props.isShouw ? val.coin : '**,***.**'}
                                    </h1>
                                    <p className="text-crypto-warm-grey font-normal">
                                        {props.isShouw ? val.amount : '$***,***.**'}
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
