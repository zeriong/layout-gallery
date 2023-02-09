import React from "react";
import loginLogo from "../../styles/delivery-img/delivery-login-logo.svg";
import {Link, useNavigate} from "react-router-dom";
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
        <div className="relative flex h-full overflow-auto justify-center transition-all duration-300 min-w-[1440px] min-h-[860px]">
            <section className="flex bg-neutral-white w-[44.4%] justify-center items-center overflow-hidden">
                <main className="w-auto max-w-[640px] h-auto pl-[165px] pr-[125px]">
                    <img src={loginLogo} className="pt-5 pb-32" alt=""/>
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
                </main>
            </section>
            <section className="flex bg-primary-hover w-[55.6%] justify-center items-center overflow-hidden">
                <section className="max-w-[800px] pl-[65px] pr-[71px] pt-12 pb-[84px]">

                    <article></article>
                    <ul></ul>
                </section>
            </section>
        </div>
    )
}