import {MarketList, MarketTab} from "../components/marketComponent";

export const CryptoMarkets = () => {
    return (
        <section className="pt-20 px-24 min-h-[700px]">
            <MarketTab/>
            <MarketList/>
        </section>
    )
}