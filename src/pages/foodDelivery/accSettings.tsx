import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import accountIcon from "../../assets/delivery-img/accountIcon.svg";
import addressIcon from "../../assets/delivery-img/addressIcon.svg";
import paymentIcon from "../../assets/delivery-img/paymentIcon.svg";
import securityIcon from "../../assets/delivery-img/securityIcon.svg";
import avatar from "../../assets/delivery-img/setting-avatar.jpg";
import checkIcon from "../../assets/delivery-img/checkIcon.svg";



interface Isetting {
    id: string;
    img?: string;
    title: string;
    desc?: string;
    i?: number;
}
interface Isettings extends Array<Isetting> {}

const settingList: Isettings = [
    {
        id: "set-account",
        img: accountIcon,
        title: "Account",
        desc: "Personal information",
    },
    {
        id: "set-address",
        img: addressIcon,
        title: "Address",
        desc: "Shippings addresses",
    },
    {
        id: "set-payment",
        img: paymentIcon,
        title: "Payment method",
        desc: "Connected credit cards",
    },
    {
        id: "set-security",
        img: securityIcon,
        title: "Security",
        desc: "Password, 2FA",
    },
];

const Settings = (props: {img?:string, title:string, desc?:string; i:number}) => {
    const navigate = useNavigate();
    const goHome = () => {
        if(props.i > 0){
            navigate('/food-delivery');
        }
        return
    }
    return (
        <li onClick={goHome} className="flex p-4 border border-neutral-gray-lightest bg-white first:border-2 cursor-pointer first:cursor-default first:border-primary-default first:bg-primary-light rounded-2xl">
            <figure className="mr-3">
                <img src={props.img} alt=""/>
            </figure>
            <div>
                <h1 className="text-sm font-bold text-neutral-black">
                    {props.title}
                </h1>
                <p className="text-[13px] font-normal text-neutral-gray-dark">
                    {props.desc}
                </p>
            </div>
        </li>
    )
}

const inputList: Isettings = [
    {
        id: "input-first",
        title: "First name",
        desc: "Jane",
    },
    {
        id: "input-last",
        title: "Last name",
        desc: "Robertson",
    },
    {
        id: "input-email",
        title: "Email",
        desc: "jane.robertson@example.com",
    },
    {
        id: "input-phone",
        title: "Phone number",
        desc: "(217) 555-0113",
    },
];

const InputComponent = (props: {title: string; desc?: string;}) => {
    const [value, setValue] = useState(props.desc);
    const onChange = ( { target: {value} }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(value);
    }
    return (
        <div>
            <p className="text-xs font-[600] text-neutral-gray-dark mb-1 cursor-default">
                {props.title}
            </p>
            <input onChange={onChange} className="w-full p-3 text-sm rounded-xl border border-neutral-gray-light text-neutral-black font-normal" value={value} />
        </div>
    )
}

const checkList: Isettings = [
    {
        id: "New deals",
        title: "New deals",
    },
    {
        id: "Password changes",
        title: "Password changes",
    },
    {
        id: "New restaurants",
        title: "New restaurants",
    },
    {
        id: "Special offers",
        title: "Special offers",
    },
    {
        id: "Order statuses",
        title: "Order statuses",
    },
    {
        id: "Newsletter",
        title: "Newsletter",
    },
];

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
                className={`relative w-5 h-5 rounded border-2 cursor-pointer flex justify-center items-center
                                    ${check ? "bg-primary-default border-primary-default" : "border-neutral-gray-light"}`}
            >
                <img src={checkIcon} className={`${check ? "block" : "hidden"}`} alt=""/>
            </label>
            <label htmlFor={props.title}
                   className="text-[14px] text-neutral-black pl-3 cursor-pointer w-auto font-normal">
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
        <section className="w-full grid sm:flex gap-[48px] sm:gap-[30px]">
            <article className="w-full sm:max-w-[350px]">
                <h1 className="mb-4 text-neutral-black text-xl font-[600]">
                    Settings
                </h1>
                <ul className="grid grid-cols-1 gap-[16px] sm:gap-[12px]">
                    {
                        settingList.map( (val,i) => {
                            return (
                                <Settings key={val.id} img={val.img} title={val.title} desc={val.desc} i={i}/>
                            )
                        })
                    }
                </ul>
            </article>
            <article className="w-full">
                <h1 className="mb-4 text-neutral-black text-xl font-[600] ">
                    Account
                </h1>
                <div className="w-full border border-neutral-gray-lightest rounded-t-2xl pt-5 px-4">
                    <h1 className="text-lg font-bold text-neutral-black h-6">
                        Personal information
                    </h1>
                    <div className="py-4">
                        <p className="text-xs font-[600] text-neutral-gray-dark mb-2">
                            Avatar
                        </p>
                        <div className="flex items-center">
                            <figure className="mr-6">
                                <img src={avatar} alt=""/>
                            </figure>
                            <div className="cursor-pointer py-3 px-4 rounded-lg text-sm font-bold text-primary-default border border-primary-default mr-4">
                                Change
                            </div>
                            <div className="cursor-pointer py-3 px-4 rounded-lg text-sm font-bold text-neutral-gray">
                                Remove
                            </div>
                        </div>
                    </div>
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-y-[32px] gap-x-[16px] mb-[68px]">
                        {
                            inputList.map((val) => {
                                return (
                                    <InputComponent key={val.id} title={val.title} desc={val.desc} />
                                )
                            })
                        }
                    </form>
                    <h1 className="text-lg font-bold text-neutral-black h-6 mb-4">
                        Email notifications
                    </h1>
                    <ul className="grid grid-cols-1 gap-y-[24px] gap-x-[16px] sm:grid-cols-2 pb-10 sm:pb-9">
                        {
                            checkList.map((val) => {
                                return (
                                    <CheckList key={val.id} title={val.title}/>
                                )
                            })
                        }
                    </ul>
                    <div onClick={logout} className="cursor-pointer flex sm:hidden border border-error-default rounded-xl justify-center py-3 px-4 bg-white text-sm font-bold text-error-default mb-5">
                        Log out
                    </div>
                </div>
                <div className="flex justify-between border-b border-x rounded-b-2xl border-neutral-gray-lightest py-5 px-4">
                    <div onClick={logout} className="cursor-pointer hidden sm:flex border border-error-default rounded-lg justify-center items-center py-3 px-4 bg-white text-sm font-bold text-error-default">
                        Log out
                    </div>
                    <div className="w-full sm:w-auto flex gap-[16px]">
                        <div onClick={goHome} className="cursor-pointer w-full sm:w-auto flex border border-error-default rounded-lg justify-center items-center py-3 px-4 bg-white text-sm font-bold text-error-default">
                            Discard changes
                        </div>
                        <div onClick={goHome} className="cursor-pointer w-full sm:w-auto flex rounded-lg justify-center items-center py-3 px-4 bg-primary-default text-sm font-bold text-white">
                            Save changes
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}