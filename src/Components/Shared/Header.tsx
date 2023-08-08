import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useActiveUserAuth } from '../AuthContext';
import '../../index.css';
import { Strings } from '../../Const';

const Header = () => {
    const navigate = useNavigate();
    const { logout, user } = useActiveUserAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    {Strings.massages.WELLCOME_MASSAGE(user?.name)}
                </Typography>
                <div style={{ flexGrow: 1 }}></div>
                <Button color="inherit" onClick={handleLogout} >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
