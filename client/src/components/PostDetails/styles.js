import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '600px',
    },
    card: {
        'display': 'flex',
        'width': '100%',
        '& > *': {
            width: '50%',
        },
        [theme.breakpoints.down('sm')]: {
            'flexWrap': 'wrap',
            'flexDirection': 'column',
            '& > *': {
                width: '100%',
            },
        },
    },
    section: {
        borderRadius: '20px',
        margin: '10px',
        flex: 1,
    },
    imageSection: {
        marginLeft: '20px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    recommendedPosts: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    recommendedPost: {
        margin: '20px',
        cursor: 'pointer',
        maxWidth:'20%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            maxWidth:'50%',
        },
    },
    loadingPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '15px',
        height: '39vh',
    },
    commentsOuterContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    commentsInnerContainer: {
        height: '200px',
        overflowY: 'auto',
        marginRight: '30px',
    },
}));
