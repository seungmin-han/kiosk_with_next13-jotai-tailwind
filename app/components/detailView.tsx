import { ProductOption } from "@/types";
import Image from "next/image";

export default function detailView({close, selectedProduct, setCount, count}: any) {
    return (
        <div
            className="absolute w-full h-full bg-opacity-30 bg-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-20"
            onClick={()=>{close()}}
        >
            <div
                className="bg-white w-full h-full rounded-lg flex flex-col justify-between overflow-hidden shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >   
                <div className="flex flex-col justify-between">
                    <div
                        className="self-end w-6 h-6 box-border text-center cursor-pointer"
                        onClick={()=>{close()}}
                    >X
                    </div>
                    <div className="flex flex-col p-6 overflow-y-scroll max-h-[570px]">
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-start items-center flex-grow">
                                <div className="mb-5 text-2xl">{ selectedProduct?.name }</div>
                                <div className="mb-5 text-xl">{selectedProduct?.price}</div>
                                <div>아이템 설명</div>
                            </div>
                            <Image
                                src={`/assets/image${selectedProduct?.code}.jpg`}
                                width={250}
                                height={250}
                                loading="eager"
                                alt={`image${selectedProduct?.code}`}
                            >
                            </Image>
                        </div>
                        {
                            selectedProduct?.options.map((option: ProductOption) => {
                                return (
                                    <div className="mt-8" key={option.optionKey}>
                                        <h3 className="pl-4 pb-2 text-lg font-normal">{option.optionName}</h3>
                                        <div className="flex justify-around py-4 border-y-2">
                                            {
                                                option.options.map((v: string) => {
                                                    return (
                                                        <div key={v}>
                                                            <input type="radio" name={option.optionKey} id="" value={v} />
                                                            <label htmlFor="">{v}</label>
                                                        </div>            
                                                    )
                                                })    
                                            }
                                        </div>
                                    </div>
                                )     
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-4 flex justify-end pr-6">
                        <span className="px-3 py-1.5 font-bold">수량</span>
                        <button
                            className="bg-red-600 px-3 py-1.5 text-white rounded-lg rounded-r-none"
                            onClick={()=>setCount((prev:number)=>{return prev == 1 ? prev : prev-1})}
                        >-</button>
                        <span className="px-3 py-1.5 border-y-2"> {count} </span>
                        <button
                            className="bg-sky-600 px-3 py-1.5 text-white rounded-lg rounded-l-none"
                            onClick={()=>setCount((prev:number)=>{return prev < 100 ? prev+1 : prev})}
                        >+</button>
                    </div>
                    <div className="flex">
                        <button className="w-1/2 bg-green-500 py-2 px-4 text-white font-bold">장바구니 담기</button>
                        <button className="w-1/2 bg-sky-500 py-2 px-4 text-white font-bold">결제하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}