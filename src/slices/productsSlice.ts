import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IFullProduct} from "../interfaces";

export interface CounterState {
    productsData: IFullProduct[]
    searchingData: IFullProduct[]
    searching: boolean
}

const initialState: CounterState = {
    productsData: [],
    searchingData: [],
    searching: false
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<IFullProduct[]>) => {
            state.productsData = action.payload
        },
        searchByName: (state, action: PayloadAction<string>) => {
            state.searchingData = state.searchingData.filter( product => {
                let productString = product.title.toLowerCase()
                if (productString.indexOf(action.payload) !== -1) {
                    return product
                }
            })
            state.searching = !!action.payload;

        },
        searchByPrice: (state, action: PayloadAction<{startPrice: number, lastPrice: number}>) => {
            state.searchingData = state.searchingData.filter( product => {
                if (product.price >= action.payload.startPrice &&
                    product.price < action.payload.lastPrice) {
                    return product
                }
            })
        },
        searchByCategory: (state, action: PayloadAction<string>) => {
                if (action.payload !== 'none') {
                    state.searchingData = state.productsData.filter (product => {
                        if (product.category === action.payload) return product
                    })
                    state.searching = !!action.payload;
                } else {
                    state.searchingData = state.productsData
                }
        },

    },
})

export const {  addProducts, searchByName,
                searchByPrice, searchByCategory,} = productSlice.actions
export default productSlice.reducer