import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Avatar, CardActions, CardHeader, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

import styled from 'styled-components';
import { Saved } from 'styled-icons/octicons/Saved';
import { ArrowUp } from 'styled-icons/icomoon/ArrowUp';
import { ArrowDown } from 'styled-icons/icomoon/ArrowDown';
import { Link } from 'react-router-dom';

import { USER_ID } from '../constants';
import { calTime } from '../utils/helper';
import { saveAPost, unsaveAPost } from '../utils/api';
import { updateSavedPosts } from '../actions/Post';



const PostContainer = ({ postDetails }) => {
	const time = calTime(postDetails.post.createdAt);
	const uId = localStorage.getItem(USER_ID);
	const postedBy = `Posted by ${postDetails.userName} · ${time} `;
	const savedPosts = useSelector(state => state.post.savedPosts);
	const posts = useSelector(state => state.post.posts);
    const [open, setOpen] = React.useState(false);
	const [isSaved, setIsSave] = React.useState(false);
	const dispatch = useDispatch();

	React.useEffect(()=>{
		if(savedPosts && savedPosts.findIndex(content => content.post.id === postDetails.post.id) !== -1){
			setIsSave(true);
		}
	},[])

	const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
	};
	
	const handleSave = () => {
		if(uId){
			const body = {
				userId: uId,
				postId: postDetails.post.id
			}
			if(isSaved){
				unsaveAPost(body);
				const newSavedPost = [savedPosts.filter(content=>content.post.id !== postDetails.post.id)]
				dispatch(updateSavedPosts(newSavedPost));
			}else{
				saveAPost(body);
				const newSavedPost = [...savedPosts,posts.find(content=>content.post.id === postDetails.post.id)]
				dispatch(updateSavedPosts(newSavedPost));
			}
			setIsSave(!isSaved);

		}else{
			handleClickOpen();
		}
	}

	return (
		<Container key={postDetails.post.id}>
			<Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Message"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            You need to login to save a post
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
			<Grid container direction="row" justify="center" spacing={0}>
				<LeftArea item xs={1}>
					<Grid container direction="column"
						justify="center"
						alignItems="center">
						<IconButton>
							<ArrowUpIcon size="25"/>
						</IconButton>
						<Votes>
							{postDetails.points}
						</Votes>
						<IconButton>
							<ArrowDownIcon size="25"/>
						</IconButton>
					</Grid>
				</LeftArea>
				<Grid item xs={11}>
					<CustomCardHeader
						avatar={
							<Avatar style={{width: 60, height: 60}}
                        			alt={`Channel's Avatar`} 
                        			src={`https://cdn2.iconfinder.com/data/icons/blue-round-amazing-icons-1/512/home-alt-512.png`}/>
						}
						action={
							<IconButton onClick={handleSave} aria-label="settings">
								{!isSaved && <SavedIcon size="25" />}
								{isSaved && <SavedIconHighlighted size="25"/>}
							</IconButton>
						}
						title={postDetails.channel.name}
						subheader={postedBy}
					/>
					<Link to={`/post/${postDetails.post.id}`} style={{ textDecoration: 'none' }}>
						<PostTitle>
							{postDetails.post.title}
						</PostTitle>
						{/* <CardMedia
								className={classes.media}
								image="/static/images/cards/paella.jpg"
								title="Paella dish"
							/> */}
						<CardContent>
							<BodyText>
								{postDetails.post.content}
							</BodyText>
						</CardContent>
					</Link>
					<CardActions disableSpacing>
						<IconButton aria-label="add to favorites" >
							<CommentIcon />
						</IconButton>
						<IconButton aria-label="share">
							<ShareIcon />
						</IconButton>
					</CardActions>
					{/* </Card> */}
				</Grid>
			</Grid>
		</Container>
	);
}

const SavedIcon = styled(Saved)`
	color: ${props => props.theme.mutedText}; 
`;

const SavedIconHighlighted = styled(Saved)`
	color: ${props => props.theme.upvote}; 
`;

const ArrowUpIcon = styled(ArrowUp)`
	color: ${props => props.theme.mutedText};
`;

const ArrowDownIcon = styled(ArrowDown)`
	color: ${props => props.theme.mutedText};
`;


// const useStyles = makeStyles(theme => ({
// 	media: {
// 		height: 0,
// 		paddingTop: '56.25%', // 16:9
// 	}
// }));

const Container = styled.div`
	margin-top: 20px;
	background: ${props => props.theme.foreground};
	border-radius: 5px;
	border: 1px solid ${props => props.theme.border};
	:hover{
		border-color: ${props => props.theme.hoverBorder};
		cursor: pointer;
	};
`;

const LeftArea = styled(Grid)`
	background-color: ${props => props.theme.darkerForeground};
`;

const Votes = styled.h5`
	color: ${props => props.theme.normalText};
`;

const PostTitle = styled.h1`
	color: ${props => props.theme.normalText};
	font-size: ${props => props.theme.h1};
	font-weight: bold;
	margin-left: 0.7em;
`

const BodyText = styled.p`
	color: ${props => props.theme.normalText}
`

const CustomCardHeader = styled(({ ...other }) => <CardHeader {...other} />)`
	& .MuiCardHeader-title{
		color: ${props => props.theme.normalText};
	}
	& .MuiCardHeader-subheader{
		color: ${props => props.theme.mutedText};
	}
`;

export default PostContainer;
