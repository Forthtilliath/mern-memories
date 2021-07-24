import * as actions from '../constants/actionTypes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case actions.FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case actions.FETCH_BY_SEARCH:
            return action.payload;
        case actions.CREATE:
            return [...state, action.payload];
        case actions.UPDATE:
        case actions.LIKE:
            return state.map((post) => (post._id === action.payload._id ? action.payload : post));
        case actions.DELETE:
            return state.filter((post) => post._id !== action.payload);
        default:
            return state;
    }
};

export default reducer;
