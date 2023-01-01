import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {IProduct} from "../interfaces";

export interface CounterState {
    basketProducts: IProduct[]
}

const initialState: CounterState = {
    basketProducts: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.basketProducts = state.basketProducts.filter(product => {
                return product.id !== action.payload.id
            })
            state.basketProducts.push(action.payload)
        },
        
        deleteProduct: (state, action: PayloadAction<Number>) => {
            state.basketProducts = state.basketProducts.filter(product => {
                return product.id !== action.payload
            })
        }
    },
})

export const {  addProduct, deleteProduct } = basketSlice.actions
export default basketSlice.reducer