import React from "react";
import {Header} from "./header";
import {LandingPage} from "../../pages/landing";

export const LandingLayout = () => {
    return (
        <div className="fixed h-full w-full bg-landingBack md:pb-5 overflow-y-hidden overflow-x-auto">
            <div className="relative h-full w-full px-3 md:p-5 md:w-pageMax m-auto overflow-y-hidden overflow-x-auto">
                <Header/>
                <main className="relative h-full w-full overflow-auto custom-scroll">
                    <div className="h-header-height"></div>
                    <LandingPage/>
                </main>
            </div>
        </div>
    )
}