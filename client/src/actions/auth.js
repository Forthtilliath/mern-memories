import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
    try {
        // const { data } = await api.fetchPosts();
        dispatch({ type: AUTH, payload: formData });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        // const { data } = await api.fetchPosts();
        dispatch({ type: AUTH, payload: formData });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};
