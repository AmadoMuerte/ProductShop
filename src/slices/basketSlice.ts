import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

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
            state.idProducts.push(action.payload)
        }
    },
})

export const {  addProduct } = basketSlice.actions
export default basketSlice.reducer