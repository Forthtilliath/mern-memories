import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then((existingUser) => {
            if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });

            bcrypt.compare(password, existingUser.password).then((isPasswordCorrect) => {
                if (!isPasswordCorrect) return res.status(404).json({ message: 'Invalid credentials.' });

                const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET_TOKEN, {
                    expiresIn: '1h',
                });

                res.status(200).json({ result: existingUser, token });
            });
        })
        .catch((error) => res.status(500).json({ message: 'Something went wrong' }));
};

export const signup = (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    User.findOne({ email })
        .then((existingUser) => {
            if (existingUser) return res.status(404).json({ message: 'User already exists.' });

            if (password !== confirmPassword) return res.status(404).json({ message: "Passwords don't match." });

            bcrypt.hash(password, 12).then((hashedPassword) => {
                
                User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` }).then((result) => {
                    const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET_TOKEN, {
                        expiresIn: '1h',
                    });

                    res.status(201).json({ result, token });
                });
            });
        })
        .catch(() => res.status(500).json({ message: 'Something went wrong' }))
        .catch((error) => console.log(error));
};
