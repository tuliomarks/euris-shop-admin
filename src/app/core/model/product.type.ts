export interface Product {
    id?: string;
    data: ProductData;
}

export interface ProductData {
    review?: string[];
    price?: number;
    description: string;
    title: string;
    category: string;
    employee: string;
}

export interface ProductCategoryStat {
    numberOfProducts: number;
    category: string;
}