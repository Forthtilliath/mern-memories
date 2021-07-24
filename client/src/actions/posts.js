import * as api from '../api';
import * as actions from '../constants/actionTypes';

export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: actions.LOADING_START });
        const { data } = await api.fetchPost(id);

        dispatch({ type: actions.FETCH_POST, payload: data });
        dispatch({ type: actions.LOADING_END });
    } catch (error) {
        console.log(error);
    }
};

export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type: actions.LOADING_START });
        const { data } = await api.fetchPosts(page);

        dispatch({ type: actions.FETCH_ALL, payload: data });
        dispatch({ type: actions.LOADING_END });
    } catch (error) {
        console.log(error);
    }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: actions.LOADING_START });
        const { data } = await api.fetchPostsBySearch(searchQuery);

        dispatch({ type: actions.FETCH_BY_SEARCH, payload: data });
        dispatch({ type: actions.LOADING_END });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post,history) => async (dispatch) => {
    try {
        dispatch({ type: actions.LOADING_START });
        const { data } = await api.createPost(post);

        history.push(`/posts/${data._id}`)

        dispatch({ type: actions.CREATE, payload: data });
        dispatch({ type: actions.LOADING_END });
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

export const commentPost = (value,id) => async (dispatch) => {
    try {
        const { data } = await api.commentPost(value,id);

        dispatch({ type: actions.COMMENT, payload: data });

        return data.comments;
    } catch (error) {
        console.log(error);
    }
};
