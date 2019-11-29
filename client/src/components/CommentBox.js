import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const CommentBox = () => {
    return (
        <Container>
            <StyledTextField placeholder="Comment here" />
            <FooterDiv>
                <CustomButton><ButtonText>POST COMMENT</ButtonText></CustomButton>
            </FooterDiv>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
`;

const StyledTextField = styled.textarea`
    width: 83%;
    height: 150px;
    margin: 0 auto;
    padding: 12px 20px;
    box-sizing: border-box;
    color: ${props => props.theme.normalText};
	border: 1px solid ${props => props.theme.border};
    border-radius: 4px;
    background-color: ${props => props.theme.foreground};
    resize: none;
`;

const FooterDiv = styled(Grid)`
    width: 83%;
    padding: 0.5%;
    border: 1px solid ${props => props.theme.border};
    border-radius: 4px;
    background-color: ${props => props.theme.lighterForeground};
    display: flex;
    justify-content: flex-end;
`

const CustomButton = styled.div`
    background: ${props => props.theme.buttonColor};
    border-radius: 3px;
    width: 20%;
    padding: 0.5%;
    display: flex;
    align-items: center;
    :hover{
        background: ${props => props.theme.titleBoxBackgroud};
        cursor: pointer;
    };
`;

const ButtonText = styled.h1`
    font-weight: bold;
    color: ${props => props.theme.buttonText};
    margin: 0 auto;
`;


export default CommentBox;