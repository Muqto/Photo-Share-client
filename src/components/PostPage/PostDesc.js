import { Avatar, Card, CardMedia, CircularProgress, Divider, Grid, Paper, Typography } from '@mui/material'
import moment from 'moment'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostRecommendation from './PostRecommendation'
import useStyles from './styles'
import './styles.css'
export default function PostDesc({posts, post}) {
    const classes = useStyles()
    console.log(post, posts)
  return (
    <div>{post ? 
    <Paper className={classes.paper} elevation={2} >
        <Grid container spacing={2}>
            <Grid className='desc' item md={6} xs={12}>
                <span style={{marginBottom:'20px'}} className='avatar'>
                    <Link style={{textDecoration: 'none'}} to={`/user/${post.creator}`}>
                        <Avatar  sx={{ width: 50, height: 50 }} >{post.name[0]}</Avatar> 
                    </Link>
                        <div>                 
                        <Typography gutterBottom fontFamily='poppins' variant='body1'>{post.name}</Typography>  
                        <Typography color='gray' fontSize='0.85rem' variant='body1'>{moment(post.createdAt).fromNow()}</Typography>
                        </div>   
                </span>
                    <Typography className='title' variant='h5'>{post.title}</Typography>
                    <Typography className='tag' variant='body2'>{post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography className='message' variant='body2'>{post.message}</Typography>

            </Grid>
            <Grid item md ={6} xs={12}>
                <Card elevation={3} style={{borderRadius:'20px', marginBottom : '10px'}}>
                    <CardMedia component='img' image={post.selectedFile} title={post.title} /> 
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Typography  className='recs' variant='h6'>You might also like:</Typography>
                <Divider style={{marginBottom: '20px'}} />
                {posts? 
                <Grid  container spacing={10}>
                    {posts.map((item) => {
                        if(item._id !== post._id && item.creator === post.creator){
                        return (
                            <PostRecommendation key={item._id} post = {item} />
                        )
                        }
                    }
                    )}
                    
                </Grid> : <CircularProgress/>}
            </Grid>
        </Grid>
    </Paper>
    
    : <CircularProgress />}
    </div>
  )
}
