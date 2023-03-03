import React, {useState} from "react";
import {AiFillEye} from "react-icons/ai";
import invisible from "../assets/eye-slash.svg";
import {WalletsList, WalletsTab} from "../components/walletsComponent";
export const CryptoWallets = () => {
    const [isShowBalance, setIsShowBalance] = useState(true);
    const showBalance = () => {
        isShowBalance ? setIsShowBalance(false) : setIsShowBalance(true);
    }

    return (
        <section className="relative w-full h-full bg-crypto-dark">
            <article className="relative wallets-bg w-full h-auto overflow-hidden">
                <p className="wallets-gradient"/>
                <p className="wallets-gradient-2"/>
                <div className="relative mt-30 m-sm:mt-49 w-full h-full px-24 pb-24">
                    <p className="font-normal text-crypto-warm-grey text-14">
                        Current Balance
                    </p>
                    <button className="absolute flex justify-center items-center right-24 top-0 w-44 h-44 rounded-full bg-crypto-dark">
                            {
                                isShowBalance ? <AiFillEye className="w-44 h-44 p-10px fill-crypto-warm-grey" size="100" onClick={showBalance}/> :
                                    <img src={invisible} className="" alt="" onClick={showBalance}/>
                            }
                    </button>
                    <p className="h-46 flex text-center items-center text-white font-bold text-32 mt-12">
                        {isShowBalance ? '40,059.83' : '**,***.**'}
                    </p>
                    <p className="mb-54 text-crypto-cool-grey text-14 font-normal">
                        {isShowBalance ? '$468,554.23' : '***,***.**'}
                    </p>
                    <WalletsTab/>
                </div>
            </article>
            <article>
                <WalletsList key="walletList" isShouw={isShowBalance}/>
            </article>
        </section>
    )
}