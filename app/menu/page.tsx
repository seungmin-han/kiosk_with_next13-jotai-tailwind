'use client'
import KioskLayout from "../layouts/kiostLayout"
import { useAtom } from 'jotai';
import { CartProduct, Product } from '@/types';
import { cartAtom, productAtom } from '@/store/atoms';
import { useEffect, useState } from "react";
import Modal from "@/app/components/modal";
import Image from "next/image";
import DetailView from '@/app/components/detailView';
import CartView from "@/app/components/CartView";

const SCREEN_CLASS_NAME: String = '';

export default function Menu() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [cart] = useAtom(cartAtom);
    const [products] = useAtom(productAtom);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);
    const [copiedProducts, setCopiedProducts] = useState(products.filter((v:Product)=> v.isNewest));
    const [selectedProduct, setSelectedProduct] = useState<Product>();
    const CATEGORY: string[] = ['신상품', '인기메뉴', '카테고리1', '카테고리2', '카테고리3'];
    const realPrice = (v: Product | CartProduct) => {
        const total = v.price * ((100 - v.sale) / 100);
        return ('optionPrices' in v) ? (total + v.optionPrices.reduce((acc,val)=>acc+val,0)) * v.count : total;
    }
    
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
        <KioskLayout screenClassName={SCREEN_CLASS_NAME}>
            <div className="flex flex-col justify-between h-full">
                <div className="p-4">                
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
                    </div>
                </div>
                <div id="bottomNav" className="flex flex-row justify-between">
                    <div className="flex flex-row justify-between self-center flex-grow border-t-2 h-[100px] items-center">
                        <div className="px-8">
                            결제 금액: {cart.reduce((acc, v)=>acc+realPrice(v), 0)}원
                        </div>
                        <div className="px-8">
                            수량: { cart.reduce((acc, v)=>acc+v.count,0) }
                        </div>
                        
                    </div>
                    <div className="flex flex-row">
                        <div className="bg-green-500 w-[100px] h-[100px] flex justify-center">
                            <button onClick={()=>setShowCartModal(true)} className="w-full h-full text-white font-bold">주문<br/>내역</button>
                        </div>
                        <div className="bg-sky-500 w-[100px] h-[100px] flex justify-center">
                            <button onClick={()=>setShowCartModal(true)} className="w-full h-full text-white font-bold">결제<br/>하기</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            {
                showDetailModal
                    ?
                    <Modal>
                        <DetailView close={toggleDetailView} selectedProduct={selectedProduct}/>
                    </Modal>
                    : <></>
            } 
            {
                showCartModal
                    ?
                    <Modal>
                        <CartView close={() => setShowCartModal(false)}></CartView>
                    </Modal>
                    :
                    <></>
            }
        </KioskLayout>
    )
}