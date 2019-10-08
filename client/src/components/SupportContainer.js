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

const SupportContainer = () => {
    return (
        <Container>
            <Grid>
                <Grid>

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