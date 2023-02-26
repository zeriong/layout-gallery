import {createSlice} from '@reduxjs/toolkit';

export interface IMenuHandlerState {
    showMenu: boolean;
}

const initMenuHandlerState: IMenuHandlerState = {
    showMenu: false,
}

export const menuHandlerSlice = createSlice({
    name: 'changedMenu',
    initialState: initMenuHandlerState,
    reducers: {
        MENU_SWITCH: (state: IMenuHandlerState) => {
            state.showMenu = !state.showMenu;
        },
    },
})

export const { MENU_SWITCH } = menuHandlerSlice.actions;