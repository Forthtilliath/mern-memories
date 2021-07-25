import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import Resizer from 'react-image-file-resizer';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const initialData = { title: '', message: '', tags: '', selectedFile: '' };
    const [postData, setPostData] = useState(initialData);
    const post = useSelector((state) => (currentId ? state.posts.posts.find((p) => p._id === currentId) : null));
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [successFile, setSuccessFile] = useState(false);
    const [errorFile, setErrorFile] = useState(false);

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData(initialData);
    };

    function rizeFile(fileInput) {
        fetch(fileInput)
            .then((res) => res.blob())
            .then((file) => {
                console.log(file);
                Resizer.imageFileResizer(
                    file,
                    1000,
                    1000,
                    'JPEG',
                    60,
                    0,
                    (uri) => setPostData({ ...postData, selectedFile: uri }),
                    'base64',
                    600,
                    600,
                );
            })
            .then(() => setSuccessFile(true))
            .then(() => setErrorFile(false))
            .catch((err) => {
                setSuccessFile(false);
                setErrorFile(true);
            });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        } else {
            dispatch(createPost({ ...postData, name: user?.result?.name }, history));
        }
        clear();
    };

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own memories and like other's memories.
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags (coma separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => rizeFile(base64)}
                        // onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                {(successFile || errorFile) && (
                    <div className={classes.messageFile}>
                        {successFile && <div className={classes.successFile}>Success: File is an Image</div>}
                        {errorFile && <div className={classes.errorFile}>Error: File Is NOT Image!</div>}
                    </div>
                )}
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                    disabled={postData.title === '' || postData.message === '' || postData.tags === []}
                >
                    Submit
                </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
