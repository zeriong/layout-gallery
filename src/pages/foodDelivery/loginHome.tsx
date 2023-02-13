import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import loginLogo from "../../assets/delivery-img/delivery-login-logo.svg";
import fiiedStar from "../../assets/delivery-img/filled-star.svg";
import emptyStar from "../../assets/delivery-img/empty-star.svg";
import downArrow from "../../assets/delivery-img/down-arrow.svg";
import userWoman from "../../assets/delivery-img/delivery-girl.svg";
import userMan from "../../assets/delivery-img/delivery-man.svg";
import likeIcon from "../../assets/delivery-img/like.svg";
import badIcon from "../../assets/delivery-img/bad.svg";
import CFNroll from "../../assets/delivery-img/california-roll.png";
import sushi from "../../assets/delivery-img/sushi.png";
import eyeIcon from "../../assets/delivery-img/eyeIcon.svg";
import plusIcon from "../../assets/delivery-img/plusIcon.svg";
import minusIcon from "../../assets/delivery-img/minusIcon.svg";
import filledBall from "../../assets/delivery-img/filled-ball.svg";
import emptyBall from "../../assets/delivery-img/empty-ball.svg";
import checkIcon from "../../assets/delivery-img/checkIcon.svg";

interface Iuser {
    gender: string;
    name: string;
    star: JSX.Element;
    date: string;
    review: string;
    like: string;
    bad: string;
}

interface Iusers extends Array<Iuser> {}
const userList: Iusers = [
    {
        gender: "woman",
        name: "Savannah Miles",
        star: <>
            <img src={fiiedStar} alt=""/>
            <img src={fiiedStar} alt=""/>
            <img src={fiiedStar} alt=""/>
            <img src={fiiedStar} alt=""/>
            <img src={fiiedStar} alt=""/>
        </>,
        date: "10 days ago",
        review: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
        like: "14",
        bad: "4",
    },
    {
        gender: "man",
        name: "Jacob Jones",
        star: <>
            <img src={fiiedStar} alt=""/>
            <img src={fiiedStar} alt=""/>
            <img src={fiiedStar} alt=""/>
            <img src={fiiedStar} alt=""/>
            <img src={emptyStar} alt=""/>
        </>,
        date: "10 days ago",
        review: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
        like: "14",
        bad: "4",
    },
]

const Profile = ({gender, date, review, star, name, bad, like}: Iuser) => {
    return (
        <li className="flex flex-row w-full mb-[14px] [&:not(:last-child)]:border-b border-b-neutral-gray-lightest">
            <div className="w-10 mr-[10.7px] w-full">
                {
                    gender === "woman" ? <img src={userWoman} alt=""/> :
                        gender === "man" ? <img src={userMan} alt=""/> : ""
                }
            </div>
            <article className="w-full">
                <h1 className="h-[18px] subtitle-1---bold-14-20-01px text-neutral-black">
                    {name}
                </h1>
                <figure className="flex">
                    {star}
                    <p className="small-3---bold-10-14-0px text-neutral-gray text-[10px] ml-1">{date}</p>
                </figure>
                <h2 className="body-1---regular-14-20-01px text-[13px] text-neutral-black mt-[10.7px]">
                    {review}
                </h2>
                <figure className="flex items-center h-[30px] w-full mt-1 mb-[14px]">
                    <img src={likeIcon} className={"mr-1"} alt=""/>
                    <p className="mr-3 small-2---semibold-12-16-0px text-neutral-gray-dark">
                        {like}
                    </p>
                    <img src={badIcon} className={"mr-1"} alt=""/>
                    <p className="mr-3 small-2---semibold-12-16-0px text-neutral-gray">
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
                <div className="flex flex-col justify-between w-full h-full sm:max-w-[640px] sm:h-auto px-[15px] sm:pl-[165px] sm:pr-[125px]">
                    <figure>
                        <img src={loginLogo} className={"pb-[60px] w-[80px] pt-5 sm:pt-5 sm:pb-32"} alt=""/>
                    </figure>
                    <article>
                        <div>
                            <p className="h1---bold-60-82-01px text-neutral-black h-[82px] cursor-default">Login</p>
                            <p className="body-1---regular-14-20-01px text-neutral-gray-dark pt-4 pb-8">
                                Sign in with your data that you entered during your registration.
                            </p>
                        </div>
                        <form onSubmit={linkToHomeSubmit}>
                            <div>
                                <label htmlFor="email" className="small-2---semibold-12-16-0px text-neutral-gray-dark mb-1">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="name@example.com"
                                    className="rounded-lg border border-neutral-gray-light p-3 w-full text-[14px] h-[44px] mb-7"
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className="small-2---semibold-12-16-0px text-neutral-gray-dark mb-1 mt-2">Password</label>
                                <input
                                    type="text"
                                    id="password"
                                    placeholder="min, 8 characters"
                                    className="rounded-lg border border-neutral-gray-light p-3 w-full text-[14px] h-[44px] mb-7 relative"
                                />
                                <img src={eyeIcon} className="absolute bottom-10 right-3 cursor-pointer" alt=""/>
                            </div>
                            <div className="flex items-center mb-10">
                                <input onChange={checkHandler} type="checkbox" id="remember-check" className="hidden"/>
                                <label
                                    htmlFor="remember-check"
                                    className={`relative w-5 h-5 rounded border-2  cursor-pointer flex justify-center items-center
                                    ${check ? "bg-primary-default border-primary-default" : "border-neutral-gray-light"}`}
                                >
                                    <img src={checkIcon} className={`${check ? "block" : "hidden"}`} alt=""/>
                                </label>
                                <label htmlFor="remember-check"
                                       className="text-[14px] text-neutral-black pl-3 cursor-pointer w-full">
                                    Keep me logged in
                                </label>
                            </div>
                            <button type="submit" className="mb-7 text-white w-full py-3 px-4 bg-primary-default rounded-lg font-normal text-[14px]">
                                Login
                            </button>
                        </form>
                        <Link to="food-delivery" className="flex justify-center mb-[134px] sm:mb-[106px] text-white w-full text-primary-default font-bold text-[14px]">
                            <p>Forgot password</p>
                        </Link>
                    </article>
                    <div className="flex justify-center items-center h-5 mb-10">
                        <p className="body-1---regular-14-20-01px mr-1">Don't have an account?</p>
                        <Link to="/food-delivery" className="button-1---bold-14-20-04px text-primary-default">Sign up</Link>
                    </div>
                </div>
            </section>
            <section className="flex bg-primary-hover w-full sm:w-[55.6%] justify-center items-center overflow-hidden max-sm:hidden">
                <div className="max-w-[800px] pl-[65px] pr-[71px] pt-12 pb-[84px]">
                    <section className="relative flex pb-[145px]">
                        <article className="relative flex flex-col ml-[30px] w-[313px] h-[436.4px] border-neutral-gray-lightest bg-neutral-white rounded-2xl p-[14.3px] overflow-hidden">
                            <p className="text-[11.6px] font-bold text-neutral-black">Overall rating</p>
                            <div className="flex items-center h-[25px] mb-[25px]">
                                <p className="h-[25px] mr-3 text-primary-default">4.2</p>
                                <figure className="flex items-center mr-1">
                                    <img src={fiiedStar} alt=""/>
                                    <img src={fiiedStar} alt=""/>
                                    <img src={fiiedStar} alt=""/>
                                    <img src={fiiedStar} alt=""/>
                                    <img src={emptyStar} alt=""/>
                                </figure>
                                <p className="small-3---bold-10-14-0px text-[10px] text-neutral-gray">3 votes</p>
                            </div>
                            <p className="absolute left-0 top-[71px] w-full h-[1px] bg-neutral-gray-lightest"/>
                            <span className="absolute py-[10px] px-[14px] right-[14px] top-4 rounded-lg border text-primary-default border-primary-default text-[14px] font-bold">
                                Leave review
                            </span>
                            <p className="flex text-left rounded-lg border border-neutral-gray-light py-[7.2px] px-[10.7px] w-fit mx-auto">
                                <span className="subtitle-2---semibold-13-18-0px text-neutral-gray">Sort by:</span>
                                <span className="subtitle-2---semibold-13-18-0px mr-[7.2px] ml-1 text-neutral-black">Newest first</span>
                                <img src={downArrow} alt=""/>
                            </p>
                            <ul className="mt-[22px]">
                                {
                                    userList.map((val,i) => {
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
                        <article className="bg-neutral-white p-[13px] w-[294px] h-[279px] rounded-xl ml-[27px] mt-8 shadow-login-home-roll">
                            <p className="w-[267px] h-[151px] rounded-lg overflow-hidden">
                                <img src={CFNroll} alt=""></img>
                            </p>
                            <h1 className="mt-[10px] font-bold text-[16px] text-neutral-black">Roll set</h1>
                            <p className="text-[11px] font-normal tracking-[0.2px] text-neutral-gray h-[31px] mb-[9.4px]">Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe.</p>
                            <span className="flex justify-between items-center h-[27px]">
                                <p className="font-extrabold text-[22px] leading-[1.33] text-neutral-black">$ 22.56</p>
                                <svg className="p-[5px] bg-primary-light w-[27px] h-[27px] rounded-[10px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.12 4.22v9.8M4.22 9.12h9.8" stroke="#4E60FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </article>
                        <article className="absolute justify-between flex w-[618px] h-[132px] mb-[] bottom-[68px] p-[13.5px] bg-neutral-white rounded-xl shadow-login-home-nigiri">
                            <div className="flex">
                                <p className="w-[152px] h-[105px] rounded-lg mr-[17px] overflow-hidden">
                                    <img src={sushi} className="relative bottom-11" alt=""/>
                                </p>
                                <div className="w-[270px]">
                                    <h1 className="mt-[10px] font-bold text-[16px] text-neutral-black">Nigiri set</h1>
                                    <p className="text-[11px] font-normal tracking-[0.2px] text-neutral-gray h-[31px] mb-[9.4px]">Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe.</p>
                                    <p className="font-extrabold text-[22px] h-7 text-neutral-black leading-[1.33]">$ 16.80</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between h-[67.7px] w-[112.4px] mt-8">
                                <div className="flex mx-auto text-[12px] font-bold text-neutral-black">
                                    <img src={minusIcon} alt=""/>
                                    <p className="mx-[5px]">1</p>
                                    <img src={plusIcon} alt=""/>
                                </div>
                                <div className="flex px-[13.5px] py-[10px] bg-primary-light rounded-xl">
                                    <svg className="" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.12 4.22v9.8M4.22 9.12h9.8" stroke="#4E60FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p className="text-[12px] font-bold text-primary-default">
                                        Add to cart
                                    </p>
                                </div>
                            </div>
                        </article>
                    </section>
                    <article className="flex flex-col items-center w-[480px] h-auto mx-auto mb-10">
                        <h1 className="w-full h-[42px] text-[32px] text-center font-bold text-white mb-4">
                            Leave reviews for all meals
                        </h1>
                        <p className="text-white text-sm text-center font-[300]">
                            Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
                        </p>
                    </article>
                    <ul className="flex justify-center">
                        <p className="flex gap-2">
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