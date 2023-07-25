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
    const [products, _] = useAtom<Product[]>(productAtom);
    const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
    const [copiedProducts, setCopiedProducts] = useState<Product[]>(products);
    const [selectedProduct, setSelectedProduct] = useState<Product>();
    const CATEGORY: string[] = ['신상품', '인기메뉴', '카테고리1', '카테고리2', '카테고리3'];

    const toggleDetailView = (product?: Product) => {
        setSelectedProduct(product);
        if (product === undefined) {
            setShowDetailModal(false);
        } else {
            setShowDetailModal(true);
        }
        
    }

    useEffect(() => {
        switch (selectedIndex) {
            case 0:
                setCopiedProducts(() => products.filter((v: Product) => v.isNewest));
                break;
            case 1:
                setCopiedProducts(() => products.filter((v: Product) => v.isBest));
                break;
            default:
                setCopiedProducts(() => products.filter((v: Product) => v.category === `카테고리${selectedIndex - 1}`));
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
                    return <div
                        className="w-3/12 text-center p-4"
                        key={v.code}
                        onClick={()=>toggleDetailView(v)}
                    >
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
            {
                showDetailModal
                    ? <Modal>
                    <div
                        className="absolute w-full h-full bg-opacity-30 bg-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-20"
                        onClick={()=>{toggleDetailView()}}
                    >
                            <div
                                className="bg-white w-full h-full rounded-lg flex flex-col justify-between overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div
                                    className="self-end w-6 h-6 box-border text-center cursor-pointer"
                                    onClick={()=>{toggleDetailView()}}
                                >X
                                </div>
                                <div>
                                    {`${JSON.stringify(selectedProduct)}`}        
                                </div>
                                <div className="flex">
                                    <button className="w-1/2 bg-red-500 py-2 px-4 text-white font-bold">취소</button>
                                    <button className="w-1/2 bg-green-500 py-2 px-4 text-white font-bold">장바구니 담기</button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    : <></>
            } 
        </KioskLayout>
    )
}