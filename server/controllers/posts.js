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
    const newPost = new PostMessage({ ...req.body, createdAt: new Date() });

    try {
        newPost.save().then(() => res.status(201).json(newPost));
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updatePost = (req, res) => {
    const { id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    PostMessage.findByIdAndUpdate(id, { ...post, id }, { new: true }).then((updatedPost) => res.json(updatedPost));
};

export const deletePost = (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    PostMessage.findByIdAndRemove(id).then(() => res.json({ message: 'Post deleted successfully' }));
};
