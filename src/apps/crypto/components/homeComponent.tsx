import {useNavigate} from "react-router-dom";
import rocket from "../assets/rocket.svg";
import React from "react";

export const HomeIntroContents = (props: {img:string, title:string, summary:string, opt?:string}) => {
    const navigate = useNavigate();
    return (
        <li
            className="cursor-pointer flex w-full p-12 rounded-[16px] bg-crypto-pale-grey text-start text-crypto-dark"
            onClick={() => {return props.img === rocket ? navigate('trades') : navigate('wallets')}}
        >
            <figure className="relative w-52 h-52 rocket-bg rounded-[12px] rocket-gradient mr-16">
                <img src={props.img} className={`${props.opt}`} alt=""/>
            </figure>
            <div className="relative flex flex-col justify-center">
                <h1 className="text-16 font-normal">
                    {props.title}
                </h1>
                <p className="font-normal text-14 text-crypto-cool-grey">
                    {props.summary}
                </p>
            </div>
        </li>
    )
}

export const RecentAndTopCoin = (props: {img:string, tag:string, rate:string, price:string}) => {
    return (
        <li className="relative top-12 rounded-[16px] shadow-[0_16px_50px_rgba(22,28,34,0.08)] p-12 min-w-[163px] w-[163px] min-h-[118px] h-[118px]">
            <p className="text-crypto-seafoam-blue font-[700] mb-5">
                {props.price}
            </p>
            <figure className="absolute top-8 right-8">
                <img src={props.img} alt=""/>
            </figure>
            <div className="flex gap-4">
                <p className="text-14 font-[400]">
                    {props.tag}
                </p>
                <p className="relative -bottom-2 text-12 text-crypto-seafoam-blue font-[400]">
                    {props.rate}
                </p>
            </div>
            <div>
                Graph
            </div>
        </li>
    )
}