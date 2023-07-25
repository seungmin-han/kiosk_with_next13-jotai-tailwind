'use client'
import KioskLayout from "../layouts/kiostLayout"
import { useAtom } from 'jotai';
import { Product, Category } from '@/app/types';
import { productAtom } from '@/store/atoms';
import { useEffect, useState } from "react";
import Modal from "./modal";
const screenClassName: String = '';


export default function Menu() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [products, _] = useAtom(productAtom);
    const [copiedProducts, setCopiedProducts] = useState(products);
    const CATEGORY: string[] = ['신상품', '인기메뉴', '카테고리1', '카테고리2', '카테고리3'];

    useEffect(() => {
        switch (selectedIndex) {
            case 0:
                setCopiedProducts(() => products.filter(v => v.isNewest));
                break;
            case 1:
                setCopiedProducts(() => products.filter(v => v.isBest));
                break;
            default:
                setCopiedProducts(() => products.filter(v => v.category === `카테고리${selectedIndex - 1}`));
                break;
        }
    }, [selectedIndex, products]);

    return (
        <KioskLayout screenClassName={screenClassName}>
            <div id="menu-header" className="flex justify-between items-center h-12">
                {
                    CATEGORY.map((v: string, idx: number) => {
                        return <div
                            className={`cursor-pointer h-full w-1/5 text-center mx-4 ${idx === selectedIndex ? 'border-b-8 border-blue-900' : ''}`}
                            key={v}
                            onClick={()=>setSelectedIndex(idx)}
                        >
                            {v}
                        </div>
                    })
                }
            </div>
            <div className="w-full flex flex-wrap self-center items-baseline">
            {
                copiedProducts.map((v: Product) => {
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
            <Modal>
                { 'some Text' }
            </Modal>
        </KioskLayout>
    )
}