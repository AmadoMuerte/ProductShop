import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IFullProduct} from "../interfaces";
import {stat} from "fs";

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
        searchProduct: (state, action: PayloadAction<string>) => {
            state.searchingData = state.productsData.filter( product => {
                let productString = product.title.toLowerCase()
                if (productString.indexOf(action.payload) !== -1) {
                    return product
                }
            })
            state.searching = !!action.payload;

        }
    },
})

export const {  addProducts, searchProduct } = productSlice.actions
export default productSlice.reducer