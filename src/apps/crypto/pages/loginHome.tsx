import React, {useRef, useState} from "react";
import {AiFillEye} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

import starLoad1 from "../assets/Group 95.svg";
import starLoad2 from "../assets/Group 96.svg";
import starLoad3 from "../assets/Group 97.svg";
import starLoad4 from "../assets/Group 98.svg";
import cancelIcon from "../assets/cancelIcon.svg";
import invisible from "../assets/invisible.svg";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import fingerID from "../assets/fingerID.svg";

export const CryptoLoginHome = () => {
    const [onSignIn, setOnSignIn] = useState(true);
    const [onSignUp, setOnSignUp] = useState(false);
    const [showPW, setShoPW] = useState(false);
    const [toggleSignInMode, setToggleSignInMode] = useState(true);

    const navigate = useNavigate();

    const element = useRef<HTMLButtonElement>(null);

    const signHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(e.target === element.current) {
            setOnSignIn(true);
            setOnSignUp(false);
        } else {
            setOnSignUp(true);
            setOnSignIn(false);
        }
    }
    const signModeHandler = () => {
        return toggleSignInMode ? setToggleSignInMode(false) : setToggleSignInMode(true);
    }

    const showPassword = () => {
        return showPW ? setShoPW(false) : setShoPW(true);
    }

    const goHome = () => {
        navigate('/crypto');
    }

    return (
        <section className="relative w-full h-full min-h-[740px] m-sm:min-h-[896px] bg-gray-200 z-20">
            <div className="absolute w-full h-full px-24 max-w-[420px] bg-crypto-dark overflow-hidden left-1/2 -translate-x-1/2">
                <img src={cancelIcon} className="absolute top-20 m-sm:top-37px left-14px w-36 m-sm:w-44" alt=""/>
                <figure className="-z-10">
                    <img src={starLoad1} className="absolute w-62px h-52px left-42px top-88px" alt=""/>
                    <img src={starLoad2} className="absolute w-59px h-91px right-62px -top-28px" alt=""/>
                    <img src={starLoad3} className="absolute w-100px h-[112px] left-[330px] top-[459px]" alt=""/>
                    <img src={starLoad4} className="absolute w-31px h-84px left-50px top-[578px]" alt=""/>
                </figure>
                <div className="relative mt-80 m-sm:mt-[115px] w-full h-auto p-4 rounded-xl text-14 font-normal bg-crypto-dark-two text-center grid grid-cols-2 gap-4px">
                    <button className={`${onSignIn ? "text-crypto-silver bg-crypto-dark" : "text-crypto-warm-grey"} rounded-xl py-10px`} onClick={signHandler} ref={element}>
                        Sign in
                    </button>
                    <button className={`${onSignUp ? "text-crypto-silver bg-crypto-dark" : "text-crypto-warm-grey"} rounded-xl `} onClick={signHandler}>
                        Sign up
                    </button>
                </div>
                <form
                    className="mt-30 m-sm:mt-40 w-full relative z-20"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <h1 className=" w-full h-full flex text-white text-28 m-sm:text-32 font-bold">
                        {onSignIn ? "Sign in" : "Sign up"}
                    </h1>
                    <div className="mt-26 m-sm:mt-44">
                        <div className="flex justify-between mb-8 m-sm:mb-12">
                            <p className="text-13 m-sm:text-14 text-crypto-cool-grey">
                                {toggleSignInMode ? "Email" : "Mobile Number"}
                            </p>
                            <button type="button" className="text-13 m-sm:text-14 text-crypto-seafoam-blue" onClick={signModeHandler}>
                                {toggleSignInMode ? "Sign in with mobile" : "Sign in with email"}
                            </button>
                        </div>
                        <input className="w-full rounded-[14px] p-13 m-sm:p-18 text-crypto-warm-grey bg-crypto-dark-two text-12 m-sm:text-14" placeholder="Enter your email"/>
                    </div>
                    <div className="w-full flex-col flex items-start mt-16 m-sm:mt-30px">
                        <p className="text-13 m-sm:text-14 text-crypto-cool-grey mb-8 m-sm:mb-12">
                            Password
                        </p>
                        <div className="relative w-full h-auto">
                            <input className="w-full rounded-[14px] p-13 m-sm:p-18 text-crypto-warm-grey bg-crypto-dark-two text-12 m-sm:text-14" type={showPW ? "text" : "password"} placeholder="Enter your password"/>
                            {
                                showPW ? <AiFillEye className="absolute w-44 h-44 top-1/2 -translate-y-1/2 right-4 p-10px fill-crypto-warm-grey cursor-pointer" size="100" onClick={showPassword}/> :
                                    <img src={invisible} className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer" alt="" onClick={showPassword}/>
                            }
                        </div>
                    </div>
                    <button onClick={goHome} className="mt-8 text-crypto-seafoam-blue text-13 m-sm:text-14 block">
                        Forgot password?
                    </button>
                    <button onClick={goHome} className="mt-28 m-sm:mt-40 py-12 m-sm:py-16 w-full h-auto block text-center rounded-2xl bg-crypto-seafoam-blue text-16 m-sm:text-18 text-crypto-dark-three font-medium">
                        Sign in
                    </button>
                </form>
                <div className="w-full h-fit flex relative mt-16 m-sm:mt-20">
                    <div className="absolute h-1 w-full bg-crypto-ball-dark opacity-50 top-1/2 -translate-y-1/2"/>
                    <button onClick={goHome} className="relative z-30 text-12 m-sm:text-14 text-crypto-warm-grey text-center block w-fit m-auto px-9 bg-crypto-dark">
                        Or login with
                    </button>
                </div>
                <div className="mt-16 m-sm:mt-20 grid grid-cols-2 gap-20px">
                    <button onClick={goHome} className="flex relative justify-center items-center py-9 m-sm:py-16 bg-white rounded-2xl text-crypto-dark text-13 m-sm:text-14">
                        <img src={facebook} className="mr-10" alt=""/>
                        <p>
                            Facebook
                        </p>
                    </button>
                    <button onClick={goHome} className="flex justify-center items-center py-9 m-sm:py-16 bg-white rounded-2xl text-crypto-dark text-13 m-sm:text-14">
                        <img src={google} className="mr-10" alt=""/>
                        <p>
                            Google
                        </p>
                    </button>
                </div>
                <img src={fingerID} onClick={goHome} className="fixed bottom-47 left-1/2 -translate-x-1/2 cursor-pointer" alt=""/>
            </div>
        </section>
    )
}