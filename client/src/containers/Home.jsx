import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";



import {
    TextField,
    Typography,
    Grid,
    Paper,
    withStyles,
    Button,
    AppBar,
    Toolbar,
    IconButton,
    Hidden,
    MenuItem,
    Drawer,
    Divider,
    List,
    GridList,
    GridListTile
  } from "material-ui";

//   import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Redirect,
//     withRouter
//   } from "react-router-dom";

// const styles = theme => ({
//     root: theme.mixins.gutters({
//       paddingTop: 16,
//       paddingBottom: 16,
//       marginTop: theme.spacing.unit * 3,
//     }),
//   });


class Home extends Component {
    render() {
        const { classes } = this.props;



        return (
            <div>
                {/* <Paper elevation={4}>
                    <Typography variant="headline" component="h3">
                        Welcome to landing page!
                    </Typography>
                </Paper> */}
                <h1>Home container here!!!</h1>
            </div>
        );   
    }
};

export default Home;
  
