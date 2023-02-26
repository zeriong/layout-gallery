import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import loginLogo from "../assets/delivery-login-logo.svg";
import fiiedStar from "../assets/filled-star.svg";
import emptyStar from "../assets/empty-star.svg";
import downArrow from "../assets/down-arrow.svg";
import userWoman from "../assets/delivery-girl.svg";
import userMan from "../assets/delivery-man.svg";
import likeIcon from "../assets/like.svg";
import badIcon from "../assets/bad.svg";
import CFNroll from "../assets/california-roll.png";
import sushi from "../assets/sushi.png";
import eyeIcon from "../assets/eyeIcon.svg";
import plusIcon from "../assets/plusIcon.svg";
import minusIcon from "../assets/minusIcon.svg";
import filledBall from "../assets/filled-ball.svg";
import emptyBall from "../assets/empty-ball.svg";
import checkIcon from "../assets/checkIcon.svg";
import {IloginHomeUser, loginHomeUserList} from "./constants";

const Profile = ({gender, date, review, star, name, bad, like}: IloginHomeUser) => {
    return (
        <li className="flex flex-row w-full mb-14 [&:not(:last-child)]:border-b border-b-neutral-gray-lightest">
            <div className="w-40 mr-11 w-full">
                {
                    gender === "woman" ? <img src={userWoman} alt=""/> :
                        gender === "man" ? <img src={userMan} alt=""/> : ""
                }
            </div>
            <article className="w-full">
                <h1 className="h-18 text-14 font-bold text-neutral-black">
                    {name}
                </h1>
                <figure className="flex">
                    <img src={star >= 1 ? fiiedStar : emptyStar} alt=""/>
                    <img src={star >= 2 ? fiiedStar : emptyStar} alt=""/>
                    <img src={star >= 3 ? fiiedStar : emptyStar} alt=""/>
                    <img src={star >= 4 ? fiiedStar : emptyStar} alt=""/>
                    <img src={star === 5 ? fiiedStar : emptyStar} alt=""/>
                    <p className="font-bold text-neutral-gray text-10 ml-4">{date}</p>
                </figure>
                <h2 className="text-13 text-neutral-black mt-11">
                    {review}
                </h2>
                <figure className="flex items-center h-30 w-full mt-4 mb-14">
                    <img src={likeIcon} className={"mr-1"} alt=""/>
                    <p className="mr-12 text-12 font-semibold text-neutral-gray-dark">
                        {like}
                    </p>
                    <img src={badIcon} className={"mr-1"} alt=""/>
                    <p className="mr-12 text-12 font-semibold text-neutral-gray">
                        {bad}
                    </p>
                </figure>
            </article>
        </li>
    )
}

export const LoginHome = () => {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);

    const linkToHomeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate("/food-delivery");
    }

    const checkHandler = () => {
        return check ? setCheck(false) : setCheck(true);
    }

    return (
        <main className="relative flex w-full h-full overflow-auto justify-center transition-all duration-300 sm:min-w-[1440px] sm:min-h-[860px]">
            <section className="flex bg-neutral-white w-full min-h-[839px] sm:h-auto sm:w-[44.4%] justify-center items-center overflow-hidden">
                <div className="flex flex-col justify-between w-full h-full sm:max-w-[640px] sm:h-auto px-15 sm:pl-165 sm:pr-125">
                    <figure>
                        <img src={loginLogo} className={"pb-60 w-80 pt-20 sm:pt-20 sm:pb-128"} alt=""/>
                    </figure>
                    <article>
                        <div>
                            <p className="text-60 leading-tight font-bold text-neutral-black h-82 cursor-default">Login</p>
                            <p className="leading-normal text-neutral-gray-dark pt-12 pb-32">
                                Sign in with your data that you entered during your registration.
                            </p>
                        </div>
                        <form onSubmit={linkToHomeSubmit}>
                            <div>
                                <label htmlFor="email" className="text-14 leading-tight font-semibold text-neutral-gray-dark mb-4">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="name@example.com"
                                    className="rounded-lg border border-neutral-gray-light p-12 w-full text-14 h-44 mb-28"
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className="text-12 leading-tight font-semibold text-neutral-gray-dark mb-4 mt-8">Password</label>
                                <input
                                    type="text"
                                    id="password"
                                    placeholder="min, 8 characters"
                                    className="rounded-lg border border-neutral-gray-light p-12 w-full text-14 h-44 mb-28 relative"
                                />
                                <img src={eyeIcon} className="absolute bottom-40 right-12 cursor-pointer" alt=""/>
                            </div>
                            <div className="flex items-center mb-40">
                                <input onChange={checkHandler} type="checkbox" id="remember-check" className="hidden"/>
                                <label
                                    htmlFor="remember-check"
                                    className={`relative w-20 h-20 rounded border-2  cursor-pointer flex justify-center items-center
                                    ${check ? "bg-primary-default border-primary-default" : "border-neutral-gray-light"}`}
                                >
                                    <img src={checkIcon} className={`${check ? "block" : "hidden"}`} alt=""/>
                                </label>
                                <label htmlFor="remember-check"
                                       className="text-14 text-neutral-black pl-12 cursor-pointer w-full">
                                    Keep me logged in
                                </label>
                            </div>
                            <button type="submit" className="mb-28 text-white w-full py-12 px-16 bg-primary-default rounded-lg font-normal text-14">
                                Login
                            </button>
                        </form>
                        <Link to="food-delivery" className="flex justify-center mb-134 sm:mb-106 text-white w-full text-primary-default font-bold text-14">
                            <p>Forgot password</p>
                        </Link>
                    </article>
                    <div className="flex justify-center items-center h-20 mb-40">
                        <p className="leading-normal mr-4">Don't have an account?</p>
                        <Link to="/food-delivery" className="text-12 leading-normal text-primary-default">Sign up</Link>
                    </div>
                </div>
            </section>
            <section className="flex bg-primary-hover w-full sm:w-[55.6%] justify-center items-center overflow-hidden max-sm:hidden">
                <div className="max-w-[800px] pl-65 pr-71 pt-48 pb-84">
                    <section className="relative flex pb-145">
                        <article className="relative flex flex-col ml-30 w-[313px] h-[436.4px] border-neutral-gray-lightest bg-neutral-white rounded-2xl p-15 overflow-hidden">
                            <p className="text-12 font-bold text-neutral-black">Overall rating</p>
                            <div className="flex items-center h-25 mb-25">
                                <p className="h-25 mr-12 text-primary-default">4.2</p>
                                <figure className="flex items-center mr-4">
                                    <img src={fiiedStar} alt=""/>
                                    <img src={fiiedStar} alt=""/>
                                    <img src={fiiedStar} alt=""/>
                                    <img src={fiiedStar} alt=""/>
                                    <img src={emptyStar} alt=""/>
                                </figure>
                                <p className="leading-mormal font-bold text-10 text-neutral-gray">3 votes</p>
                            </div>
                            <p className="absolute left-0 top-71 w-full h-1 bg-neutral-gray-lightest"/>
                            <span className="absolute py-[10px] px-[14px] right-[14px] top-4 rounded-lg border text-primary-default border-primary-default text-[14px] font-bold">
                                Leave review
                            </span>
                            <p className="flex text-left rounded-lg border border-neutral-gray-light py-8 px-11 w-fit mx-auto">
                                <span className="text-14 leading-normal font-bold text-neutral-gray">Sort by:</span>
                                <span className="text-14 leading-normal font-bold mr-8 ml-1 text-neutral-black">Newest first</span>
                                <img src={downArrow} alt=""/>
                            </p>
                            <ul className="mt-22">
                                {
                                    loginHomeUserList.map((val,i) => {
                                        return <Profile
                                            key={i}
                                            gender={val.gender}
                                            name={val.name}
                                            star={val.star}
                                            date={val.date}
                                            review={val.review}
                                            like={val.like}
                                            bad={val.bad}
                                        />
                                    })
                                }
                            </ul>
                        </article>
                        <article className="bg-neutral-white p-13 w-[294px] h-[279px] rounded-xl ml-27 mt-32 shadow-login-home-roll">
                            <p className="w-[267px] h-151 rounded-lg overflow-hidden">
                                <img src={CFNroll} alt=""></img>
                            </p>
                            <h1 className="mt-10 font-bold text-16 text-neutral-black">Roll set</h1>
                            <p className="text-11 font-normal tracking-[0.2px] text-neutral-gray h-31 mb-10">Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe.</p>
                            <span className="flex justify-between items-center h-27">
                                <p className="font-extrabold text-22 leading-[1.33] text-neutral-black">$ 22.56</p>
                                <svg className="p-5 bg-primary-light w-27 h-27 rounded-[10px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.12 4.22v9.8M4.22 9.12h9.8" stroke="#4E60FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </article>
                        <article className="absolute justify-between flex w-[618px] h-132 bottom-68 p-14 bg-neutral-white rounded-xl shadow-login-home-nigiri">
                            <div className="flex">
                                <p className="w-152 h-105 rounded-lg mr-17 overflow-hidden">
                                    <img src={sushi} className="relative bottom-44" alt=""/>
                                </p>
                                <div className="w-[270px]">
                                    <h1 className="mt-10 font-bold text-16 text-neutral-black">Nigiri set</h1>
                                    <p className="text-11 font-normal tracking-[0.2px] text-neutral-gray h-31 mb-10">Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe.</p>
                                    <p className="font-extrabold text-22 h-28 text-neutral-black leading-[1.33]">$ 16.80</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between h-68 w-113 mt-32">
                                <div className="flex mx-auto text-12 font-bold text-neutral-black">
                                    <img src={minusIcon} alt=""/>
                                    <p className="mx-5">1</p>
                                    <img src={plusIcon} alt=""/>
                                </div>
                                <div className="flex px-14 py-10 bg-primary-light rounded-xl">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.12 4.22v9.8M4.22 9.12h9.8" stroke="#4E60FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p className="text-12 font-bold text-primary-default">
                                        Add to cart
                                    </p>
                                </div>
                            </div>
                        </article>
                    </section>
                    <article className="flex flex-col items-center w-[480px] h-auto mx-auto mb-40">
                        <h1 className="w-full h-42 text-32 text-center font-bold text-white mb-16">
                            Leave reviews for all meals
                        </h1>
                        <p className="text-white text-14 text-center font-[300]">
                            Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
                        </p>
                    </article>
                    <ul className="flex justify-center">
                        <p className="flex gap-8px">
                            <img src={emptyBall} alt=""/>
                            <img src={filledBall} alt=""/>
                            <img src={emptyBall} alt=""/>
                            <img src={emptyBall} alt=""/>
                        </p>
                    </ul>
                </div>
            </section>
        </main>
    )
}