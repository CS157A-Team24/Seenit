import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Box, Grid, Tab, Tabs, AppBar } from '@material-ui/core';

import PostList from '../components/PostList';
import RightContainer from '../components/UserProfileContainers';

import { requestPostsByUserId } from '../actions/Post';

import { USER_ID } from '../constants/';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Grid
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Grid>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const UserProfile = () => {
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(requestPostsByUserId(localStorage.getItem(USER_ID)));
    },[]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="POSTS" {...a11yProps(0)} />
                    <Tab label="COMMENTS" {...a11yProps(1)} />
                    <Tab label="SAVED" {...a11yProps(2)} />
                    <Tab label="UPVOTED" {...a11yProps(3)} />
                    <Tab label="DOWNVOTED" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <CenterContainer  container direction="row" justify="center">
                {/* <CenterContainer> */}
                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3} style={{ marginBottom: 0 }}>
                        <Grid item xs={9}>
                            <TabPanel value={value} index={0}>
                                <PostList />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Item Two
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Item Three
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                Item Four
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                Item Five
                            </TabPanel>
                        </Grid>
                        <Grid item xs={3} style={{marginTop: "2.4%"}}>
                            <RightContainer />
                        </Grid>
                    </Grid>
                {/* </CenterContainer> */}
            </CenterContainer >
        </div>
    );
};

const CenterContainer = styled.div`
	padding: 0px 2% 0px 0;
	width: 100%;
`;

export default UserProfile;