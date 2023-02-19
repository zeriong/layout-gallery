import React, {useEffect, useState} from "react";

import intro1 from "../../assets/crypto-mobile/intro-img1.svg";
import intro2 from "../../assets/crypto-mobile/intro-img2.svg";
import intro3 from "../../assets/crypto-mobile/intro-img3.svg";
import starLoad1 from "../../assets/crypto-mobile/Group 95.svg";
import starLoad2 from "../../assets/crypto-mobile/Group 96.svg";
import starLoad3 from "../../assets/crypto-mobile/Group 97.svg";
import starLoad4 from "../../assets/crypto-mobile/Group 98.svg";
import stars from "../../assets/crypto-mobile/Group.svg";
import {useNavigate} from "react-router-dom";

interface Iitem {
    id: string;
    img: string;
    title: string;
    summary: string;
}

interface Iitems extends Array<Iitem> {}

const items:Iitems = [
    {
        id: "cryptoIntro1",
        img: intro1,
        title: "Trade anytime anywhere",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
        id: "cryptoIntro2",
        img: intro2,
        title: "Save and invest at the same time",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
        id: "cryptoIntro3",
        img: intro3,
        title: "Transact fast and easy",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
]

const IntroItem = (props: { img:string, title:string, summary:string }) => {
    return (
        <div className="w-full flex flex-col min-w-full transition-all duration-300">
            <figure className="relative w-full h-[55%] z-10">
                <img src={props.img} className="absolute left-1/2 -translate-x-1/2 w-4/5 h-auto mt-[93px]" alt=""/>
                <div className="absolute w-full h-[144px] mt-[336px] bg-gradient-to-t from-crypto-dark"/>
            </figure>
            <div className="relative flex flex-col justify-between h-[45%] z-20">
                <div className="absolute h-full w-full bg-gradient-to-t from-crypto-dark-two -z-10"/>
                <div className="w-full h-fit p-6 text-center">
                    <h1 className="crypto-2xl-normal text-white pb-6">
                        {props.title}
                    </h1>
                    <p className="crypto-lg-normal text-crypto-warm-grey">
                        {props.summary}
                    </p>
                </div>
            </div>
        </div>
    )
}

const TOTAL_SLIDES = items.length - 1;

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mouseDownClientX, setMouseDownClientX] = useState(0);
    const [mouseDownClientY, setMouseDownClientY] = useState(0);
    const [mouseUpClientX, setMouseUpClientX] = useState(0);
    const [mouseUpClientY, setMouseUpClientY] = useState(0);
    const [tochedX, setTochedX] = useState(0);
    const [tochedY, setTochedY] = useState(0);

    const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setMouseDownClientX(e.clientX);
        setMouseDownClientY(e.clientY);
    };

    const onMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setMouseUpClientX(e.clientX);
        setMouseUpClientY(e.clientY);
    };

    const onTouchStart = (e: React.TouchEvent) => {
        setTochedX(e.changedTouches[0].pageX);
        setTochedY(e.changedTouches[0].pageY);
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        const distanceX = tochedX - e.changedTouches[0].pageX;
        const distanceY = tochedY - e.changedTouches[0].pageY;
        const vector = Math.abs(distanceX / distanceY);

        if (distanceX > 30 && vector > 2) {

            nextBtn();
        } else if (distanceX < -30 && vector > 2) {
            prevBtn();
        }
    };

    const nextBtn = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            // 더 이상 넘어갈 슬라이드가 없으면
            //setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
            return navigate('/crypto'); // 클릭이 작동하지 않습니다.
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevBtn = () => {
        if (currentSlide === 0) {
            //setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
            return;  // 클릭이 작동하지 않습니다.
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        const dragSpaceX = Math.abs(mouseDownClientX - mouseUpClientX);
        const dragSpaceY = Math.abs(mouseDownClientY - mouseUpClientY);
        const vector = dragSpaceX / dragSpaceY;

        if (mouseDownClientX !== 0 && dragSpaceX > 100 && vector > 2) {
            if (mouseUpClientX < mouseDownClientX) {
                if (currentSlide === 2) {
                    return
                }
                nextBtn();
            } else if (mouseUpClientX > mouseDownClientX) {
                prevBtn();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mouseUpClientX]);

    const navigate = useNavigate();

    return (
        <div className="relative transition-all duration-300 w-full h-full overflow-hidden select-none">
            <div
                className={
                `absolute transition-all duration-300 w-full h-full flex cursor-default 
                ${currentSlide === 0 && "left-0"} -left-[${currentSlide}00%]`}
                onMouseUp={onMouseUp}
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {
                    items.map((val) => {
                        return(
                            <IntroItem key={val.id} img={val.img} title={val.title} summary={val.summary}/>
                        )
                    })
                }
            </div>
            <div className="fixed w-full bottom-0 flex flex-col items-center mb-[94px] z-20">
                <ul className="grid grid-cols-3 justify-center gap-[8px]">
                    <li className={`w-3 h-3 rounded-full ${currentSlide === 0 ? "bg-crypto-warm-grey" : "bg-crypto-ball-dark"}`}/>
                    <li className={`w-3 h-3 rounded-full ${currentSlide === 1 ? "bg-crypto-warm-grey" : "bg-crypto-ball-dark"}`}/>
                    <li className={`w-3 h-3 rounded-full ${currentSlide === 2 ? "bg-crypto-warm-grey" : "bg-crypto-ball-dark"}`}/>
                </ul>
                <button
                    className="w-[45%] h-full bg-crypto-seafoam-blue crypto-lg-md text-crypto-dark-three py-[3%] rounded-2xl mt-10 shadow-[0_20px_60px_rgba(94,213,168,0.16)]"
                    onClick={nextBtn}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export const CryptoIntro = () => {
    const [popIntro, setpopIntro] = useState(true);
    const popOversetTimeout = () => {
        setTimeout(()=> {
            setpopIntro(false);
        },2000)
    }
    useEffect(() => {
        popOversetTimeout();
    },[])

    return (
        <section className='absolute bg-gray-200 w-full h-full select-none'>
            <div className='absolute w-full h-full crypto-font max-w-[420px] left-1/2 -translate-x-1/2 overflow-hidden'>
                <article className={`absolute left-1/2 -translate-x-1/2 bg-crypto-dark w-full h-full transition-all duration-[1.5s] visible z-50 opacity-100 ${popIntro ? "" : "invisible opacity-0"}`} onTransitionEnd={(e)=>{ return e.currentTarget.style.zIndex = "-20"}}>
                    <div className="relative w-full h-full">
                        <div className="absolute crypto-starLoad w-full h-full z-20 -top-[8%]"/>
                        <div className="absolute crypto-stars w-full h-full z-20"/>
                        <figure className="relative w-full h-4/5 z-30">
                            <svg className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" width="61%" height="100%" viewBox="0 0 251 159" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"><path d="M20.412 102.728V107.66H13.716V128H7.56V107.66H0.864V102.728H20.412ZM26.5975 105.824C25.5175 105.824 24.6295 105.512 23.9335 104.888C23.2615 104.24 22.9255 103.448 22.9255 102.512C22.9255 101.552 23.2615 100.76 23.9335 100.136C24.6295 99.488 25.5175 99.164 26.5975 99.164C27.6535 99.164 28.5175 99.488 29.1895 100.136C29.8855 100.76 30.2335 101.552 30.2335 102.512C30.2335 103.448 29.8855 104.24 29.1895 104.888C28.5175 105.512 27.6535 105.824 26.5975 105.824ZM29.6575 107.912V128H23.5015V107.912H29.6575ZM45.3147 122.78V128H42.1827C39.9507 128 38.2107 127.46 36.9627 126.38C35.7147 125.276 35.0907 123.488 35.0907 121.016V113.024H32.6427V107.912H35.0907V103.016H41.2467V107.912H45.2787V113.024H41.2467V121.088C41.2467 121.688 41.3907 122.12 41.6787 122.384C41.9667 122.648 42.4467 122.78 43.1187 122.78H45.3147ZM47.5197 117.92C47.5197 115.856 47.9037 114.044 48.6717 112.484C49.4637 110.924 50.5317 109.724 51.8757 108.884C53.2197 108.044 54.7197 107.624 56.3757 107.624C57.7917 107.624 59.0277 107.912 60.0837 108.488C61.1637 109.064 61.9917 109.82 62.5677 110.756V107.912H68.7237V128H62.5677V125.156C61.9677 126.092 61.1277 126.848 60.0477 127.424C58.9917 128 57.7557 128.288 56.3397 128.288C54.7077 128.288 53.2197 127.868 51.8757 127.028C50.5317 126.164 49.4637 124.952 48.6717 123.392C47.9037 121.808 47.5197 119.984 47.5197 117.92ZM62.5677 117.956C62.5677 116.42 62.1357 115.208 61.2717 114.32C60.4317 113.432 59.3997 112.988 58.1757 112.988C56.9517 112.988 55.9077 113.432 55.0437 114.32C54.2037 115.184 53.7837 116.384 53.7837 117.92C53.7837 119.456 54.2037 120.68 55.0437 121.592C55.9077 122.48 56.9517 122.924 58.1757 122.924C59.3997 122.924 60.4317 122.48 61.2717 121.592C62.1357 120.704 62.5677 119.492 62.5677 117.956ZM85.4173 107.696C87.7693 107.696 89.6413 108.464 91.0333 110C92.4493 111.512 93.1573 113.6 93.1573 116.264V128H87.0373V117.092C87.0373 115.748 86.6893 114.704 85.9933 113.96C85.2973 113.216 84.3613 112.844 83.1853 112.844C82.0093 112.844 81.0733 113.216 80.3773 113.96C79.6813 114.704 79.3333 115.748 79.3333 117.092V128H73.1773V107.912H79.3333V110.576C79.9573 109.688 80.7973 108.992 81.8533 108.488C82.9093 107.96 84.0973 107.696 85.4173 107.696ZM105.607 128.288C103.855 128.288 102.295 127.988 100.927 127.388C99.5591 126.788 98.4791 125.972 97.6871 124.94C96.8951 123.884 96.4511 122.708 96.3551 121.412H102.439C102.511 122.108 102.835 122.672 103.411 123.104C103.987 123.536 104.695 123.752 105.535 123.752C106.303 123.752 106.891 123.608 107.299 123.32C107.731 123.008 107.947 122.612 107.947 122.132C107.947 121.556 107.647 121.136 107.047 120.872C106.447 120.584 105.475 120.272 104.131 119.936C102.691 119.6 101.491 119.252 100.531 118.892C99.5711 118.508 98.7431 117.92 98.0471 117.128C97.3511 116.312 97.0031 115.22 97.0031 113.852C97.0031 112.7 97.3151 111.656 97.9391 110.72C98.5871 109.76 99.5231 109.004 100.747 108.452C101.995 107.9 103.471 107.624 105.175 107.624C107.695 107.624 109.675 108.248 111.115 109.496C112.579 110.744 113.419 112.4 113.635 114.464H107.947C107.851 113.768 107.539 113.216 107.011 112.808C106.507 112.4 105.835 112.196 104.995 112.196C104.275 112.196 103.723 112.34 103.339 112.628C102.955 112.892 102.763 113.264 102.763 113.744C102.763 114.32 103.063 114.752 103.663 115.04C104.287 115.328 105.247 115.616 106.543 115.904C108.031 116.288 109.243 116.672 110.179 117.056C111.115 117.416 111.931 118.016 112.627 118.856C113.347 119.672 113.719 120.776 113.743 122.168C113.743 123.344 113.407 124.4 112.735 125.336C112.087 126.248 111.139 126.968 109.891 127.496C108.667 128.024 107.239 128.288 105.607 128.288ZM124.094 115.328C124.094 112.832 124.634 110.612 125.714 108.668C126.794 106.7 128.294 105.176 130.214 104.096C132.158 102.992 134.354 102.44 136.802 102.44C139.802 102.44 142.37 103.232 144.506 104.816C146.642 106.4 148.07 108.56 148.79 111.296H142.022C141.518 110.24 140.798 109.436 139.862 108.884C138.95 108.332 137.906 108.056 136.73 108.056C134.834 108.056 133.298 108.716 132.122 110.036C130.946 111.356 130.358 113.12 130.358 115.328C130.358 117.536 130.946 119.3 132.122 120.62C133.298 121.94 134.834 122.6 136.73 122.6C137.906 122.6 138.95 122.324 139.862 121.772C140.798 121.22 141.518 120.416 142.022 119.36H148.79C148.07 122.096 146.642 124.256 144.506 125.84C142.37 127.4 139.802 128.18 136.802 128.18C134.354 128.18 132.158 127.64 130.214 126.56C128.294 125.456 126.794 123.932 125.714 121.988C124.634 120.044 124.094 117.824 124.094 115.328ZM158.716 111.26C159.436 110.156 160.336 109.292 161.416 108.668C162.496 108.02 163.696 107.696 165.016 107.696V114.212H163.324C161.788 114.212 160.636 114.548 159.868 115.22C159.1 115.868 158.716 117.02 158.716 118.676V128H152.56V107.912H158.716V111.26ZM188.479 107.912L175.879 137.54H169.255L173.863 127.316L165.691 107.912H172.567L177.211 120.476L181.819 107.912H188.479ZM196.861 110.756C197.461 109.82 198.289 109.064 199.345 108.488C200.401 107.912 201.637 107.624 203.053 107.624C204.709 107.624 206.209 108.044 207.553 108.884C208.897 109.724 209.953 110.924 210.721 112.484C211.513 114.044 211.909 115.856 211.909 117.92C211.909 119.984 211.513 121.808 210.721 123.392C209.953 124.952 208.897 126.164 207.553 127.028C206.209 127.868 204.709 128.288 203.053 128.288C201.661 128.288 200.425 128 199.345 127.424C198.289 126.848 197.461 126.104 196.861 125.192V137.576H190.705V107.912H196.861V110.756ZM205.645 117.92C205.645 116.384 205.213 115.184 204.349 114.32C203.509 113.432 202.465 112.988 201.217 112.988C199.993 112.988 198.949 113.432 198.085 114.32C197.245 115.208 196.825 116.42 196.825 117.956C196.825 119.492 197.245 120.704 198.085 121.592C198.949 122.48 199.993 122.924 201.217 122.924C202.441 122.924 203.485 122.48 204.349 121.592C205.213 120.68 205.645 119.456 205.645 117.92ZM226.334 122.78V128H223.202C220.97 128 219.23 127.46 217.982 126.38C216.734 125.276 216.11 123.488 216.11 121.016V113.024H213.662V107.912H216.11V103.016H222.266V107.912H226.298V113.024H222.266V121.088C222.266 121.688 222.41 122.12 222.698 122.384C222.986 122.648 223.466 122.78 224.138 122.78H226.334ZM238.907 128.288C236.939 128.288 235.163 127.868 233.579 127.028C232.019 126.188 230.783 124.988 229.871 123.428C228.983 121.868 228.539 120.044 228.539 117.956C228.539 115.892 228.995 114.08 229.907 112.52C230.819 110.936 232.067 109.724 233.651 108.884C235.235 108.044 237.011 107.624 238.979 107.624C240.947 107.624 242.723 108.044 244.307 108.884C245.891 109.724 247.139 110.936 248.051 112.52C248.963 114.08 249.419 115.892 249.419 117.956C249.419 120.02 248.951 121.844 248.015 123.428C247.103 124.988 245.843 126.188 244.235 127.028C242.651 127.868 240.875 128.288 238.907 128.288ZM238.907 122.96C240.083 122.96 241.079 122.528 241.895 121.664C242.735 120.8 243.155 119.564 243.155 117.956C243.155 116.348 242.747 115.112 241.931 114.248C241.139 113.384 240.155 112.952 238.979 112.952C237.779 112.952 236.783 113.384 235.991 114.248C235.199 115.088 234.803 116.324 234.803 117.956C234.803 119.564 235.187 120.8 235.955 121.664C236.747 122.528 237.731 122.96 238.907 122.96Z" fill="#5ED5A8"/><rect x="80" width="80" height="80" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image0_217_15283" transform="scale(0.00318471)"/></pattern><image id="image0_217_15283" width="314" height="314" xlinkHref="data:image/png;base64,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"/></defs></svg>
                        </figure>
                        <div className="h-1/5 w-full bg-gradient-to-t from-crypto-seafoam-blue opacity-[15%]"/>
                    </div>
                </article>
                <article className="relative bg-crypto-dark w-auto h-full transition-all duration-500 overflow-y-hidden overflow-x-auto">
                    <figure className="w-full h-full absolute">
                        <div className="absolute w-[210px] h-[194px] bg-crypto-seafoam-blue blur-[150px] left-[-125px] top-[-152px]"/>
                        <img src={starLoad1} className="absolute left-[29px] top-[200px]" alt=""/>
                        <img src={starLoad2} className="absolute left-[314px] top-[-16px]" alt=""/>
                        <img src={starLoad3} className="absolute left-[368px] top-[459px]" alt=""/>
                        <img src={starLoad4} className="absolute left-[45px] top-[499px]" alt=""/>
                        <img src={stars} className="absolute opacity-50" alt=""/>
                    </figure>
                    <div className="relative w-full h-full">
                        <Carousel/>
                    </div>
                </article>
            </div>
        </section>
    )
}