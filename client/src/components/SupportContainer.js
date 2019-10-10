import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components/macro';

const Container = styled.div`
    border: 1px solid ${props => props.theme.border};
    background-color: ${props => props.theme.foreground};
    border-radius: 5px;
    margin-top: 20px;
    height: 400px
`

const Title = styled.h3`
    color: ${props => props.theme.normalText};
`

const SupportContainer = () => {
    return (
        <Container>
            <Grid container justify="center">
                <Grid>
                    <Title>
                        CHANNELS
                    </Title>
                </Grid>
            </Grid>
        </Container>
    )
}

// const SupportContainer = () =>{
//     return(
//         <Grid style={{ height: 400 }} className="post-container">
//             <Grid>

//             </Grid>
//         </Grid>
//     )
// }

export default SupportContainer;