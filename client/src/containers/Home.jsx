import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";


import Typography from '@material-ui/core/Typography';


class Home extends Component {
    render() {
        const { classes } = this.props;



        return (
            <div>
                {/* <Paper> */}
                    <Typography variant="display3" gutterBottom>
                        Home
                    </Typography>
                {/* </Paper> */}
            </div>
        );   
    }
};

export default Home;
  
