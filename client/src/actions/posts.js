import * as api from '../api';
import * as actions from '../constants/actionTypes';

export const getPosts = (page) => async (dispatch) => {
    try {
        const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);
    
        dispatch({ type: actions.FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    } catch (error) {
        console.log(error);
    }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data } = await api.fetchPostsBySearch(searchQuery);

        dispatch({ type: actions.FETCH_BY_SEARCH, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: actions.CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: actions.UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: actions.DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        
        dispatch({ type: actions.LIKE, payload: data });
    } catch (error) {
        console.log(error);
    }
};
