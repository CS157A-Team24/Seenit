import React from 'react';
import {
    Grid, List, ListItem,
    ListItemText, Button,
} from '@material-ui/core';
import styled from 'styled-components';

const ListOfModerators = () => {
    return (
        <Container container justify="center">
            MODERATORS
            <ModeratorList/>
            <CustomButton>VIEW ALL</CustomButton>
        </Container>
    )
}

const Container = styled(Grid)`
    border: 1px solid ${props => props.theme.border};
    background-color: ${props => props.theme.foreground};
    border-radius: 5px;
    margin-top: 20px;
    padding-bottom: 4%;
    color: ${props => props.theme.normalText};

`;

const CustomButton = styled(Button)`
    background: ${props => props.theme.buttonColor};
    border-radius: 3px;
    border: 0;
    height: 40px;
    width: 90%;
    :hover{
		background: ${props => props.theme.titleBoxBackgroud};
	};
`;

const CustomList = styled(List)`
    width: 100%;
    height: 60%;
`;

const CustomListItemText = styled(ListItemText)`
    color: ${props => props.theme.normalText}
`

const ModeratorList = () => {

    return (
        <CustomList dense>
            {[1,2,4,5].map((value, index) => {
                return (
                    // <Link to={`channel/${value}`} key={index} style={{ textDecoration: 'none' }}>
                    <ListItem key={index} button>
                        <CustomListItemText id={index} primary={`User - ${value}`} />
                    </ListItem>
                    // </Link>
                );
            })}
        </CustomList>
    )
}

export default ListOfModerators;