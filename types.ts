export type Category = `카테고리${number}`;

export interface Product {
	name: string;
	price: number;
	code: number;
	isSoldOut: boolean;
	sale: number;
	isBest: boolean;
	isNewest: boolean;
	category: Category;
	options: ProductOption[];
}

export interface ProductOption {
	optionName: string;
	optionKey: string;
	options: ProductDetailOption[];
}

export interface ProductDetailOption {
	optionName: string;
	price?: number;
}

export interface CartProduct extends Product {
	selectedOptions: string[];
	count: number;
}
