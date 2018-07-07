import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";

import {
    Jumbotron, 
    Button, 
    Grid, 
    Row, 
    Col,
    Navbar,
    FormGroup,
    FormControl,
    Well,

} from 'react-bootstrap';

class Home extends Component {
    render() {

        return (
            <Grid>
                <Row>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                            <a href="#home">React App</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" placeholder="Type what you are looking for..." />
                            </FormGroup>{' '}
                            <Button type="submit">Search</Button>
                            </Navbar.Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
                <Row>
                    <Jumbotron>
                        <h1>
                            Welcome to Home!
                        </h1>
                        <p>
                            This site is currently in development. It is the landing page of something great. A lot of work remaining.
                        </p>
                        <p>
                            <Button bsSize="large" bsStyle="danger">Learn more...</Button>
                        </p>
                    </Jumbotron>
                </Row>
                <Row>
                    <Well xs={12} md={6} >
                        <p>This row covers some content...</p>
                    </Well>
                </Row>
            </Grid>
        );   
    }
};

export default Home;
  
