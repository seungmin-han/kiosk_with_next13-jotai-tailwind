'use client'
import KioskLayout from "../layouts/kiostLayout"
import { useAtom } from 'jotai';
import { Product, Category } from '@/types';
import { productAtom } from '@/store/atoms';
const screenClassName: String = '';


export default function Menu() {
    const [products, setProducts] = useAtom(productAtom);
    const CATEGORY: Category[] = ['카테고리1', '카테고리2', '카테고리3', '카테고리4'];
    return (
        <KioskLayout screenClassName={screenClassName}>
            <div id="menu-header" className="flex justify-between items-center px-[40px] h-12">
                {
                    CATEGORY.map((v: Category) => {
                        return <div className="" key={v}>{v}</div>
                    })
                }
            </div>
            <div className="w-full flex flex-wrap self-center items-baseline">
            {
                products.map((v: Product) => {
                    return <div className="w-3/12 text-center p-4" key={v.code}>
                        <div className="flex flex-col items-center">
                            <div className="w-[120px] h-[120px] bg-slate-500"></div>
                            <div>{v.name}</div>
                            {
                                v.sale ? <div><s>{ v.price }</s></div> : <></>
                            }
                            <div>{v.price - (v.price * (v.sale/100))}</div>
                        </div>
                    </div>
                })
            }    
            </div>
        </KioskLayout>
    )
}