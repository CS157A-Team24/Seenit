import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { postAPost } from '../actions/Post';

const CAPContainer = ({channelId}) => {
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    let handleSubmit = (event) => {
        const newPost = {
            title: title,
            content: content,
            channelId: channelId,
            "userId": "6"
        }
        dispatch(postAPost(newPost));
        event.preventDefault();
    }

    let handleTitleChange = (event) => {
        console.log(channelId);
        setTitle(event.target.value);
    }

    let handleContentChange = (event) => {
        setContent(event.target.value);
    }


    return (
        <form onSubmit={handleSubmit}>
            <TitleBox>Create a post</TitleBox>
            <Container>
                <TitleInput placeholder="Title" onChange={handleTitleChange} />
                <StyledTextField placeholder="Write here!" onChange={handleContentChange} />
                <FooterDiv>
                    <CustomButton type="submit" value="Submit"></CustomButton>
                </FooterDiv>
            </Container>
        </form>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
    padding: 2% 2%;
    background-color: ${props => props.theme.foreground};
    border-radius: 4px;
`;

const TitleBox = styled.div`
    border-bottom: 1px solid;
    border-bottom-color: ${props => props.theme.border};
    color: ${props => props.theme.normalText};
    font-size: ${props => props.theme.h2};

`;

const StyledTextField = styled.textarea`
    width: 100%;
    height: 150px;
    margin-Top: 2%;
    padding: 12px 20px;
    box-sizing: border-box;
    color: ${props => props.theme.normalText};
	border: 1px solid ${props => props.theme.border};
    border-radius: 4px;
    background-color: ${props => props.theme.foreground};
    resize: none;
`;

const TitleInput = styled(StyledTextField)`
    height: 50px;
`

const FooterDiv = styled(Grid)`
    margin-top: 2%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const CustomButton = styled.input`
    background: ${props => props.theme.buttonColor};
    border-radius: 3px;
    border: 0px;
    width: 20%;
    padding: 0.5%;
    display: flex;
    align-items: center;
    :hover{
        background: ${props => props.theme.titleBoxBackgroud};
        cursor: pointer;
    };
    font-weight: bold;
    color: ${props => props.theme.buttonText};
`;


export default CAPContainer;