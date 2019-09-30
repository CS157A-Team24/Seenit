import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Toolbar } from '@material-ui/core';

export default function Header() {
    return (
        <div className="header-paper">
            <Toolbar >
            <Grid container spacing={3} >
                <Grid item xs>
                    <Link to="/" style={{ textDecoration: 'none' }}>

                        {/* <Typography variant="h6" style={{flexGrow:1}}>
                            Lemon
                        </Typography> */}
                        {/* <img src={logo} alt="Logo" className="logo-header"/> */}
                        <h3 style={{ color: 'white' }}>Seenit</h3>
                    </Link>
                        
                </Grid>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs container>
                        
                    <a class="button is-dark" style={{marginLeft: "5%"}}>Log in</a>
                    <a class="button is-dark" style={{marginLeft: "3%"}}>Sign up</a>
                </Grid>
            </Grid>
            </Toolbar>
        </div>
    )
}