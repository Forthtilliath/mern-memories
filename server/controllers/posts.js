import PostMessage from '../models/postMessage.js';

export const getPosts = (req, res) => {
    try {
        PostMessage.find()
            .then((posts) => console.log(posts))
            .then((posts) => res.status(200).json(posts));
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
