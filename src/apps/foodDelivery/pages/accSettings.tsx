import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import avatar from "../assets/setting-avatar.jpg";
import checkIcon from "../assets/checkIcon.svg";
import {foodDeliveryCheckList, foodDeliveryInputList, foodDeliverySettingList} from "./constants";

const Settings = (props: {img?:string, title:string, desc?:string; i:number}) => {
    const navigate = useNavigate();
    const goHome = () => {
        if(props.i > 0){
            navigate('/food-delivery');
        }
        return
    }
    return (
        <li onClick={goHome} className="flex p-16 border border-neutral-gray-lightest bg-white first:border-2 cursor-pointer first:cursor-default first:border-primary-default first:bg-primary-light rounded-2xl">
            <figure className="mr-12">
                <img src={props.img} alt=""/>
            </figure>
            <div>
                <h1 className="text-sm font-bold text-neutral-black">
                    {props.title}
                </h1>
                <p className="text-13 font-normal text-neutral-gray-dark">
                    {props.desc}
                </p>
            </div>
        </li>
    )
}

const InputComponent = (props: {title: string; desc?: string;}) => {
    const [value, setValue] = useState(props.desc);
    const onChange = ( { target: {value} }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(value);
    }
    return (
        <div>
            <p className="text-xs font-[600] text-neutral-gray-dark mb-4 cursor-default">
                {props.title}
            </p>
            <input onChange={onChange} className="w-full p-12 text-14 rounded-xl border border-neutral-gray-light text-neutral-black font-normal" value={value} />
        </div>
    )
}

const CheckList = (props: {title:string}) => {
    const [check, setCheck] = useState(true);
    const checkHandler = () => {
        return check ? setCheck(false) : setCheck(true);
    }
    return (
        <li className="flex items-center h-auto w-auto">
            <input onChange={checkHandler} type="checkbox" id={props.title} className="hidden"/>
            <label
                htmlFor="remember-check"
                onClick={checkHandler}
                className={`relative w-20 h-20 rounded border-2 cursor-pointer flex justify-center items-center
                                    ${check ? "bg-primary-default border-primary-default" : "border-neutral-gray-light"}`}
            >
                <img src={checkIcon} className={`${check ? "block" : "hidden"}`} alt=""/>
            </label>
            <label htmlFor={props.title}
                   className="text-14 text-neutral-black pl-12 cursor-pointer w-auto font-normal">
                {props.title}
            </label>
        </li>
    )
}

export const AccSettings = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/food-delivery');
    }
    const logout = () => {
        navigate('/food-delivery-login');
    }
    return (
        <section className="w-full grid sm:flex gap-48px sm:gap-30px">
            <article className="w-full sm:max-w-[350px]">
                <h1 className="mb-16 text-neutral-black text-20 font-[600]">
                    Settings
                </h1>
                <ul className="grid grid-cols-1 gap-16px sm:gap-12px">
                    {
                        foodDeliverySettingList.map( (val,i) => {
                            return (
                                <Settings key={val.id} img={val.img} title={val.title} desc={val.desc} i={i}/>
                            )
                        })
                    }
                </ul>
            </article>
            <article className="w-full">
                <h1 className="mb-16 text-neutral-black text-20 font-[600] ">
                    Account
                </h1>
                <div className="w-full border border-neutral-gray-lightest rounded-t-2xl pt-20 px-16">
                    <h1 className="text-18 font-bold text-neutral-black h-24">
                        Personal information
                    </h1>
                    <div className="py-16">
                        <p className="text-12 font-[600] text-neutral-gray-dark mb-8">
                            Avatar
                        </p>
                        <div className="flex items-center">
                            <figure className="mr-24">
                                <img src={avatar} alt=""/>
                            </figure>
                            <button className="cursor-pointer py-12 px-16 rounded-lg text-14 font-bold text-primary-default border border-primary-default mr-16">
                                Change
                            </button>
                            <button className="cursor-pointer py-12 px-16 rounded-lg text-14 font-bold text-neutral-gray">
                                Remove
                            </button>
                        </div>
                    </div>
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-y-32px gap-x-16px mb-68">
                        {
                            foodDeliveryInputList.map((val) => {
                                return (
                                    <InputComponent key={val.id} title={val.title} desc={val.desc} />
                                )
                            })
                        }
                    </form>
                    <h1 className="text-18 font-bold text-neutral-black h-24 mb-16">
                        Email notifications
                    </h1>
                    <ul className="grid grid-cols-1 gap-y-24px gap-x-16px sm:grid-cols-2 pb-40 sm:pb-36">
                        {
                            foodDeliveryCheckList.map((val) => {
                                return (
                                    <CheckList key={val.id} title={val.title}/>
                                )
                            })
                        }
                    </ul>
                    <button onClick={logout} className="cursor-pointer flex sm:hidden border border-error-default rounded-xl justify-center py-12 px-16 bg-white text-14 font-bold text-error-default mb-20">
                        Log out
                    </button>
                </div>
                <div className="flex justify-between border-b border-x rounded-b-2xl border-neutral-gray-lightest py-20 px-16">
                    <button onClick={logout} className="cursor-pointer hidden sm:flex border border-error-default rounded-lg justify-center items-center py-12 px-16 bg-white text-14 font-bold text-error-default">
                        Log out
                    </button>
                    <div className="w-full sm:w-auto flex gap-16px">
                        <button onClick={goHome} className="cursor-pointer w-full sm:w-auto flex border border-error-default rounded-lg justify-center items-center py-12 px-16 bg-white text-14 font-bold text-error-default">
                            Discard changes
                        </button>
                        <button onClick={goHome} className="cursor-pointer w-full sm:w-auto flex rounded-lg justify-center items-center py-12 px-16 bg-primary-default text-14 font-bold text-white">
                            Save changes
                        </button>
                    </div>
                </div>
            </article>
        </section>
    )
}