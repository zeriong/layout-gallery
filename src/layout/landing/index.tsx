import React from "react";
import {Header} from "./header";
import {LandingPage} from "../../pages/landing";

export const LandingLayout = () => {
    return (
        <div className="fixed h-full w-full bg-primaryBack md:pb-5 overflow-y-hidden overflow-x-auto">
            <div className="relative h-full w-full p-3 md:p-5 md:w-pageMax-width m-auto overflow-y-hidden overflow-x-auto">
                <Header/>
                <main className="relative h-full w-full top-header-height overflow-auto custom-scroll landing-main-h">
                    <LandingPage/>
                </main>
            </div>
        </div>
    )
}