import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import { requestAPost } from '../actions/Post';

import ChannelContainers from '../components/ChannelContainers';
import PostContainer from '../components/PostContainer';
import CommentBox from '../components/CommentBox';
import CommentList from '../components/CommentList';

const Post = ({ match }) => {
    const { params: { postId } } = match;
    const post = useSelector(state => state.post);
    const channel = useSelector(state => state.channel);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestAPost(postId));
    }, [dispatch, postId]);

    return (
        <FirstContainer>
            <SecondContainer>
                <Grid container direction="row" justify="center">
                    <CenterContainer>
                        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3} style={{ marginBottom: 0 }}>
                            <Grid item direction="column" xs={9}>
                                <PostCommentContainer>
                                    {post.postDetails != null && <PostContainer postDetails={post.postDetails} />}
                                    <CommentBox style={{marginTop: "2%" }}/>
                                    <CommentList />
                                </PostCommentContainer>
                            </Grid>
                            <Grid item xs={3}>
                                {channel.channelDetails != null && <ChannelContainers />}
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

const PostCommentContainer = styled.div`
    background-color: ${props => props.theme.foreground};
`;

const FirstContainer = styled.div`
    background-color: ${props => props.theme.background};
`;

const SecondContainer = styled.div`
    background-color: ${props => props.theme.darkerBackground};
    margin: 0px 5%; 
`;

export default Post;
