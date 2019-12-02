import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';


import CAPContainer from '../components/CreateAPostContainer';
import CAPSContainers from '../components/CreateAPostSupportContainers';

const CenterContainer = styled.div`
    margin: 5% 10% 0px 10%;
    width: 100%;
`


const CreateAPost = ({location}) => {
    const channelId = location.state.channelId;
	return (
        <div>
            <Grid container direction="row" justify="center">
                <CenterContainer>
                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3} style={{marginBottom: 0}}>
                        <Grid item xs={9}>
                            <CAPContainer channelId={channelId}/>
                        </Grid>
                        <Grid item xs={3}>
                            {<CAPSContainers />}
                        </Grid>
                    </Grid>
                </CenterContainer>
            </Grid>
        </div>
	);
};

export default CreateAPost;