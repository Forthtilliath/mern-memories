import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        PostMessage.findById(id).then((post) => res.status(200).json(post));
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getPosts = (req, res) => {
    const { page } = req.query;

    try {
        const LIMIT = Number(process.env.POSTS_PER_PAGE);
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

        PostMessage.countDocuments({}).then((total) => {
            PostMessage.find()
                .sort({ _id: -1 })
                .limit(LIMIT)
                .skip(startIndex)
                .then((posts) =>
                    res
                        .status(200)
                        .json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) }),
                );
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getPostsBySearch = (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        let conditions = [{ tags: { $in: tags.split(',') } }];
        if (searchQuery) {
            const title = new RegExp(searchQuery, 'i');
            conditions.push({ title });
        }

        PostMessage.find({ $and: conditions })
            .then((posts) => res.status(200).json(posts));
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = (req, res) => {
    const newPost = new PostMessage({ ...req.body, creator: req.userId, createdAt: new Date().toISOString() });

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

export const likePost = (req, res) => {
    const { id } = req.params;

    if (!req.userId) return res.status(401).json({ message: 'Unauthenticated' });

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    PostMessage.findById(id).then((post) => {
        const index = post.likes.findIndex((id) => id === String(req.userId));

        if (index === -1) {
            post.likes.push(req.userId);
        } else {
            post.likes = post.likes.filter((id) => id !== String(req.userId));
        }

        PostMessage.findByIdAndUpdate(id, post, { new: true }).then((updatedPost) => res.json(updatedPost));
    });
};

export const commentPost = (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    if (!req.userId) return res.status(401).json({ message: 'Unauthenticated' });

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    PostMessage.findById(id).then((post) => {
        post.comments.push(value);

        PostMessage.findByIdAndUpdate(id, post, { new: true }).then((updatedPost) => res.json(updatedPost));
    });
};
