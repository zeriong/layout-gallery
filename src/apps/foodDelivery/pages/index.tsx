import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import pizzaI from "../assets/pizza-e.svg";
import burgerI from "../assets/burger-e.svg";
import sushiI from "../assets/sushi-e.svg";
import clockIcon from "../assets/clockIcon.svg";
import emptyShopingBag from "../assets/emptyShopingBagIcon.svg";
import filledShopingBag from "../assets/filledShopingBagIcon.svg";
import {deliveryFoodList, deliveryIntroEvent, deliveryRestaurantList} from "./constants";

const IntroEvent = (props: {title:string, food?:string, img:string, summary?:string, bg?:string, text?:string}) => {
    return (
        <div className={`flex flex-col-reverse sm:flex sm:flex-row w-full h-[276px] sm:h-[188px] rounded-2xl ${props.bg}`}>
            <figure className="m-auto sm:m-0">
                <img src={props.img} alt=""/>
            </figure>
            <article className="flex justify-between sm:justify-start relative top-36 sm:top-0 sm:block p-16 sm:p-24 pl-16">
                <div>
                    <p className="text-20 text-neutral-black font-[600]">
                        {props.food}
                    </p>
                    <h1 className={`text-40 ${props.text} font-extrabold mb-0 sm:mb-36`}>
                        {props.title}
                    </h1>
                </div>
                <p className="text-sm text-neutral-gray font-normal">
                    {props.summary}
                </p>
            </article>
        </div>
    )
}

export const FoodList = (props: { title:string, img:string }) => {
    const [clicked, setClicked] = useState(false);
    const clickedSensor = () => {
        return clicked ? setClicked(false) : setClicked(true);
    }
    return(
        <li
            className={`w-full h-80 flex flex-col justify-center text-center py-14 rounded-xl border border-neutral-gray-lightest bg-white
            hover:border-primary-hover hover:bg-primary-lightest font-bold text-neutral-gray-dark text-13 cursor-pointer
            ${clicked ? "border-2 bg-primary-light border-primary-default text-primary-default" : ""}`}
            onClick={clickedSensor}
        >
            <figure className="mb-12 mx-auto">
                <img src={props.img} alt=""/>
            </figure>
            <p className="px-18">
                {props.title}
            </p>
        </li>
    )
}

const RestaurantList = ( props: {
    title: string, img: string, waiting?: string, minAmount?: string, tagIcon?: string[], shopingBag?: number, featured?: boolean;}) => {
    const navigate = useNavigate();
    return(
        <li className="w-full h-[276px] rounded-2xl overflow-hidden border border-neutral-gray-lightest" onClick={()=>navigate('acc-settings')}>
            <figure className="relative flex items-center overflow-hidden h-[160px] cursor-pointer">
                {
                    props.featured ? (
                        <p className="absolute flex items-center bg-primary-default text-white px-16 py-8 font-bold text-11 rounded-bl-xl right-0 top-0 h-32">
                            FEATURED
                        </p>
                    ) : ""
                }
                <img src={props.img} className="w-full h-auto" alt=""/>
            </figure>
            <article className="flex w-full h-full max-h-[116px] flex-col justify-between p-16">
                <div className="w-full">
                    <div className="flex relative mb-6">
                        <h1 className="text-lg text-neutral-black font-bold cursor-pointer">
                            {props.title}
                        </h1>
                        <figure className="absolute right-0 cursor-pointer">
                            {props.shopingBag === 0 ? (
                                <img src={emptyShopingBag} alt=""/>
                            ) : (
                                <div className="relative">
                                    <div className="flex items-center justify-center absolute w-16 h-16 bg-primary-default text-1px font-normal rounded-md text-white text-center border border-white p-8 -right-7 -top-8">
                                        {props.shopingBag}
                                    </div>
                                    <img src={filledShopingBag} alt=""/>
                                </div>
                            )}
                        </figure>
                    </div>
                    <div className="flex items-center text-neutral-gray font-[600] text-12">
                        <img src={clockIcon} alt=""/>
                        <p className="ml-6">
                            {`${props.waiting} min`}
                        </p>
                        <div className="w-3 h-3 rounded-full bg-primary-default mx-8"/>
                        <p className="ml-6">
                            {`${props.minAmount} min sum`}
                        </p>
                    </div>
                </div>
                <ul className="flex gap-8px">
                    {
                        props.tagIcon?.map((val,i) => {
                            return (
                                <li key={i+"tagIcon"} className="w-fit bg-neutral-gray-lightest rounded-xl">
                                    <figure className="flex justify-center items-center h-24 py-6 px-10 cursor-pointer">
                                        <img src={val} className="w-12" alt=""/>
                                        <p className="text-neutral-gray-dark text-12 font-[600] ml-8">
                                            {
                                                val === sushiI ? "Sushi" :
                                                    val === pizzaI ? "Pizza" :
                                                        val=== burgerI ? "Burger" : ""
                                            }
                                        </p>
                                    </figure>
                                </li>
                            )
                        })
                    }
                </ul>
            </article>
        </li>
    )
}

export const DeliveryHome = () => {
    //const navigate = useNavigate();
    return (
        <section>
            <article className="grid grid-cols-1 sm:grid-cols-2 gap-30px">
                {
                    deliveryIntroEvent.map((val) => {
                        return (
                            <IntroEvent
                                key={val.id}
                                img={val.img}
                                title={val.title}
                                food={val.food}
                                summary={val.summary}
                                bg={val.bg}
                                text={val.text}
                            />
                        )
                    })
                }
            </article>
            <article className="h-auto w-full mt-32">
                <ul className="grid grid-cols-3 sm:grid-cols-6 flex-auto w-full gap-15px sm:gap-30px">
                    {
                        deliveryFoodList.map((val) => {
                                return (
                                    <FoodList key={val.id} title={val.title} img={val.img}/>
                                )
                        })
                    }
                </ul>
            </article>
            <article>
                <h1 className="text-20 font-[600] mt-40 mb-16 text-neutral-black">
                    Nearby restaurants
                </h1>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-30px">
                    {
                        deliveryRestaurantList.map((val) => {
                            return (
                                <RestaurantList
                                    key={val.id}
                                    title={val.title}
                                    img={val.img}
                                    waiting={val.waiting}
                                    minAmount={val.minAmount}
                                    tagIcon={val.tagIcon}
                                    shopingBag={val.shopingBag}
                                    featured={val.featured}
                                />
                            )
                        })
                    }
                </ul>
            </article>
        </section>
    )
}