import { atom } from 'jotai';
import { Product } from '../types';

export const cartAtom = atom<Product>([])
export const productAtom = atom<Product>([
    {
        name: '상품1',
        price: 1000,
        code: 1,
        isSoldOut: false,
        sale: 10,
        isBest: true,
        isNewest: true,
        category: '카테고리1',
    },
    {
        name: '상품2',
        price: 2000,
        code: 2,
        isSoldOut: false,
        sale: 0,
        isBest: false,
        isNewest: true,
        category: '카테고리2',
    },
    {
        name: '상품3',
        price: 3000,
        code: 3,
        isSoldOut: true,
        sale: 20,
        isBest: true,
        isNewest: false,
        category: '카테고리3',
    },
    {
        name: '상품4',
        price: 2000,
        code: 4,
        isSoldOut: false,
        sale: 0,
        isBest: false,
        isNewest: true,
        category: '카테고리1',
    },
    {
        name: '상품5',
        price: 5000,
        code: 5,
        isSoldOut: true,
        sale: 10,
        isBest: true,
        isNewest: false,
        category: '카테고리2',
    }
])
