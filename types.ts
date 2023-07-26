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
	options: string[];
}

export interface CartProduct extends Product {
	selectedOptions: string[];
}
