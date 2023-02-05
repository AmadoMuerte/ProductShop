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
        },
        searchByPrice: (state, action: PayloadAction<{startPrice: number, lastPrice: number}>) => {
            let countPrice = (lastPrice: number) => {
                state.searchingData = state.searchingData.filter( product => {
                    if (product.price >= action.payload.startPrice &&
                        product.price < lastPrice) {
                        return product
                    }
                })
            }

            if (action.payload.lastPrice === 0) {
                let maxPrice: number = 0
                for (let i = 0; i < state.productsData.length; i++) {
                    if (maxPrice < state.productsData[i].price) {
                        maxPrice = state.productsData[i].price
                    }
                }
                countPrice(maxPrice)
            } else {countPrice(action.payload.lastPrice)}
        },

        searchByCategory: (state, action: PayloadAction<string>) => {
            state.searchingData = state.productsData
            if (action.payload !== '' && action.payload !== 'none') {
                state.searchingData = state.searchingData.filter (product => {
                    if (product.category === action.payload) return product
                })
            }
            state.searching = true
        },
    },
})

export const {  addProducts, searchByName,
                searchByPrice, searchByCategory,} = productSlice.actions
export default productSlice.reducer