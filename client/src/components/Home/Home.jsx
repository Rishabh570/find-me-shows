import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";


import Typography from '@material-ui/core/Typography';

import Appbar from '../AppBar/Appbar.jsx'


class Home extends Component {
    render() {

        return (
            <div>
                <Appbar />
                <Typography variant="display3" gutterBottom>
                    Home
                </Typography>
            </div>
        );   
    }
};

export default Home;
  
