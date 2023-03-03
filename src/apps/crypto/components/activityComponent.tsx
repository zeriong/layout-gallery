import React from "react";
import {activityBoxList, activityLists} from "../pages/constants";
import rightArrow from '../assets/rightArrow.svg';
import rightMarkIcon from '../assets/rightMarkIcon.svg';
export const ActivityBoxList = () => {
    return (
        <div className="w-full h-auto p-24">
            <ul className="w-full h-full rounded-[12px] overflow-hidden">
                {
                    activityBoxList.map((val)=>{
                        return (
                            <li key={val.id} className="flex justify-between w-full p-16 text-14 border-b border-crypto-dark last:border-none bg-crypto-dark-two text-crypto-silver font-normal">
                                <div className="flex w-full items-center">
                                    <figure className="mr-16">
                                        <img src={val.img} alt=""/>
                                    </figure>
                                    <p>
                                        {val.title}
                                    </p>
                                </div>
                                <figure>
                                    <img src={rightArrow} alt=""/>
                                </figure>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export const ActivityList = () => {
    return (
        <ul className="w-full h-full min-h-[590px] px-24">
            {
                activityLists.map((val)=>{
                    return (
                        <li key={val.id} className="flex h-full w-full py-16 text-14 border-b border-crypto-light-grey">
                            <div className="mr-8">
                                <p
                                    className={`relative bg-opacity-10 p-10 rounded-full ${val.status === 'Filled' ?
                                        'bg-crypto-seafoam-blue text-crypto-seafoam-blue' : 'bg-crypto-pale-red text-crypto-pale-red'}`}
                                >
                                    {val.log}
                                </p>
                            </div>
                            <div className="w-full text-crypto-warm-grey grid gap-4px">
                                <div className="flex justify-between">
                                    <p className="text-white font-bold">
                                        {val.title}
                                    </p>
                                    <div className="flex items-center text-12">
                                        <p className="mr-8">{val.date}</p>
                                        <figure className="w-9 h-fit">
                                            <img src={rightMarkIcon} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p>
                                        Amount
                                    </p>
                                    <div className="flex">
                                        <p className="text-crypto-seafoam-blue">
                                            {val.amount1}
                                        </p>
                                        <p className="text-crypto-cool-grey">
                                            {val.amount2}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p>
                                        Price
                                    </p>
                                    <p className="text-crypto-cool-grey">
                                        {val.price}
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <p>
                                        Status
                                    </p>
                                    <p className={`${val.status === 'Filled' ? 'text-crypto-seafoam-blue' : 'text-crypto-pale-red'}`}>
                                        {val.status}
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