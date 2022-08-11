import "./styles.css"
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@mui/material"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import moment from 'moment'
import { useDispatch } from "react-redux"
import { deletePost, setPostId, like } from "../../../actions/posts"
import { useState } from "react"
import {Link} from 'react-router-dom'
const Post = ({post}) => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const [depth, setDepth] = useState(1)
    const color = {
        color: '#f3f3f3',
    }
    const dispatch = useDispatch()
    const del = () => {
        dispatch(deletePost(post._id))
    }
    const likePost = () => {
        dispatch(like(post._id))
    }
    const edit = () => {
        dispatch(setPostId(post._id))
    }
    const PostFooter = () => {
       if(user?.result?._id){
            if (post.likes.find(id => id === user.result._id)){
                return (
                    <Button className="button" size="small" color="primary" onClick={likePost}>
                        <ThumbUpAltIcon fontSize="small"/> &nbsp;
                        {post.likes.length}&nbsp;Like 
                        
                    </Button>
                )
            }
            return(
                <Button className="button" size="small" color="primary" onClick={likePost}>
                    <ThumbUpAltOutlinedIcon fontSize="small"/>&nbsp;{post.likes.length}&nbsp;Like 
                    
                </Button>

            )
                
            
       }
       else{
            return(
                
                <Button className="button" size="small" color="primary" disabled>
                    <ThumbUpAltOutlinedIcon fontSize="small"/>&nbsp;{post.likes.length}&nbsp;Like 
                    
                </Button>
                )
       }
    }

    return (
        <Card onMouseOver={() => setDepth(5)} onMouseOut={() => setDepth(1)} elevation={depth} className="card">

            <Link style={{textDecoration: 'none'}} to={`/post/${post._id}`}>
                <CardMedia onClick={() => window.scrollTo(0, 0)} className="image" component='img' image={post.selectedFile} title={post.title} />
            </Link>
            <div className="img-overlay">
                <Typography style={color} className="creator" variant="h6" fontWeight={'light'} fontFamily={'poppins'}>{post.name}</Typography>
                <Typography style={color} variant="body2" >{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div >
                
                {user && (user?.result?._id === post.creator && <Button className="more-horiz" style={{color: 'white'}} size='small' onClick={edit}>
                    <MoreHorizIcon style={color} fontSize = 'medium' />
                </Button>)}
                <div className="tags">
                    <Typography variant="body2" color='textSecondary' fontWeight={'light'} fontFamily={'poppins'}>{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <CardContent className="content">
                    <Typography variant="h5" gutterBottom fontWeight={'light'} fontFamily={'poppins'}>{post.title}</Typography>
                    <Typography variant="body2" gutterBottom fontWeight={'light'} fontFamily={'poppins'}>{post.message}</Typography>
                </CardContent>
                <CardActions className="action-buttons">
                    <PostFooter />
                    {user && ( 
                        user?.result?._id === post.creator && <Button className="button" size="small" color="primary" onClick={del}>
                        <DeleteIcon fontSize="small"/>&nbsp;Delete
                    </Button>)}
                </CardActions>
            </div>
        </Card>
    )
}
export default Post