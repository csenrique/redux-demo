import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    fullName: '',
    token: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, actions) => {
            state.email = actions.payload.email;
            state.fullName = actions.payload.fullName;
            state.token = actions.payload.token
        },
        unsetUser: (state) => {
            state.email = "";
            state.fullName = "";
            state.token = ""
        }
    }    
});

//Actions creator are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;