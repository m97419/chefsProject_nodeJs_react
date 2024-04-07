import { configureStore } from "@reduxjs/toolkit"
import ApiSlice from "../../src/app/apiSlice"
import authSliceReducer from "./components/auth/authSlice"
// import countrySlice from "./components/countries/countrySlice"
import { setupListeners } from "@reduxjs/toolkit/query"
const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        [ApiSlice.reducerPath]: ApiSlice.reducer
    },
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(ApiSlice.middleware),
    devTools: true
})
export default store

setupListeners(store.dispatch)