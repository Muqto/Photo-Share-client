import { Avatar, Card, CardMedia, Grid, Typography } from '@mui/material'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
export default function PostRecommendation({post}) {
  return (
    <Grid className='rec' item xl={2} lg={3} md={4} xs={12}>
        
        <span className='avatar'>
            <Link style={{textDecoration: 'none'}} to={`/user/${post.creator}`}>
                <Avatar >{post.name[0]}</Avatar>
            </Link> 
            <div>                 
            <Typography gutterBottom fontFamily='poppins' variant='body2'>{post.name}</Typography>  
            <Typography color='gray' fontSize='0.85rem'>{moment(post.createdAt).fromNow()}</Typography>
            </div>   
        </span>
        <Typography fontFamily='poppins' fontWeight='bold' variant='subtitle1'>{post.title}</Typography>
                         
        <Typography fontSize='0.9rem' className='msg' fontFamily='poppins' variant='body2'>{post.message}</Typography>             
        <Typography fontFamily='poppins' variant='body2'>Likes: {post.likes.length}</Typography>             
         <Link to={`/post/${post._id}`}>   
            <Card style={{height: '100px', width:'200px'}} elevation={5}>
                <CardMedia style={{height: '100px', width:'200px', objectFit : 'cover'}} onClick={() => window.scrollTo(0, 0)} className='rec-img'  component='img' image={post.selectedFile} title={post.title} />
            </Card>
        </Link> 
    </Grid>)
  
}
