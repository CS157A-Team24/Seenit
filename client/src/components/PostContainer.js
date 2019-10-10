import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';
import ArrowDownwardTwoTone from '@material-ui/icons/ArrowDownwardTwoTone';
import ArrowUpwardTwoTone from '@material-ui/icons/ArrowUpwardTwoTone';
import styled from 'styled-components/macro';


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
`

// const Container = styled.div`
//     border: 1px solid ${props => props.theme.border};
//     border-radius: 5px;
//     margin-top: 20px;
// `
const LeftArea = styled.div`
	background-color: ${props => props.theme.foreground};
`

const Votes = styled.h5`
	color: ${props => props.theme.normalText};
`

const PostContainer = (props, index) => {
	const classes = useStyles();
	// const postedBy = `Posted by ${props.postedBy} ${props.time} hours ago`;
	const postedBy = `Posted by ${props.createdBy} ${props.createdAt} hours ago`;
	return (
		<Container>
			<Grid key={index}>
				<Grid container direction="row" justify="center"  spacing={0}>
					<LeftArea>
					<Grid item xs={1}>
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
					</Grid>
					</LeftArea>
					<Grid item xs={11}>
						<Card className={classes.card} square={true}>
							<CardHeader
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
								title={props.atChannel}
								subheader={postedBy}
							/>
							{/* <CardMedia
								className={classes.media}
								image="/static/images/cards/paella.jpg"
								title="Paella dish"
							/> */}
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{props.title}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{props.content}
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton aria-label="add to favorites">
									<CommentIcon />
								</IconButton>
								<IconButton aria-label="share">
									<ShareIcon />
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default PostContainer;
