import intro1 from "../../assets/crypto-mobile/intro-img1.svg";
import intro2 from "../../assets/crypto-mobile/intro-img2.svg";
import intro3 from "../../assets/crypto-mobile/intro-img3.svg";

interface IintroItem {
    id: string;
    img: string;
    title: string;
    summary: string;
}

interface IintroItems extends Array<IintroItem> {}

export const cryptoIntroItems:IintroItems = [
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