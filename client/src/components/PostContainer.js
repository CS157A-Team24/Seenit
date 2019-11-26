import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { Grid, IconButton, Avatar, CardActions, CardHeader, CardContent } from '@material-ui/core';

import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDownwardTwoTone from '@material-ui/icons/ArrowDownwardTwoTone';
import ArrowUpwardTwoTone from '@material-ui/icons/ArrowUpwardTwoTone';

import styled from 'styled-components';

import { calTime } from '../utils/helper';



const PostContainer = (props) => {
	const classes = useStyles();
	const time = calTime(props.post.createdAt);

	let postedBy = `Posted by ${props.userName} ${time} `;
	
	return (
		<Container key={props.post.id}>
				<Grid container direction="row" justify="center" spacing={0}>
					<LeftArea item xs={1}>
							<Grid container direction="column"
								justify="center"
								alignItems="center">
								<IconButton>
									<ArrowUpwardTwoTone />
								</IconButton>
								<Votes>
									{props.points}
								</Votes>
								<IconButton>
									<ArrowDownwardTwoTone />
								</IconButton>
							</Grid>
					</LeftArea>
					<Grid item xs={11}>
						{/* <Card className={classes.card} classes={{root: classes.root}} square={true}> */}

						<CustomCardHeader
							avatar={
								<Avatar aria-label="recipe" className={classes.avatar}>
									T
          							</Avatar>
							}
							action={
								<IconButton aria-label="settings">
									<MoreVertIcon />
								</IconButton>
							}
							title={props.channel.name}
							subheader={postedBy}
						/>
						<PostTitle>
							{props.post.title}
						</PostTitle>
						{/* <CardMedia
								className={classes.media}
								image="/static/images/cards/paella.jpg"
								title="Paella dish"
							/> */}
						<CardContent>
							<BodyText>
								{props.post.content}
							</BodyText>
						</CardContent>
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

const useStyles = makeStyles(theme => ({
	card: {
		maxWidth: 600,
		maxHeight: 650,
	},
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

const CustomCardHeader = styled(({...other }) => <CardHeader {...other} />)`
	& .MuiCardHeader-title{
		color: ${props => props.theme.normalText};
	}
	& .MuiCardHeader-subheader{
		color: ${props => props.theme.mutedText};
	}
`;

export default PostContainer;
