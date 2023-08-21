'use client'

import { cartAtom } from "@/store/atoms";
import { CartProduct, Product } from "@/types";
import { useAtom } from "jotai";

export default function CartView(props: { close: () => void }) {
    const realPrice = (v: Product | CartProduct) => {
        if (!v) return 0;
        const total = v.price * ((100 - v.sale) / 100);
        return ('optionPrices' in v) ? (total + v.optionPrices.reduce((acc,val)=>acc+val,0)) * v.count : total;
    }
    const [cart, setCart] = useAtom(cartAtom);
    return (
        <div
            className="absolute w-full h-full bg-opacity-30 bg-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-20"
            onClick={() => props.close()}
        >
            <div
                className="bg-white w-full h-full rounded-lg flex flex-col justify-between overflow-hidden shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col pt-6">
                {
                    cart.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row justify-between px-4 py-2">
                                <div>
                                    <div>{item.name}</div>
                                    <div className="pl-4">
                                    {
                                        item.selectedOptions.map((option, i) => {
                                            return <div key={i}>{ option }</div>
                                        })
                                    }
                                    </div>
                                </div>
                                <div>{realPrice(item) * item.count}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}