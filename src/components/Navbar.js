import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { isAuthenticated, signout } from '../helpers/AuthHelper'


const useStyle = makeStyles((theme) => ({
    logo:{
        flexGrow: 1
    }
}))

const Navbar = () => {
    const classes = useStyle();
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.logo}>
                    Bibliophile
                </Typography>
                <div>
                    <Button color='inherit' component={Link} to="/" >Home</Button>
                    {
                        isAuthenticated() ? (
                            <>
                                <Button color='inherit' component={Link} to="/profile">Profile</Button>
                                <Button color='inherit' onClick={()=>{signout(()=> navigate("/"))}}>Logout</Button>
                            </>
                        ) : (
                            <>
                                <Button color='inherit' component={Link} to="/signin" >Sign In</Button>
                                <Button color='inherit' component={Link} to="/signup" >Sign Up</Button>
                            </>
                        )
                    }
                    
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
