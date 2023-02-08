import React from "react";
import {GalleryItem} from "../../components/galleryItem";
export const LandingPage = () => {
    return (
        <ul className="transition-all duration-300 relative w-full grid grid-rows-1 md:grid-cols-3 md:justify-start flex-row gap-6 md:gap-[30px]">
            <GalleryItem/>
        </ul>
    )
}