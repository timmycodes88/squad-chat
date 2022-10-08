import { SET_PROFILE } from "./CONSTANTS"


export const userReducer = (state, action) => {

    const data = action.payload;

    switch(action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: data
            }
    }

}
