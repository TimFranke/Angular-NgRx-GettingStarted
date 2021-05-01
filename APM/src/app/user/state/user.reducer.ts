import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

export interface UserState {
    maskUserName: boolean;
}

const initialState: UserState = {
    maskUserName: true
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMastUserName = createSelector(getUserFeatureState, state => state.maskUserName);

export const userReducer = createReducer(
    initialState,
    on(createAction('[User] Toggle Mask User Name'), state => {
        // console.log('original state: ' + JSON.stringify(state));
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
);