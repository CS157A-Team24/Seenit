import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestPosts } from '../actions/Post';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import PostList from '../components/PostList';
import ChannelContainers from '../components/ChannelContainers';

const CenterContainer = styled.div`
	width: 900px;
`
// const test = "https://streamlays.com/wp-content/uploads/2017/03/Preview-Hexa-YouTube-Banner-Red.jpg";
const defaultBanner = "http://eskipaper.com/images/dark-background-3.jpg";

const Banner = styled.div`
    height: 250px;
    width: auto;
    background-image: url(${(props) => props.url || defaultBanner});
    background-size: cover;
    background-repeat: no-repeat;
`


const Channel = ({ post, requestPosts, match }) => {
    const { params: { channelId } } = match;
    const path = `c\\${channelId}`;

	useEffect(() => {
        requestPosts(path);
	}, [requestPosts,path]);

	return (
        <div>
            <Banner url={false}/>
            <Grid container direction="row" justify="center">
                <CenterContainer>
                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3} style={{marginBottom: 0}}>
                        <Grid item xs={8}>
                            <PostList post={post} />
                        </Grid>
                        <Grid item xs={4}>
                            <ChannelContainers />
                        </Grid>
                    </Grid>
                </CenterContainer>
            </Grid>
        </div>
	);
};

const mapStateToProps = state => ({
	post: state.post
});

const mapDispatchToProps = { requestPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Channel);