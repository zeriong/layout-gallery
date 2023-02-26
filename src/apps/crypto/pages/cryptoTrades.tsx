import React, {ChangeEvent, useState} from "react";

export const CryptoTrades = () => {
    const [dateValue, setDateValue] = useState('1m');
    const [navValue, setNavValue] = useState('Spot');
    const onDateValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDateValue(e.currentTarget.value);
    }
    const onNavValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNavValue(e.currentTarget.value);
    }

    return (
        <section className="relative w-full h-full pb-100 pt-20">
            <article className="w-full h-full">
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
                            <div className="flex text-crypto-silver">
                                <div>
                                    img
                                </div>
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
                                    <p>18:00</p>
                                    <p>19:00</p>
                                    <p>20:00</p>
                                    <p>21:00</p>
                                    <p>21:00</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-start w-full max-w-[70px] text-12 text-start font-normal">
                                <p className="w-full">64,000.00</p>
                                <p className="w-full">64,000.00</p>
                                <p className="w-full">64,000.00</p>
                                <p className="w-full">64,000.00</p>
                                <p className="w-full">64,000.00</p>
                                <p className="w-full">64,000.00</p>
                                <p className="w-full">64,000.00</p>
                                <p className="w-full">64,000.00</p>
                                <div className="h-44 text-white">
                                    img
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-1px bg-[#1E252D]">
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
            <article>
            </article>
            <div>
            </div>
        </section>
    )
}