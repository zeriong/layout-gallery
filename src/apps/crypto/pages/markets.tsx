import {MarketList, MarketTab} from "../components/marketComponent";
import tradesAddIcon  from '../assets/tradesAddIcon.svg'

export const Markets = () => {
    return (
        <section className="pt-20 px-24 min-h-[800px]">
            <MarketTab/>
            <MarketList/>
            <div className="flex mt-20 justify-center items-center border-dashed border-2 bg-crypto-dark-four border-crypto-dark-five py-18 rounded-[12px]">
                <div className="flex">
                    <figure className="mr-8">
                        <img src={tradesAddIcon} alt=""/>
                    </figure>
                    <p className="text-crypto-warm-grey">
                        Add Favorite
                    </p>
                </div>
            </div>
        </section>
    )
}