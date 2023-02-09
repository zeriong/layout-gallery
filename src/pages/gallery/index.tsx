import React from "react";
import {GallerySection, itemLength} from "./gallerySection";


export const GalleryPage = () => {
    return (
        <div className="h-full w-full bg-landingBack overflow-auto custom-scroll">
            <header className="block bg-landingBack w-full z-50 flex justify-center">
                <section className="w-full max-w-pageMax px-5 pt-5">
                    <h1 className="font-bold text-3xl sm:text-4xl pb-4">Layout Gallery</h1>
                    <h2 className="pb-4 font-bold sm:text-lg">{`📚 등록된 페이지${itemLength}개`}</h2>
                </section>
            </header>
            <main className="relative h-full w-full px-6 sm:px-5 sm:w-pageMax m-auto">
                <GallerySection/>
            </main>
        </div>
    )
}