import { Product } from '@/types';
import Image from "next/image";

export default function productList({ toggleDetailView, products, realPrice }: { toggleDetailView: Function, products: Product[], realPrice: Function }) {
    return (
        <>
            {
            products.map((v: Product) => {
                return <div
                    className="w-3/12 text-center p-4"
                    key={v.code}
                    onClick={()=>toggleDetailView(v)}
                >
                    <div className="flex flex-col items-center">
                        <div className="w-[120px] h-[120px] bg-slate-500">
                            <Image
                                src={`/assets/image${v.code}.jpg`}
                                width={120}
                                height={120}
                                alt={`image${v.code}`}
                                loading="eager"
                            >
                            </Image>
                        </div>
                        <div>{v.name}</div>
                        {
                            v.sale ? <div><s>{ v.price }</s></div> : <></>
                        }
                        <div>{realPrice(v)}</div>
                    </div>
                </div>
            })
            }
        </>
    )
}