import React from 'react';
import { connect } from 'react-redux';
import {
    Grid, List, ListItem, Avatar,
    ListItemText, ListItemAvatar, Button,
    CircularProgress
} from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListOfChannels = ({channel}) => {
    const { topChannel: { content }, isFetching } = channel;
    const ListContent = () => {
        if(!isFetching && content != null) 
            return (
                <ChannelList channels={content}/>
            );
        else{
            return(
                
                <div style={{ marginTop: "3%" }}>
                <CircularProgress />
                </div>
            );
        }
    }
    return (
        <Container container direction="column" justify="flex-start" alignItems="stretch">
            <TitleBox>
                <Title>
                    Top Channels
                </Title>
            </TitleBox>
            <ListContent/>
            <Grid container justify="center" alignItems="center">
                <CustomButton>VIEW ALL</CustomButton>
            </Grid>
            <Grid container justify="center" alignItems="center">
            {   
                ["sport", "news", "animals"].map((value, index) => (
                    <ChannelSmallBox key={index}>
                        {value}
                    </ChannelSmallBox>
                ))
            }
            </Grid>
        </Container>
    )
}

const mapStateToProps = state =>({
    channel: state.channel
});

const ChannelList = ({channels}) => {

    return (
        <CustomList dense>
            {channels.map((value, index) => {
                return (
                    <Link to={`channel/${value.id}`} key={value.id} style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <Numb>{index + 1}</Numb>
                        <ListItemAvatar style={{ marginLeft: "3%" }}>
                            <Avatar
                                alt={`Avatar n°${value + 1}`}
                                src={`https://cdn2.iconfinder.com/data/icons/blue-round-amazing-icons-1/512/home-alt-512.png`}
                            />
                        </ListItemAvatar>
                        <CustomListItemText id={index} primary={value.name} />
                    </ListItem>
                    </Link>
                );
            })}
        </CustomList>
    )
}

const ChannelSmallBox = styled.div`
    background: ${props => props.theme.darkerForeground};
    border-radius: 3px;
    color: #2182bf;
    display: flex;
    align-item: center;
    margin: 5% 2%;
    padding: 2% 3%;
    :hover{
		background: ${props => props.theme.hoverBackground};
		cursor: pointer;
	};
`;

const CustomButton = styled(Button)`
    background: ${props => props.theme.buttonColor};
    border-radius: 3px;
    border: 0;
    height: 40px;
    width: 90%;
`;

const Container = styled(Grid)`
    border: 1px solid ${props => props.theme.border};
    background-color: ${props => props.theme.foreground};
    border-radius: 5px;
    margin-top: 20px;
`;
const TitleBox = styled.div`
    border: 0px solid
    background: ${props => props.theme.titleBoxBackgroud};
    height: 15%;
    display: flex;
    align-items: center;
    padding: 3%;
`;

const Title = styled.h1`
    color: ${props => props.theme.darkText};
    font-size: ${props => props.theme.h1};
    font-weight: bold;
    margin: 0 auto;
`;

const CustomList = styled(List)`
    width: 100%;
    height: 60%;
`;

const Numb = styled.h2`
    color: ${props => props.theme.normalText}
`

const CustomListItemText = styled(ListItemText)`
    color: ${props => props.theme.normalText}
`

export default connect(mapStateToProps)(ListOfChannels);