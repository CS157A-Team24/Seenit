import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Button, } from '@material-ui/core';
import { Grid, } from '@material-ui/core';
import styled from 'styled-components';

class Setting extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            errors: {}
        }
    }

    render() {
        return (
            <div>
            <Container>
                <Form>
                    <h1 style={{ color: 'orange', fontSize: 24 }}>Account Settings</h1>
                    <Form>
                        <h2 style={{ color: 'white', fontSize: 21}}>Account references</h2>
                    <Style>
                    <Style1>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <p style={{ color: 'white', fontSize: 17 }}>Email address</p>
                            <p style={{ color: 'white', fontSize: 14}}>display the current email</p>
                         </Grid>
                        <Grid item xs={6}>
                             <Button className="button is-white" type="secondary" htmlType="submit" size="large">Change</Button>
                         </Grid>
                    </Grid>
                    </Style1>
                    <Style1>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <p style={{ color: 'white', fontSize: 17 }}>Reset password</p>
                            <p style={{ color: 'white', fontSize: 14}}>A password must be between 2 to 20 characters</p>
                         </Grid>
                        <Grid item xs={6}>
                             <Button className="button is-white" type="primary" htmlType="submit" size="large">Change</Button>
                         </Grid>
                    </Grid>
                    </Style1>
                    </Style>
                    </Form>

                    <Form>
                        <h2 style={{ color: 'white', fontSize: 21}}>Deactivate account</h2>
                    <Style>
                    <Style1>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <p style={{ color: 'white', fontSize: 17}}>Delete Account</p>
                            <p style={{ color: 'white', fontSize: 14}}>current username</p>
                         </Grid>
                        <Grid item xs={1}>
                             <Button className="button is-white" type="secondary" htmlType="submit" size="large">Delete</Button>
                         </Grid>
                    </Grid>
                    </Style1>
                    </Style>
                    </Form>
                </Form>
            </Container>
            </div>
        )
    }
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    //display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #595655;
    padding-top: 5%;
`
const Style = styled.div`
    border-top: 3px solid ${props => props.theme.border};
    margin-top: 10px;
`
const Style1 = styled.div`
    margin-top: 20px;
`
const Form = styled.div`
    padding-left: 5%;
    padding-right: 20%;
    padding-top: 3%;
`;

export default Setting