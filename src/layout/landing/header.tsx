import {itemLength} from "../../components/galleryItem";

export const Header = () => {
    return (
        <header className="fixed bg-landingBack w-full z-50 bg-opacity-90">
            <h1 className="font-bold text-3xl md:text-4xl py-4">Layout Gallery</h1>
            <h2 className="pb-4 font-bold md:text-lg">{`📚 등록된 페이지${itemLength}개`}</h2>
        </header>
    )
}