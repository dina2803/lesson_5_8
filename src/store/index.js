import { configureStore } from '@reduxjs/toolkit'
import registrationReducer from '../store/registrationSlice'
export default configureStore({
    reducer: {
        registration: registrationReducer,
    },
})