import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestPosts } from '../actions/Post';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import ChannelContainers from '../components/ChannelContainers';
import PostContainer from '../components/PostContainer';
import CommentBox from '../components/CommentBox';
import CommentList from '../components/CommentList';

const CenterContainer = styled.div`
    width: 1200px;
    margin: 0px 3%; 
`
const FirstContainer = styled.div`
    background-color: ${props => props.theme.background};
`

const SecondContainer = styled.div`
    background-color: ${props => props.theme.darkerBackground};
    margin: 0px 5%; 
`

const Post = ({ post, match, requestPosts }) => {
    const { params: { postId } } = match;
    
    useEffect(() => {
        requestPosts();
    }, [requestPosts]);

    return (
        <FirstContainer>
            <SecondContainer>
                <Grid container direction="row" justify="center">
                    <CenterContainer>
                        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3} style={{ marginBottom: 0 }}>
                            <Grid item xs={9}>
                                {PostContainer(post.posts[postId-1],postId)}
                                <CommentBox />
                                <CommentList />
                            </Grid>
                            <Grid item xs={3}>
                                <ChannelContainers />
                            </Grid>
                        </Grid>
                    </CenterContainer>
                </Grid>
            </SecondContainer>
        </FirstContainer>
    );
};

const mapStateToProps = state => ({
    post: state.post
});

const mapDispatchToProps = { requestPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Post);