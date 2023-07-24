export interface Product {
    name: String,
    price: Number,
    code: Number,
    isSoldOut: Boolean,
    sale?: Number,
    isBest: Boolean,
    isNewest: Boolean,
    category: categorys,
}

export type Category = '카테고리1' | '카테고리2' | '카테고리3'