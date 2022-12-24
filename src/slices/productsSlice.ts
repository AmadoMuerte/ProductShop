import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    idProduct: number
}

const initialState: CounterState = {
    idProduct: 0,
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        switchId: (state, action: PayloadAction<number>) => {
            state.idProduct = action.payload
        }
    },
})

export const {  switchId } = productSlice.actions
export default productSlice.reducer