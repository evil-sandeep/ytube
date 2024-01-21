import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuopen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuopen = !state.isMenuopen;
        },
        closeMenu: {

        }
    },
})

export const { toggleMenu, closeMenu } = appSlice.actions
export default appSlice.reducer;