import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
const Appbar =()=>{
    return(
        <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" color="inherit">
                    Courses Show Case Applications
                </Typography>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Appbar;