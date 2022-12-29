import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

export interface CounterState {
    idProducts: number[]
}

const initialState: CounterState = {
    idProducts: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<number>) => {
            state.idProducts = state.idProducts.filter( id => {
                return id !== action.payload
            })
            state.idProducts.push(action.payload)
        },
        
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.idProducts = state.idProducts.filter(id => {
                return id !== action.payload
            })
        }
    },
})

export const {  addProduct, deleteProduct } = basketSlice.actions
export default basketSlice.reducer