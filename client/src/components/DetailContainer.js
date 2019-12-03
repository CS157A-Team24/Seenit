import React from 'react';
import { Grid, Avatar } from '@material-ui/core';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const DetailContainer = ({channelDetails}) => {

    return (
        <Container container direction="column" alignItems="center">
            CHANNEL DETAILS
            <Grid container justify="flex-start" alignItems="center">
                <Avatar style={{width: 60, height: 60}}
                        alt={`Channel's Avatar`} 
                        src={`https://cdn2.iconfinder.com/data/icons/blue-round-amazing-icons-1/512/home-alt-512.png`}/>
                {channelDetails.channel.name}
            </Grid>
            <p>{channelDetails.numberOfMembers}</p>
            <SmallText>Members</SmallText>
            <p>Welcome to {channelDetails.channel.name}</p>
            <CustomButton> <ButtonText>JOIN</ButtonText> </CustomButton>
            <Link to={{pathname:'/create-a-post', 
                    state:{channelId: channelDetails.channel.id,
                            channelName:channelDetails.channel.name }}} 
                    style={{ textDecoration: 'none', width: '100%' }}>
                <CustomButton> <ButtonText>CREATE POST</ButtonText> </CustomButton>
            </Link>
        </Container>
    )
};

const Container = styled(Grid)`
    border: 1px solid ${props => props.theme.border};
    background-color: ${props => props.theme.foreground};
    border-radius: 5px;
    margin-top: 20px;
    padding: 2% 4% 4% 4%;
    color: ${props => props.theme.normalText};
    height: 100%;
`;

const SmallText = styled.p`
    font-size: ${props => props.theme.p};
`;

const CustomButton = styled.div`
    background: ${props => props.theme.buttonColor};
    border-radius: 3px;
    width: 100%;
    padding: 3.5%;
    display: flex;
    align-items: center;
    margin-top: 2%;
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

export default DetailContainer;