import { configureStore} from "@reduxjs/toolkit";
import productReducer from '../slices/productsSlice'
import basketReducer from '../slices/basketSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        basket: basketReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof  store.dispatch