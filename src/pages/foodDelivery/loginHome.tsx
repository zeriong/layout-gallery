import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {Bad, DownArrow, EStar, FStar, Like, LoginLogo, UserMan, UserWoman} from "../../styles/exportDeliveryImgs";
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
        star: <><FStar/><FStar/><FStar/><FStar/><FStar/></>,
        date: "10 days ago",
        review: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
        like: "14",
        bad: "4",
    },
    {
        gender: "man",
        name: "Jacob Jones",
        star: <><FStar/><FStar/><FStar/><FStar/><EStar/></>,
        date: "10 days ago",
        review: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
        like: "14",
        bad: "4",
    },
]
const Profile = ({gender, date, review, star, name, bad, like}: Iuser) => {
    return (
        <li className="flex flex-row w-full mb-[14px] [&:not(:last-child)]:border-b border-b-neutral-gray-lightest">
            <p className="w-10 mr-[10.7px] w-full">
                {gender === "woman" ? <UserWoman/> : gender === "man" ? <UserMan/> : ""}
            </p>
            <article className="w-full">
                <h1 className="h-[18px] subtitle-1---bold-14-20-01px text-neutral-black">
                    {name}
                </h1>
                <figure className="flex">
                    {star}
                    <span className="small-3---bold-10-14-0px text-neutral-gray text-[10px] ml-1">{date}</span>
                </figure>
                <h2 className="body-1---regular-14-20-01px text-[14px] text-neutral-black mt-[10.7px]">
                    {review}
                </h2>
                <figure className="flex items-center h-[30px] w-full mt-1 mb-[14px]">
                    <Like className={"mr-1"}/>
                    <p className="mr-3 small-2---semibold-12-16-0px text-neutral-gray-dark">
                        {like}
                    </p>
                    <Bad className={"mr-1"}/>
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
    const checkboxSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const linkToHomeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate("/food-delivery");
    }
    return (
        <main className="relative flex h-full overflow-auto justify-center transition-all duration-300 min-w-[1440px] min-h-[860px]">
            <section className="flex bg-neutral-white w-[44.4%] justify-center items-center overflow-hidden">
                <article className="w-auto max-w-[640px] h-auto pl-[165px] pr-[125px]">
                    <LoginLogo className={"pt-5 pb-32"}/>
                    <article>
                        <h1 className="h1---bold-60-82-01px text-neutral-black h-[82px] cursor-default">Login</h1>
                        <p className="body-1---regular-14-20-01px text-neutral-gray-dark pt-4 pb-8">Sign in with your data that
                            you entered during your registration.</p>
                    </article>
                    <form onSubmit={linkToHomeSubmit}>
                        <label>
                            <p className="small-2---semibold-12-16-0px text-neutral-gray-dark mb-1">Email</p>
                            <input
                                type="text"
                                placeholder="name@example.com"
                                className="rounded-lg border border-neutral-gray-light p-3 w-full text-[14px] h-[44px] mb-5"
                            />
                        </label>
                        <label>
                            <p className="small-2---semibold-12-16-0px text-neutral-gray-dark mb-1 mt-2">Password</p>
                            <input
                                type="text"
                                placeholder="min, 8 characters"
                                className="rounded-lg border border-neutral-gray-light p-3 w-full text-[14px] h-[44px] mb-5"
                            />
                        </label>
                        <button type="submit"/>
                    </form>
                    <form onSubmit={checkboxSubmit} className="flex items-center mb-10">
                        <label className="flex cursor-pointer">
                            <input
                                type="checkbox"
                                name="check"
                                className="relative w-5 h-5 appearance-none checked:bg-blue-500 rounded border-2
                                border-neutral-gray-light checked:after:content-['✔'] after:absolute
                                after:-bottom-[3px] after:left-[1px] after:text-white mr-3 cursor-pointer"
                            />
                            <p className="body-1---regular-14-20-01px text-[14px] text-neutral-black">Keep me logged in</p>
                        </label>
                    </form>
                    <form onSubmit={linkToHomeSubmit} className="flex flex-col justify-center items-center mb-[94px]">
                        <button type="submit"
                                className="mb-4 text-white w-full py-3 px-4 bg-primary-default rounded-lg font-normal text-[14px]"
                        >
                            Login
                        </button>
                        <button type="submit"
                                className="mb-4 text-white py-3 px-4 text-primary-default font-bold text-[14px]"
                        >
                            Forgot password
                        </button>
                    </form>
                    <article className="flex justify-center items-center h-5 mb-10">
                        <p className="body-1---regular-14-20-01px mr-1">Don't have an account?</p>
                        <Link to="/food-delivery" className="button-1---bold-14-20-04px text-primary-default">Sign up</Link>
                    </article>
                </article>
            </section>
            <section className="flex bg-primary-hover w-[55.6%] justify-center items-center overflow-hidden">
                <section className="max-w-[800px] pl-[65px] pr-[71px] pt-12 pb-[84px]">
                    <section>
                        <article className="relative flex flex-col ml-[30px] w-[313px] h-[436.4px] border-neutral-gray-lightest bg-neutral-white rounded-2xl p-[14.3px] overflow-hidden">
                            <h5 className="text-[11.6px] font-bold text-neutral-black">Overall rating</h5>
                            <p className="flex items-center h-[25px] mb-[25px]">
                                <span className="h-[25px] mr-3 text-primary-default">4.2</span>
                                <figure className="flex items-center mr-1">
                                    <FStar/><FStar/><FStar/><FStar/>
                                    <EStar/>
                                </figure>
                                <span className="small-3---bold-10-14-0px text-[10px] text-neutral-gray">3 votes</span>
                            </p>
                            <div className="absolute left-0 top-[71px] w-full h-[1px] bg-neutral-gray-lightest"/>
                            <span className="absolute py-[10px] px-[14px] right-[14px] top-4 rounded-lg border text-primary-default border-primary-default text-[14px] font-bold">
                                Leave review
                            </span>
                            <p className="flex text-left rounded-lg border border-neutral-gray-light py-[7.2px] px-[10.7px] w-fit mx-auto">
                                <span className="subtitle-2---semibold-13-18-0px text-neutral-gray">Sort by:</span>
                                <span className="subtitle-2---semibold-13-18-0px mr-[7.2px] ml-1 text-neutral-black">Newest first</span>
                                <DownArrow/>
                            </p>
                            <ul className="mt-[22px]">
                                {userList.map((val,i,arr) => {
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
                                })}
                            </ul>
                        </article>
                        <article>
                        </article>
                    </section>
                    <article></article>
                    <ul></ul>
                </section>
            </section>
        </main>
    )
}