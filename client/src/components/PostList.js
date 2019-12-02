import React from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PostContainer from './PostContainer';



const PostList = ({ post }) => {
    // const state = useSelector(state => state.simpleReducer);
    return (
        <div>
            {
                post.isFetching &&
                <div style={{ marginTop: "3%" }}>
                    <CircularProgress />
                </div>
            }{
                !post.isFetching &&
                <FooterDiv>
                    <Link to={{
                        pathname: '/create-a-post',
                        state: { channelId: 1 }
                    }}
                        style={{ textDecoration: 'none', width: '80%' }}>
                        <CustomButton><ButtonText>Create Post</ButtonText></CustomButton>
                    </Link>
                </FooterDiv>
            }
            {
                !post.isFetching && post.posts.length > 0 &&
                post.posts.map(content => (
                    <Link to={`/post/${content.post.id}`} key={content.post.id} style={{ textDecoration: 'none' }}>
                        <PostContainer postDetails={content} />
                    </Link>
                ))
            }
        </div>
    )
}

const FooterDiv = styled.div`
    margin-top: 3%;
    width: 100%;
    height: 57px;
    display: flex;
    justify-content: center;
    border: 1px solid ${props => props.theme.border};
    border-radius: 5px;
    background: ${props => props.theme.foreground};
    padding: 5px;
`;

const CustomButton = styled.div`
    background: ${props => props.theme.buttonColor};
    border-radius: 3px;
    border: 0px;
    width: 100%;
    height: 100%;
    padding: 0.5%;
    display: flex;
    align-items: center;
    :hover{
        background: ${props => props.theme.titleBoxBackgroud};
        cursor: pointer;
    };
`;

const ButtonText = styled.h1`
    color: ${props => props.theme.buttonText};
    margin: 0 auto;
`;

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps)(PostList);

// export default PostList;
