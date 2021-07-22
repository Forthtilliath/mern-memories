import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = (req, res) => {
    try {
        PostMessage.find().then((posts) => res.status(200).json(posts));
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = (req, res) => {
    const newPost = new PostMessage(req.body);

    try {
        newPost.save().then(() => res.status(201).json(newPost));
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updatePost = (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true }).then((updatedPost) => res.json(updatedPost));
};
