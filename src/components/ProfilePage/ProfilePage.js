import { Avatar, Divider, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPosts } from '../../actions/posts'
import Post from '../Posts/Post/Post'
import './styles.css'

export default function ProfilePage() {
    const size = 150
    const {id : userId} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    const posts = useSelector(state => state.posts)
    const userPosts = posts.filter((post) => post.creator === userId)
    console.log(userPosts)
  return (
    <Grid className='container1' container spacing={3}>
        <Grid item lg={2} xs={8}>        
            <Paper >
                    <Divider>
                        <Avatar style={{height:`${size}px`, width:`${size}px`, fontSize: `${size/2}px`}}>{userPosts[0]?.name[0]}</Avatar>
                    </Divider>
               <div className='profile'>
                    <Typography style={{marginBottom:'5px'}} variant='h6'>{userPosts[0]?.name}</Typography>
                    
                    <Typography variant='body1'>{userPosts.length} Posts</Typography>
                </div>
            </Paper>
        </Grid>
        <Grid item lg={7} xs={12}>

            <Grid className='profile-post-con' container spacing={2}>
                {userPosts.map((post) => {
                    return (
                        <Grid key={post._id} item md={6} xs={12}>
                            <Post className='post'  post={post} />     
                        </Grid>
                    )
                })}
            </Grid>    

        </Grid>
    </Grid>
        
  )
}
