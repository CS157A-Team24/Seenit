import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { Grid, IconButton, Avatar, CardActions, CardHeader, CardContent } from '@material-ui/core';

import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

import styled from 'styled-components';
import { Saved } from 'styled-icons/octicons/Saved';
import { ArrowUp } from 'styled-icons/icomoon/ArrowUp';
import { ArrowDown } from 'styled-icons/icomoon/ArrowDown';
import { Link } from 'react-router-dom';


import { calTime } from '../utils/helper';



const PostContainer = ({ postDetails }) => {
	const classes = useStyles();
	const time = calTime(postDetails.post.createdAt);

	const postedBy = `Posted by ${postDetails.userName} · ${time} `;

	const handleSave = () => {
		console.log("Saved");
	}

	return (
		<Container key={postDetails.post.id}>
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
							<Avatar aria-label="recipe" className={classes.avatar}>
								T
          						</Avatar>
						}
						action={
							<IconButton onClick={handleSave} aria-label="settings">
								<SavedIcon size="25" />
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

const ArrowUpIcon = styled(ArrowUp)`
	color: ${props => props.theme.mutedText};
`;

const ArrowDownIcon = styled(ArrowDown)`
	color: ${props => props.theme.mutedText};
`;


const useStyles = makeStyles(theme => ({
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

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
