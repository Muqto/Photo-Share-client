import React, { useState } from 'react'
import { Avatar,Button, Paper,Grid,Typography, Container, TextField, OutlinedInput, Alert, Slide} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyles from './styles'
import Password from './Password';
import {signin, signup, logout} from '../../actions/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Auth() {
    const error = useSelector( state => state.authReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [regisText, setRegisText] = useState({
        firstName: '', lastName:'', email:'', password:'', confirmPassword:''
    })
    const [isSignup, setIsSignup] = useState(true)
    const classes = useStyles()
    const  handleSubmit = (e) => {
        e.preventDefault()
        if(isSignup){
            dispatch(signup(regisText, navigate))
        }
        else{
            if(regisText.email!=='' && regisText.password!==''){
                dispatch(signin(regisText, navigate))
                
            }         
        }
        

    }

  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        

            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {isSignup ? <>
                        <Grid item xs={6}>
                            <TextField 
                                required
                                name = 'firstName' 
                                label='First Name' 
                                onChange={(e) => setRegisText({...regisText, firstName: e.target.value})} 
                                autoFocus
                                xs={6}
                                value={regisText.firstName}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            required 
                            name = 'lastName' 
                            label='Last Name' 
                            onChange={(e) => setRegisText({...regisText, lastName: e.target.value})}
                            value={regisText.lastName}>
                            
                            </TextField>
                            
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                            required
                            name='email'
                            label='Email'
                            type='email'
                            fullWidth
                            onChange={(e) =>setRegisText({...regisText, email: e.target.value})}
                            value={regisText.email}>
                            
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Password 
                                label='Password'
                                name ='password' 
                                type='password' 
                                change={(e) =>setRegisText({...regisText, password: e.target.value})}
                                value={regisText.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Password 
                                    name ='confirmPassword'
                                    label='Confirm Password' 
                                    type='password' 
                                    change={(e) =>setRegisText({...regisText, confirmPassword: e.target.value})}
                                    value={regisText.confirmPassword}
                                />
                        </Grid>
                        
                        
                        <Grid item style={{textAlign:'center', margin : '20px 0 20px 0' }} xs={12}>
                                <Button type='submit' fullWidth variant='contained' size='large'>Sign Up</Button>
                        </Grid>
                        <Grid container justifyContent='center'>
                            <Grid item>
                                    <Typography variant='body1' display='flex' alignItems='center'>Already have an account? 
                                    <Button onClick={() => setIsSignup(false)}><Typography variant='body2'>Sign in</Typography></Button> 
                                    </Typography>
                                    
                            </Grid>
                        </Grid>
                    </>: <>
                    <Grid item xs={12}>
                            <TextField 
                            required
                            
                            name='email'
                            label='Email' 
                            type='email'
                            fullWidth
                            onChange={(e) =>setRegisText({...regisText, email: e.target.value})}
                            value={regisText.email}>
                            
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                        <Password 
                                
                         
                                name ='password'
                                label='Password' 
                                type='password' 
                                change={(e) =>setRegisText({...regisText, password: e.target.value})}
                                value={regisText.password}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                                <Button type='submit' fullWidth variant='contained'>Sign In</Button>
                        </Grid>

                        <Grid container justifyContent='center'>
                            <Grid item style={{marginTop:'10px'}}>
                                    <Typography variant='body1' display='flex' alignItems='center'>Don't have an account? 
                                    <Button onClick={() => setIsSignup(true)}><Typography variant='body2'>Sign up</Typography></Button> 
                                    </Typography>     
                            </Grid>
                        </Grid>
                        </> }
                </Grid>
            </form>
        </Paper>

        {error?.authData?.name === 'AxiosError' && 
           <Slide direction='up' in={true} >            
                <Alert 
                    style={{ marginTop: '15%', justifyContent:'center'}} 
                    severity="error"
                    >
                        <Typography >{error?.authData?.response?.data?.message}</Typography>
                </Alert>
            </Slide> 
        }

    </Container>
  )
}
