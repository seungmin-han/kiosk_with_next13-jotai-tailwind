import { atom } from 'jotai';
import { Product, CartProduct } from '@/types';

export const cartAtom = atom<CartProduct[]>([]);
export const productAtom = atom<Product[]>([
	{
		name: '상품1',
		price: 1000,
		code: 1,
		isSoldOut: false,
		sale: 10,
		isBest: true,
		isNewest: true,
		category: '카테고리1',
		options: [
			{
				optionKey: 'option1',
				optionName: '옵션1',
				options: [
					{
						optionName: '옵션1-1',
					},
					{
						optionName: '옵션1-2',
					},
					{
						optionName: '옵션1-3',
					},
					{
						optionName: '옵션1-4',
					},
				],
			},
			{
				optionKey: 'option2',
				optionName: '옵션2',
				options: [
					{
						optionName: '옵션2-1',
					},
					{
						optionName: '옵션2-2',
					},
					{
						optionName: '옵션2-3',
					},
				],
			},
			{
				optionKey: 'option3',
				optionName: '옵션3',
				options: [
					{
						optionName: '옵션1-1',
					},
					{
						optionName: '옵션1-2',
					},
					{
						optionName: '옵션1-3',
					},
					{
						optionName: '옵션1-4',
					},
				],
			},
			{
				optionKey: 'option4',
				optionName: '옵션4',
				options: [
					{
						optionName: '옵션1-1',
					},
					{
						optionName: '옵션1-2',
						price: 500,
					},
					{
						optionName: '옵션1-3',
						price: 700,
					},
					{
						optionName: '옵션1-4',
						price: 700,
					},
				],
			},
		],
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
		options: [],
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
		options: [],
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
		options: [],
	},
	{
		name: '상품5',
		price: 5000,
		code: 5,
		isSoldOut: false,
		sale: 10,
		isBest: false,
		isNewest: false,
		category: '카테고리2',
		options: [],
	},
	{
		name: '상품6',
		price: 6000,
		code: 6,
		isSoldOut: false,
		sale: 10,
		isBest: true,
		isNewest: false,
		category: '카테고리3',
		options: [],
	},
	{
		name: '상품7',
		price: 7000,
		code: 7,
		isSoldOut: false,
		sale: 10,
		isBest: true,
		isNewest: false,
		category: '카테고리1',
		options: [],
	},
	{
		name: '상품8',
		price: 8000,
		code: 8,
		isSoldOut: true,
		sale: 10,
		isBest: false,
		isNewest: true,
		category: '카테고리2',
		options: [],
	},
	{
		name: '상품9',
		price: 9000,
		code: 9,
		isSoldOut: false,
		sale: 10,
		isBest: false,
		isNewest: false,
		category: '카테고리3',
		options: [],
	},
	{
		name: '상품10',
		price: 10000,
		code: 10,
		isSoldOut: false,
		sale: 10,
		isBest: true,
		isNewest: false,
		category: '카테고리1',
		options: [],
	},
	{
		name: '상품11',
		price: 11000,
		code: 11,
		isSoldOut: true,
		sale: 10,
		isBest: false,
		isNewest: true,
		category: '카테고리2',
		options: [],
	},
]);
