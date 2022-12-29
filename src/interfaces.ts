export interface IProduct {
    title: string,
    price: number,
    category: string,
    image: string,
    id: number,
    rating: {rate: number, count: number}
}

export interface IFullProduct {
    title: string,
    price: number,
    category: string,
    image: string,
    id: number,
    description: string,
    rating: {rate: number, count: number}
}

export interface BasketProps {
    product: IProduct,
    deleteFunc(id: number): void
}