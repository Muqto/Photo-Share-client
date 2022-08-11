import React, { useEffect, useState } from 'react'
import { AppBar, Button, Typography } from '@mui/material'
import photoshare from '../../images/photoshare.png'
import useStyles from "./styles"
import AccountMenu from '../Menu/Menu';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import decode from 'jwt-decode'
export default function Navbar() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const classes = useStyles()
    const dispatch = useDispatch()
    const location = useLocation()
    useEffect(() => {
            setUser(JSON.parse(localStorage.getItem('profile')))
            const token = user?.token
            if(token){
                const decodedToken = decode(token)
                
                if(decodedToken.exp * 1000 < new Date().getTime()) {
                    dispatch(logout())
                }
            }
              
    }, [location])
    
  return (
    <AppBar className={`${classes.appBar} appbar`} position = "static" color='inherit'>
        <img className={classes.img} onClick={() => navigate('/')} src={photoshare}></img>
        {user? (
            <div className={classes.profile}>
                <Typography fontFamily={'poppins'} variant='h6'></Typography>
                <AccountMenu user={user} onLogout={() => {
                    dispatch(logout())
                    navigate('/')
                    setUser(null)
                    }}/>
            </div>
            
        ) : (
            <Button onClick={() => navigate('/auth') } variant='contained'>Sign In</Button>
        )}
        
    </AppBar>
  )
}
