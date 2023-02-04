import React from "react";
import {GalleryItem} from "../../components/galleryItem";
export const LandingPage = () => {
    return (
        <ul className="relative w-full flex justify-center md:justify-start flex-row gap-6 md:gap-[30px] flex-wrap">
            <GalleryItem/>
        </ul>
    )
}