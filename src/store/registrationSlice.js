import { createSlice } from '@reduxjs/toolkit'

export const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        username: '',
        password: '',
        confirmPassword: '',
        message: '',
        registered: false,
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
        setRegistered: (state, action) => {
            state.registered = action.payload
        },
    },
})
export const { setUsername, setPassword, setConfirmPassword, setMessage, setRegistered } = registrationSlice.actions;
export const selectRegistration = (state) => state.registration
export default registrationSlice.reducer;