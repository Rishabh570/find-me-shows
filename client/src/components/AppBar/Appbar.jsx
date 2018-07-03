import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { WithStyles } from '@material-ui/core';
import appbarStyles from '../../variables/styles/appbarStyles.jsx'


class Appbar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Visualise D3
                        </Typography>
                        <Button variant="contained" color="secondary">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
          
      },
      dispatch
    );
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(WithStyles(appbarStyles)(Appbar));