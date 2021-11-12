import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AppBar, Button, makeStyles, Toolbar, Typography, IconButton, InputAdornment, TextField } from '@material-ui/core'
import { isAuthenticated, signout } from '../helpers/AuthHelper'
import { SearchOutlined } from '@material-ui/icons'


const useStyle = makeStyles((theme) => ({
    logo:{
        // flexGrow: 1
        display: 'inline-block',
        marginRight: '10px'
    },
    toolbar:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    searchField: {
        backgroundColor: 'white',
        paddingLeft: '3px',
        borderBottom: '0px', 
        border: '1px solid white',
        borderRadius: '3px'
    }
}))



const Navbar = () => {
    const classes = useStyle();
    const navigate = useNavigate();

    const [searchKey, setSearchKey] = useState('');
    
    const handleSearch = () => {
        console.log(searchKey);
        navigate("/searchresult");
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <div>
                    <Typography variant="h6" className={classes.logo}>
                        Bibliophile
                    </Typography>
                {
                    isAuthenticated() && (
                        <TextField
                        className={classes.searchField}
                        value={searchKey}
                        onChange={(e) => setSearchKey(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleSearch}>
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    )
                }
                    
                </div>
                <div>
                    <Button color='inherit' component={Link} to="/" >Home</Button>
                    {
                        isAuthenticated() ? (
                            <>
                                <Button color='inherit' component={Link} to="/books">Books</Button>
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
