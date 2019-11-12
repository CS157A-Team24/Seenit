import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styled from 'styled-components';

const Container = styled.div`

`;

const StyledTextField = styled(TextareaAutosize)`
    background-color: ${props => props.theme.foreground};
    color: ${props => props.theme.normalText};
    box-sizing: inherit;
`;

// const StyledTextField = styled.textarea`
//     background-color: ${props => props.theme.foreground};
//     color: ${props => props.theme.normalText};
// `;



const CommentBox = () => {

  
    return (
        <Container>
            {/* <StyledTextField aria-label="minimum height" rows={3} placeholder="Minimum 3 rows"/> */}
            <article className="media">
                <div className="media-content">
                    <div className="field">
                        <p className="control">
                            <StyledTextField className="textarea" placeholder="Add a comment..." />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button">Post comment</button>
                        </p>
                    </div>
                </div>
            </article>
        </Container>
    )
}

export default CommentBox;