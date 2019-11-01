import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Toolbar } from '@material-ui/core';
import styled from 'styled-components/macro';

const Container = styled.div`
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	height: 70px;
	background-color: #4f4b4a;
	z-index: 1000
`;

export default function Header() {
	return (
		<Container>
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

						<button className="button is-white" style={{ marginLeft: "5%" }}> <Link to="/login">Log in</Link></button>
						<button className="button is-white" style={{ marginLeft: "3%" }}> <Link to="/register">Sign up</Link> </button>
					</Grid>
				</Grid>
			</Toolbar>
		</Container>
	)
}
