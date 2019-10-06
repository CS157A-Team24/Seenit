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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';
import ArrowDownwardTwoTone from '@material-ui/icons/ArrowDownwardTwoTone';
import ArrowUpwardTwoTone from '@material-ui/icons/ArrowUpwardTwoTone';

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

const PostContainer = (props,index) => {
	const classes = useStyles();
	// const postedBy = `Posted by ${props.postedBy} ${props.time} hours ago`;
	const postedBy = `Posted by ${props.createdBy} hours ago`;

	return (
		<Grid className="post-container" key={index}>
			<Grid container direction="row" justify="flex-start" alignItems="center" spacing={0}>
				<Grid item xs={1}>
					<Grid container direction="column"
						justify="center"
						alignItems="center">
						<IconButton>
							<ArrowUpwardTwoTone />
						</IconButton>
						<Typography>
							{props.points}
						</Typography>
						<IconButton>
							<ArrowDownwardTwoTone />
						</IconButton>
					</Grid>
				</Grid>
				<Grid item xs={11}>
					<Card className={classes.card}>
						<CardHeader
							avatar={
								<Avatar aria-label="recipe" className={classes.avatar}>
									R
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
								<FavoriteIcon />
							</IconButton>
							<IconButton aria-label="share">
								<ShareIcon />
							</IconButton>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default PostContainer;
