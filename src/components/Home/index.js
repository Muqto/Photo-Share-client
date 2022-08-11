import React, { useEffect } from 'react'
import {Container, Grow, Grid} from "@mui/material"
import Posts from '../Posts/Posts'
import Form from "../Form/Form"
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
export default function Home() {
    const dispatch = useDispatch();
    useEffect(() =>{
      dispatch(getPosts())
    }, [dispatch])
  return (

      
      <Grow in>
            <Grid style={{padding: '20px'}} container justifyContent='space-between' alignItems='stretch' spacing={3}>
                <Grid item xs={12} sm ={12} md={3}>
                  <Form />
                  
                </Grid>
                <Grid item xs={12} sm ={12} md={8}>
                <Posts />
                </Grid>
            </Grid>
      </Grow>

  )
}
