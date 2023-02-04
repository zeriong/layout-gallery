import React, {useRef, useState} from "react";
import example from '../styles/example.png';
import ready from '../styles/ready.png';
interface Iitem {
    name: string;
    desc: string;
    img: string;
}
interface Iitems extends Array<Iitem> {}

const item:Iitems = [
    {
        name: "youtube",
        desc: "글을 길게써서 넘치게 해봐야한다. 글자가 3줄 이후부터는 ... 으로 생략하는 기능을 넣어줬기 때문에 글이 넘치더라도 정상적으로 생략기능이 구현되어야 성공한 것이다. 가나다라마바사 아자차카 타파하 도레미파솔라시도레미파솔라시도레미파솔라시도레미파 솔라시도 떳다떳다 비행기 날아라 날아라 높이높이 날아라 우리비행기",
        img: example,
    },
    {
        name: "FaceBook",
        desc: "페이스북을 클론한 것이다.",
        img: ready,
    },
    {
        name: "FaceBook",
        desc: "페이스북을 클론한 것이다.",
        img: ready,
    },
    {
        name: "FaceBook",
        desc: "페이스북을 클론한 것이다.",
        img: ready,
    },
    {
        name: "FaceBook",
        desc: "페이스북을 클론한 것이다.",
        img: ready,
    },
    {
        name: "FaceBook",
        desc: "페이스북을 클론한 것이다.",
        img: ready,
    },
    {
        name: "FaceBook",
        desc: "페이스북을 클론한 것이다.",
        img: ready,
    },
];
export const itemLength: number = item.length
const ListDiv = (props: { i:number, val: {img: string, name: string, desc: string} }) => {
    const [onMouse, setOnMouse] = useState<boolean>(false);
    return (
        <li
            key={props.i}
            className="w-full max-w-[477px] md:w-1/3 h-[280px] md:h-[450px] transition-all duration-200 shadow-lg"
            onMouseEnter={() => setOnMouse(true)}
            onMouseLeave={() => setOnMouse(false)}
        >
            <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                <img src={props.val.img} alt={""} className="h-4/6 w-full"/>
                <section
                    className={`${onMouse ? "bg-gray-800 text-white" : ""}
                                    p-2 md:p-4 transition-all duration-300 h-full overflow-hidden`}
                >
                    <h1 className="text-[14px] md:text-xl font-bold mb-2 md:mb-4">
                        {props.val.name}
                    </h1>
                    <h2 className="text-[10px] md:text-base h-fit line-clamp-3">
                        {props.val.desc}
                    </h2>
                </section>
            </div>
        </li>
    )
}
export const GalleryItem = () => {
    return (
        <>
            {
                item.map((val,i,arr) => {
                    return (
                        <ListDiv i={i} val={val}/>
                    )
                })
            }
        </>
    )
}