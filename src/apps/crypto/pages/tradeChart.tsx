import React, {useEffect, useRef, useState} from "react";
import {chartVolList} from "./constants";


export const Chart = () => {
    return (
        <div className="relative w-full h-full flex flex-col pr-20">
            <CandleChart/>
            <VolumeChart/>
        </div>
    )
}

interface IchartCandleList {
    id: string;
    open: number;
    close: number;
    high: number;
    low: number;
}

interface IchartCandleLists extends Array<IchartCandleList> {}

const CandleChart = () => {
    const svgRef = useRef<any>(null);
    const dayTable = 27;

    const [loading, setLoading] = useState<boolean>(true);

    const _random = (e: number) => Math.floor(Math.random() * e);
    const makeMin = (a: number, b:number) => Math.min(a,b);
    const makeMax = (a: number, b:number) => Math.max(a,b);

    const [candleList, setCandleList] = useState<IchartCandleLists>([]);
    console.log('초기화')

    const makeCandle = () => {
        const arr:any = [];
        const randomH = svgRef.current.clientHeight + 1;
        for( let i=0; i < dayTable; i++ ) {
            if (i === 0) {
                let open = _random(randomH / 2);
                let close = _random(randomH / 2);
                const min = makeMin(open, close);
                const max = makeMax(open, close);
                const high = max + _random((randomH - max) / 2);
                const low = _random(min + 1);

                if (open === 0) {
                    const loop = ()=> {
                        open = _random(randomH / 2);
                        if (open === 0) loop();
                    };
                    loop();
                }
                if (close === 0) {
                    const loop = ()=> {
                        close = _random(randomH / 2);
                        if (close === 0) loop();
                    };
                    loop();
                }

                arr.push({
                    id: "D" + (i + 1),
                    open: open,
                    close: close,
                    high: high,
                    low: low,
                });
            }
            if (i !== 0) {
                const open = arr[i-1].close;
                let close = _random(randomH / 2);
                const min = makeMin(open, close);
                const max = makeMax(open, close);
                const high = max + _random((randomH - max) / 3);
                const low = _random(min + 1);

                if (close === 0) {
                    const loop = ()=> {
                        close = _random(randomH / 2);
                        if (close === 0) loop();
                    };
                    loop();
                }

                arr.push({
                    id: "D" + (i+1),
                    open: open,
                    close: close,
                    high: high,
                    low: low,
                });
            }
        }
        setLoading(false);
        setCandleList(arr);
    }

    useEffect(()=> makeCandle(),[]);

    return (
        <svg
            ref={svgRef}
            className="absolute w-[calc(100%-25px)] h-full pl-10 z-20"
        >
            {
                !loading && (
                    <>
                        {
                            candleList?.map((val,i) => {
                                console.log('로딩?', loading)
                                console.log(candleList)
                                const h = Math.abs(val.close - val.open);
                                const hStart = svgRef.current.clientHeight - val.open;

                                const lineStart = svgRef.current.clientHeight - val.high;
                                const lineEnd = svgRef.current.clientHeight - val.low;

                                const fill = val.close > val.open ? "fill-crypto-seafoam-blue" : "fill-crypto-pale-red";
                                const stroke = val.close > val.open ? "stroke-crypto-seafoam-blue" : "stroke-crypto-pale-red";

                                return (
                                    <svg key={val.id}>
                                        <line
                                            key={"line"+val.id}
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
                                    </svg>
                                )
                            })
                        }
                    </>
                )
            }
        </svg>
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
        [142, 50],
    ];
    const smoothing = 0.2;

    const line = (pointA: any, pointB: any) => {
        // 좌표 설정
        const lengthX = pointB[0] - pointA[0]
        const lengthY = pointB[1] - pointA[1]
        //피타고라스 공식을 사용
        return {
            length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
            angle: Math.atan2(lengthY, lengthX)
        }
    }
    const controlPoint = (current: number[], previous: number[], next: number, reverse?: boolean) => {
        // current가 배열의 첫번쨰거나 마지막 점일때 previous나 next가 아닌 current로 대체한다.
        const p = previous || current
        const n = next || current

        // 반대쪽 선의 속성
        const o = line(p, n)

        // 마지막 컨트롤포인트인 경우 PI 각도에 추가하여 뒤로 이동한다.
        const angle = o.angle + (reverse ? Math.PI : 0)
        const length = o.length * smoothing

        // 컨트롤포인트가 커런트포인트(현재지점)에 상대적이므로
        const x = current[0] + Math.cos(angle) * length
        const y = current[1] + Math.sin(angle) * length
        return [x, y]
    }

    const bezierCommand = (point: any, i: any, a: any) => {
        //컨트롤포인트의 시작지점
        const C_P_Start = controlPoint(a[i - 1], a[i - 2], point);
        // 끝나는 지점
        const C_P_End = controlPoint(point, a[i - 1], a[i + 1], true);

        return (
            `C ${C_P_Start[0]},
            ${C_P_Start[1]} ${C_P_End[0]},
            ${C_P_End[1]} ${point[0]},
            ${point[1]}`
        );
    }
    const d = points.reduce((acc, point, i, a) => i === 0
            ? (`M ${point[0]},${point[1]} z`)
            : (`${acc} ${bezierCommand(point, i, a)}`)
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