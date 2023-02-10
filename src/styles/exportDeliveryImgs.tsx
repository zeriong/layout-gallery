import React from "react";
import loginLogo from "./delivery-img/delivery-login-logo.svg";
import fiiedStar from "./delivery-img/filled-star.svg";
import emptyStar from "./delivery-img/empty-star.svg";
import downArrow from "./delivery-img/down-arrow.svg";
import userWoman from "./delivery-img/delivery-girl.svg";
import userMan from "./delivery-img/delivery-man.svg";
import like from "./delivery-img/like.svg";
import bad from "./delivery-img/bad.svg";
interface IclassName {
    className?: string,
}
export const LoginLogo = ({className}: IclassName) => {
    return <img className={className} src={loginLogo} alt=""/>
}
export const FStar = ({className}: IclassName) => {
    return <img className={className} src={fiiedStar} alt=""/>
}
export const EStar = ({className}: IclassName) => {
    return <img className={className} src={emptyStar} alt=""/>
}
export const DownArrow = ({className}: IclassName) => {
    return <img className={className} src={downArrow} alt=""/>
}
export const UserWoman = ({className}: IclassName) => {
    return <img className={className} src={userWoman} alt=""/>
}
export const UserMan = ({className}: IclassName) => {
    return <img className={className} src={userMan} alt=""/>
}
export const Like = ({className}: IclassName) => {
    return <img className={className} src={like} alt=""/>
}
export const Bad = ({className}: IclassName) => {
    return <img className={className} src={bad} alt=""/>
}