import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import pizzaI from "../../assets/delivery-img/pizza-e.svg";
import burgerI from "../../assets/delivery-img/burger-e.svg";
import BBQI from "../../assets/delivery-img/meat-e.svg";
import sushiI from "../../assets/delivery-img/sushi-e.svg";
import veganI from "../../assets/delivery-img/broccoli-e.svg";
import dessertI from "../../assets/delivery-img/cake-e.svg";

import RoyalSushi from "../../assets/delivery-img/component-img-1.png";
import BurgersPizza from "../../assets/delivery-img/component-img-2.png";
import NinjaSushi from "../../assets/delivery-img/component-img-3.png";
import RollHouse from "../../assets/delivery-img/component-img-4.png";
import KimbobHeaven from "../../assets/delivery-img/component-img-5.png";
import USARolls from "../../assets/delivery-img/component-img-6.png";
import clockIcon from "../../assets/delivery-img/clockIcon.svg";
import emptyShopingBag from "../../assets/delivery-img/emptyShopingBagIcon.svg";
import filledShopingBag from "../../assets/delivery-img/filledShopingBagIcon.svg";
import introDessert from "../../assets/delivery-img/dessert.png";
import introBurger from "../../assets/delivery-img/burger.png";

interface ImainContent {
    id: string;
    title: string;
    food?: string;
    img: string;
    tagIcon?: string[];
    waiting?: string;
    minAmount?: string;
    shopingBag?: number;
    featured?: boolean;
    summary?: string;
    bg?: string;
    text?: string;
}
interface ImainContents extends Array<ImainContent> {}

const introEvent:ImainContents = [
    {
        id: "e1",
        title: "20% OFF",
        food: "All desserts",
        img: introDessert,
        summary: "Deserty",
        bg: "bg-primary-light",
        text: "text-primary-default",
    },
    {
        id: "e2",
        title: "50% OFF",
        food: "Big Burgers",
        img: introBurger,
        summary: "Fooddies",
        bg: "bg-secondary-light",
        text: "text-secondary-default",
    },
];

const IntroEvent = (props: {title:string, food?:string, img:string, summary?:string, bg?:string, text?:string}) => {
    return (
        <div className={`flex flex-col-reverse sm:flex sm:flex-row w-full h-[276px] sm:h-[188px] rounded-2xl ${props.bg}`}>
            <figure className="m-auto sm:m-0">
                <img src={props.img} alt=""/>
            </figure>
            <article className="flex justify-between sm:justify-start relative top-9 sm:top-0 sm:block p-4 sm:p-6 pl-4">
                <div>
                    <p className="text-[20px] text-neutral-black font-[600]">
                        {props.food}
                    </p>
                    <h1 className={`text-[40px] ${props.text} font-extrabold mb-0 sm:mb-9`}>
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

const foodListArr:ImainContents = [
    {
        id: "FL1",
        title: "pizza",
        img:pizzaI,
    },
    {
        id: "FL2",
        title: "Burger",
        img:burgerI,
    },
    {
        id: "FL3",
        title: "BBQ",
        img:BBQI,
    },
    {
        id: "FL4",
        title: "Sushi",
        img:sushiI,
    },
    {
        id: "FL5",
        title: "Vegan",
        img:veganI,
    },
    {
        id: "FL6",
        title: "Desserts",
        img:dessertI,
    },
];

export const FoodList = (props: { title:string, img:string }) => {
    const [clicked, setClicked] = useState(false);
    const clickedSensor = () => {
        return clicked ? setClicked(false) : setClicked(true);
    }
    return(
        <li
            className={`w-full h-20 flex flex-col justify-center text-center py-[14px] rounded-xl border border-neutral-gray-lightest bg-white
            hover:border-primary-hover hover:bg-primary-lightest font-bold text-neutral-gray-dark text-[13px] cursor-pointer
            ${clicked ? "border-2 bg-primary-light border-primary-default text-primary-default" : ""}`}
            onClick={clickedSensor}
        >
            <figure className="mb-3 mx-auto">
                <img src={props.img} alt=""/>
            </figure>
            <p className="px-[18px]">
                {props.title}
            </p>
        </li>
    )
}

const restaurantListArr:ImainContents = [
    {
        id: "RTR1",
        title: "Royal Sushi House",
        img:RoyalSushi,
        waiting: "30~40",
        minAmount: "$32",
        tagIcon: [sushiI],
        shopingBag: 0,
        featured: true,
    },
    {
        id: "RTR2",
        title: "Burgers & Pizza",
        img: BurgersPizza,
        waiting: "40~60",
        minAmount: "$24",
        tagIcon: [burgerI,pizzaI],
        shopingBag: 2,
        featured: true,
    },
    {
        id: "RTR3",
        title: "Ninja sushi",
        img: NinjaSushi,
        waiting: "20~40",
        minAmount: "$40",
        tagIcon: [sushiI],
        shopingBag: 0,
    },
    {
        id: "RTR4",
        title: "Roll House",
        img: RollHouse,
        waiting: "30~40",
        minAmount: "$40",
        tagIcon: [sushiI],
        shopingBag: 0,
    },
    {
        id: "RTR5",
        title: "Sushi Kimbob Heaven",
        img: KimbobHeaven,
        waiting: "20~30",
        minAmount: "$100",
        tagIcon: [sushiI],
        shopingBag: 0,
    },
    {
        id: "RTR6",
        title: "USA Rolls",
        img: USARolls,
        waiting: "30~40",
        minAmount: "$15",
        tagIcon: [sushiI],
        shopingBag: 0,
    },
];

const RestaurantList = ( props: {
    title: string, img: string, waiting?: string, minAmount?: string, tagIcon?: string[], shopingBag?: number, featured?: boolean;}) => {
    const navigate = useNavigate();
    return(
        <li className="w-full h-[276px] rounded-2xl overflow-hidden border border-neutral-gray-lightest" onClick={()=>navigate('acc-settings')}>
            <figure className="relative flex items-center overflow-hidden h-[160px] cursor-pointer">
                {
                    props.featured ? (
                        <p className="absolute flex items-center bg-primary-default text-white px-4 py-2 font-bold text-[11px] rounded-bl-xl right-0 top-0 h-8">
                            FEATURED
                        </p>
                    ) : ""
                }
                <img src={props.img} className="w-full h-auto" alt=""/>
            </figure>
            <article className="flex w-full h-full max-h-[116px] flex-col justify-between p-4">
                <div className="w-full">
                    <div className="flex relative mb-[6px]">
                        <h1 className="text-lg text-neutral-black font-bold cursor-pointer">
                            {props.title}
                        </h1>
                        <figure className="absolute right-0 cursor-pointer">
                            {props.shopingBag === 0 ? (
                                <img src={emptyShopingBag} alt=""/>
                            ) : (
                                <div className="relative">
                                    <div className="flex items-center justify-center absolute w-4 h-4 bg-primary-default text-[1px] font-normal rounded-md text-white text-center border border-white p-[8px] -right-[7px] -top-2">
                                        {props.shopingBag}
                                    </div>
                                    <img src={filledShopingBag} alt=""/>
                                </div>
                            )}
                        </figure>
                    </div>
                    <div className="flex items-center text-neutral-gray font-[600] text-xs">
                        <img src={clockIcon} alt=""/>
                        <p className="ml-[6px]">
                            {`${props.waiting} min`}
                        </p>
                        <div className="w-[3px] h-[3px] rounded-full bg-primary-default mx-2"/>
                        <p className="ml-[6px]">
                            {`${props.minAmount} min sum`}
                        </p>
                    </div>
                </div>
                <ul className="flex gap-[8px]">
                    {
                        props.tagIcon?.map((val,i) => {
                            return (
                                <li key={i+"tagIcon"} className="w-fit bg-neutral-gray-lightest rounded-xl">
                                    <figure className="flex justify-center items-center h-6 py-[6px] px-[10px] cursor-pointer">
                                        <img src={val} className="w-3" alt=""/>
                                        <p className="text-neutral-gray-dark text-[12px] font-[600] ml-2">
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
            <article className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                {
                    introEvent.map((val) => {
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
            <article className="h-auto w-full mt-8">
                <ul className="grid grid-cols-3 sm:grid-cols-6 flex-auto w-full gap-[15px] sm:gap-[30px]">
                    {
                        foodListArr.map((val) => {
                                return (
                                    <FoodList key={val.id} title={val.title} img={val.img}/>
                                )
                        })
                    }
                </ul>
            </article>
            <article>
                <h1 className="text-xl font-[600] mt-10 mb-4 text-neutral-black">
                    Nearby restaurants
                </h1>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
                    {
                        restaurantListArr.map((val) => {
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