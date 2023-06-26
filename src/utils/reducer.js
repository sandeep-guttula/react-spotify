import { reducerCases } from "./Constants";

export const initialState = {
    token: null,
    playlists: [],
    userInfo: null,
    selectedPlaylistId: '3vrYUjYIp9qKxLH2aepMy0'
}

const reducer = (state, action) => {
    switch(action.type) {
        case reducerCases.SET_TOKEN: {
            return{
                ...state,token:action.token
            }
        }
        case reducerCases.SET_PLAYLISTS: {
            return {
                ...state,
                playlists:action.playlists,
            }
        }
        case reducerCases.SET_USER: {
            return {
                ...state,
                userInfo:action.userInfo,
            }
        }
        default:
            return state;
    }
};

export default reducer;