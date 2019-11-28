import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import { requestChannelDetails } from '../actions/Channel';

import ChannelContainers from '../components/ChannelContainers';
import PostContainer from '../components/PostContainer';
import CommentBox from '../components/CommentBox';
import CommentList from '../components/CommentList';

const Post = ({ match }) => {
    const { params: { postId } } = match;
    const posts = useSelector(state => state.post.posts);
    const channel= useSelector(state => state.channel);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(requestChannelDetails(posts.find(content => content.post.id === postId).channel.id));
	},[dispatch,postId,posts]);
    
    return (
        <FirstContainer>
            <SecondContainer>
                <Grid container direction="row" justify="center">
                    <CenterContainer>
                        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3} style={{ marginBottom: 0 }}>
                            <Grid item xs={9}>
                                <PostContainer posts={posts.find(content => content.post.id === postId)}/>
                                <CommentBox />
                                <CommentList />
                            </Grid>
                            <Grid item xs={3}>
                                {!channel.isFetching && channel.channelDetails != null && <ChannelContainers />}
                            </Grid>
                        </Grid>
                    </CenterContainer>
                </Grid>
            </SecondContainer>
        </FirstContainer>
    );
};

const CenterContainer = styled.div`
    margin: 0 5%;
    width: 100%;
`;
const FirstContainer = styled.div`
    background-color: ${props => props.theme.background};
`;

const SecondContainer = styled.div`
    background-color: ${props => props.theme.darkerBackground};
    margin: 0px 5%; 
`;

export default Post;