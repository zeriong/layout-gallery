import React, {useRef, useState} from "react";
import { Tab } from '@headlessui/react'

export const TradesTimeList = (props: {time:string}) => {
    return <p>{props.time}</p>
}
export const TradesPriceList = (props: {price:string}) => {
    return <p>{props.price}</p>
}
export const TradesOrderBoard = (props: {price:string, vol:string, opt:string, opt2?:string}) => {
    return (
        <div className="flex justify-between">
            <p className={`text-crypto-dark font-normal ${props.opt2}`}>
                {props.price}
            </p>
            <p className={`${props.opt} font-normal`}>
                {props.vol}
            </p>
        </div>
    )
}


const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
}

export function TradeOrderTab() {
    const [selectedIndex, setSelectedIndex] = useState(1)

    let [categories] = useState({
        item1:[{title: 'Open Order'}],
        item2: [{title: 'Order Books'}],
        item3: [{title: 'Market Trades'}],
    })

    return (
        <Tab.Group selectedIndex={selectedIndex} onChange={(i:number) => setSelectedIndex(i)}>
            <Tab.List className="grid grid-cols-3 text-14 font-normal w-full border-b border-crypto-pale-grey">
                {Object.values(categories).map((category: ({title: string})[], i:number) => (
                    <Tab
                        key={'popMarketTab'+i}
                        className={({ selected }) =>
                            classNames(
                                'py-16 h-full text-center flex justify-center items-center bg-white border-r border-crypto-pale-grey last:border-none',
                                'transition-all duration-300',
                                selected
                                    ? 'bg-crypto-pale-grey text-crypto-dark'
                                    : 'text-crypto-cool-grey'
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

export function TradeConvertTab() {
    const [selectedIndex, setSelectedIndex] = useState(1);

    let [categories] = useState({
        Convert:[{title: 'Convert'}],
        Spot: [{title: 'Spot'}],
        Margin: [{title: 'Margin'}],
        Fiat: [{title: 'Fiat'}],
    })

    return (
        <div>
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

export function TradeDateTab() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    let [categories] = useState({
        item1:[{title: '1m'}],
        item2: [{title: '5m'}],
        item3: [{title: '15m'}],
        item4: [{title: '15m'}],
        item5: [{title: '1d'}],
        item6: [{title: 'More'}],
    })

    return (
        <div>
            <Tab.Group selectedIndex={selectedIndex} onChange={(i:number) => setSelectedIndex(i)}>
                <Tab.List className="grid grid-cols-6 gap-1px bg-crypto-light-grey text-12">
                    {Object.values(categories).map((category: ({title: string})[], i:number) => (
                        <Tab
                            key={'dateTab'+i}
                            className={({ selected }) =>
                                classNames(
                                    'py-10 px-30 text-center flex justify-center items-center bg-crypto-dark',
                                    'transition-all duration-300',
                                    selected
                                        ? 'bg-crypto-ball-dark text-white'
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

export function TradePopMarketTab() {
    const [selectedIndex, setSelectedIndex] = useState(1);

    let [categories] = useState({
        item1:[{title: 'Limit'}],
        item2: [{title: 'Market'}],
        item3: [{title: 'Stop Limit'}],
    })

    return (
        <Tab.Group selectedIndex={selectedIndex} onChange={(i:number) => setSelectedIndex(i)}>
            <Tab.List className="bg-crypto-dark-two rounded-[12px] p-4 grid grid-cols-3 gap-6px text-14">
                {Object.values(categories).map((category: ({title: string})[], i:number) => (
                    <Tab
                        key={'popMarketTab'+i}
                        className={({ selected }) =>
                            classNames(
                                'py-10 h-full text-center flex justify-center items-center rounded-[12px]',
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
    )
}

export function TradePopRangeTab() {
    const [rangeVal, setRangeVal] = useState<string | number>("50");
    const [currentTab, setCurrentTab] = useState(1);

    const range = useRef<HTMLInputElement>(null);
    const rangeEl = range.current;

    let [categories] = useState({
        item1:[{title: '25%', val: '25'}],
        item2: [{title: '50%', val: '50'}],
        item3: [{title: '75%', val: '75'}],
        item4: [{title: '100%', val: '100'}],
    })

    const colorChange = (val: string | number = rangeVal) => {
        if (!rangeEl) return
        rangeEl.style.background = 'linear-gradient(to right, #252e35 0%, #252e35 '+ rangeVal +'%, #1b232a ' + rangeVal + '%, #1b232a 100%)';
    }

    const rangeTrackChange = () => {
        if (!rangeEl) return
        setRangeVal(rangeEl.value);
        colorChange();

        if(rangeVal === '25') setCurrentTab(0);
        if(rangeVal === '50') setCurrentTab(1);
        if(rangeVal === '75') setCurrentTab(2);
        if(rangeVal === '100') setCurrentTab(3);
        else {
            setTimeout(() => {
                setCurrentTab(-1)
            },800)
        }
    }

    return (
        <div>
            <label className="relative flex justify-center items-center block h-24">
                <input
                    type="range"
                    min="1"
                    max="100"
                    className="trade-range absolute appearance-none h-2 w-[calc(100%-32px)] bg-crypto-dark"
                    onChange={rangeTrackChange}
                    onMouseDown={rangeTrackChange}
                    onMouseUp={rangeTrackChange}
                    value={rangeVal}
                    style={{
                        background: "linear-gradient(to right, #252e35 0%, #252e35 50%, #1b232a 50%, #1b232a 100%)"
                    }}
                    ref={range}
                />
            </label>
            <Tab.Group>
                <Tab.List className="flex justify-around text-12 pb-16 pt-8">
                    {Object.values(categories).map((category: ({title: string, val: string})[], i:number) => (
                        <Tab
                            key={'popMarketTab'+i}
                            className={`flex justify-center items-center w-40 h-40 founded-full rounded-full transition-all duration-300
                            ${currentTab === i ? 'bg-crypto-dark text-crypto-cool-grey' : 'text-crypto-warm-grey'}`}
                            onMouseDown={() => {
                                setCurrentTab(i);
                                setRangeVal(category[0].val);
                            }}
                            onMouseUp={() => colorChange(category[0].val)}
                        >
                            {category[0].title}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
    )
}