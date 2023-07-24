'use client'
import KioskLayout from "../layouts/kiostLayout"
import { useAtom } from 'jotai';
import { Product, Category } from '@/types';
import { productAtom } from '@/store/atoms';
const screenClassName: String = '';


export default function Menu() {
    const [products, setProducts] = useAtom(productAtom);
    const CATEGORY: Category[] = ['카테고리1', '카테고리2', '카테고리3'];
    return (
        <KioskLayout screenClassName={screenClassName}>
            <div id="menu-header" className="">
                
            </div>
            <div className="w-full flex flex-wrap self-center items-center">
            {
                products.map((v: Product) => {
                    return <div className="w-3/12 text-center p-4">
                        <div className="flex flex-col items-center">
                            <div className="w-[120px] h-[120px] bg-slate-500"></div>
                            <div>{v.name}</div>
                            <div>{v.price - (v.price * (v.sale/100))}</div>
                        </div>
                    </div>
                })
            }    
            </div>
        </KioskLayout>
    )
}