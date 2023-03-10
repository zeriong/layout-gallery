import React from "react";
import {chartCandleList, chartVolList} from "./constants";


export const Chart = () => {
    return (
        <div className="relative w-full h-full flex flex-col pr-20">
            <CandleChart/>
            <VolumeChart/>
        </div>
    )
}
const CandleChart = () => {
    return (
        <>
            <svg className="absolute w-[calc(100%-25px)] h-full pl-10 z-20">
                {
                    chartCandleList.map((val,i) => {
                        const h = Math.abs(val.close - val.open);
                        const hStart = 258 - val.open;

                        const lineStart = 258 - val.high;
                        const lineEnd = 258 - val.low;

                        const fill = val.close > val.open ? "fill-crypto-seafoam-blue" : "fill-crypto-pale-red";
                        const stroke = val.close > val.open ? "stroke-crypto-seafoam-blue" : "stroke-crypto-pale-red";

                        return (
                            <>
                                <line
                                    x1={11.5 * (i+1) + 2.5}
                                    x2={11.5 * (i+1) + 2.5}
                                    y1={lineStart}
                                    y2={lineEnd}
                                    strokeWidth={1}
                                    className={stroke}
                                />
                                <rect
                                    key={val.id}
                                    x={11.5 * (i+1)}
                                    y={val.close > val.open ? (hStart - h) : (hStart)}
                                    width={5}
                                    height={h}
                                    rx={5}
                                    ry={3}
                                    className={fill}
                                />
                            </>
                        )
                    })
                }
            </svg>
        </>
    )
}
const VolumeChart = () => {
    return (
        <>
            <svg className="absolute bottom-0 w-[calc(100%-25px)] h-1/4 z-10">
                {
                    chartVolList.map((val,i)=>{
                        const vol = val.volume;
                        return (
                            <rect
                                key={val.id}
                                x={11.8 * (i+1)}
                                y={65 - vol}
                                width={5}
                                height={vol}
                                rx={5}
                                ry={3}
                                className="fill-crypto-dark"
                            />
                        )
                    })
                }
            </svg>
        </>
    )
}
export const LineGraph = (props: {upturn:boolean, fill:string}) => {
    const points = [
        [-10, 50],
        [0, 30], [20, 12], [30, 22], [40, 20], [50, 32],
        [60, 14], [70, 25], [80, 18], [90, 18], [100, 10],
        [110, 20], [120, 9], [140, 10],
        [142,50],
    ];
    const smoothing = 0.2;

    const line = (pointA:any, pointB:any) => {
        // ?????? ??????
        const lengthX = pointB[0] - pointA[0]
        const lengthY = pointB[1] - pointA[1]
        //??????????????? ????????? ??????
        return {
            length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
            angle: Math.atan2(lengthY, lengthX)
        }
    }
    const controlPoint = (current:number[], previous:number[], next:number, reverse?:boolean) => {
        // current??? ????????? ??????????????? ????????? ????????? previous??? next??? ?????? current??? ????????????.
        const p = previous || current
        const n = next || current

        // ????????? ?????? ??????
        const o = line(p, n)

        // ????????? ????????????????????? ?????? PI ????????? ???????????? ?????? ????????????.
        const angle = o.angle + (reverse ? Math.PI : 0)
        const length = o.length * smoothing

        // ????????????????????? ??????????????????(????????????)??? ??????????????????
        const x = current[0] + Math.cos(angle) * length
        const y = current[1] + Math.sin(angle) * length
        return [x, y]
    }

    const bezierCommand = (point:any, i:any, a:any) => {
        //????????????????????? ????????????
        const C_P_Start = controlPoint(a[i - 1], a[i - 2], point);
        // ????????? ??????
        const C_P_End = controlPoint(point, a[i - 1], a[i + 1], true);

        return (
            `C ${C_P_Start[0]},
            ${C_P_Start[1]} ${C_P_End[0]},
            ${C_P_End[1]} ${point[0]},
            ${point[1]}`
        );
    }
    const d = points.reduce((acc, point, i, a) => i === 0
            ? ( `M ${point[0]},${point[1]} z` )
            : ( `${acc} ${bezierCommand(point, i, a)}` )
        , '');
    return (
        <svg className="w-full h-50 overflow-hidden">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="40%" stopColor="#ffffff"/>
                    <stop offset="100%" stopColor="#5ED5A8A5"/>
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="40%" stopColor="#ffffff"/>
                    <stop offset="100%" stopColor="#DD4B4B94"/>
                </linearGradient>

                <linearGradient id="grad3" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="40%" stopColor="#1b232a"/>
                    <stop offset="100%" stopColor="#5ED5A8A5"/>
                </linearGradient>
                <linearGradient id="grad4" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="40%" stopColor="#1b232a"/>
                    <stop offset="100%" stopColor="#DD4B4B94"/>
                </linearGradient>
            </defs>
            <path
                d={d}
                className={`${props.upturn ? "stroke-crypto-seafoam-blue" : "stroke-crypto-pale-red"}`}
                fill={props.fill}
            />
        </svg>
    )
}