
import { TextField, Button, Typography, Paper} from "@mui/material"
import { useState, useEffect } from "react"
import FileBase from 'react-file-base64'
import { createPost, setPostId, updatePost } from "../../actions/posts"
import { useDispatch, useSelector } from "react-redux"
import useStyles from "./styles"

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title : '', message : '', tags : '', selectedFile: ''
    })
    const dispatch = useDispatch()
    const state = useSelector(state => state.authReducer)
    const id = useSelector(state => state.postId)
    const data = useSelector(state => {
        return state.posts.find((item) => {
            return item._id === state.postId
        })
    })

        const user = JSON.parse(localStorage.getItem('profile'))
    useEffect(() => {
        if(data){
            setPostData(data)
        }
        
    }, [id])
    
        

    const classes = useStyles()
    const handleSubmit = (e) => { 
        e.preventDefault();
  ////work on this
        if(id){
            if(Array.isArray(postData.tags)){
                dispatch(updatePost(id, {...postData, name: user?.result?.name}))
                clear()
            }
            else{
                dispatch(updatePost(id, {...postData, tags : postData.tags.split(','), name: user?.result?.name}))
                clear()
            }
            
        }
        else{
            
            dispatch(createPost({...postData, tags : postData.tags.split(","), name: user?.result?.name}))
            clear()
        }
        
    }
    const clear = () => { 
       dispatch(setPostId(null)) 
       setPostData({
        creator: '', title : '', message : '', tags : '', selectedFile: ''
       })
    }
    
   
    return (
        !user?.result?.name? <Paper className={classes.paper}>
        <Typography variant="h6" align='center' fontWeight={'light'} fontFamily={'poppins'}>
            Please sign in to create your own posts and to like other's posts!
        </Typography>
    </Paper> :
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit = {handleSubmit}  >
            <Typography variant="h6"> {id?'Editing':'Creating'} a Post</Typography>
            <TextField 
                name = "Title" 
                variant="outlined" 
                label = "Title"
                fullWidth
                value={postData.title}
                onChange ={(e) => setPostData({...postData, title : e.target.value})}                      
            />
            <TextField 
                name = "message" 
                variant="outlined" 
                label = "Message"
                fullWidth
                value={postData.message}
                multiline
                rows={5}
                onChange ={(e) => setPostData({...postData, message : e.target.value})}                      
            />
            <TextField 
                name = "Tags" 
                variant="outlined" 
                label = "Tags (coma seperated)"
                fullWidth
                value={postData.tags}
                onChange ={(e) => setPostData({...postData, tags : e.target.value})}                      
            />
            <div className={classes.fileInput}>
                <FileBase 
                    type = "file"
                    multiple = {false}
                    onDone = {({base64}) => setPostData({...postData, selectedFile : base64})}
                />
            </div>
            <Button style={{marginBottom : "10px"}} variant="contained" color="primary" size="large" type="submit" fullWidth >{id?'Edit Post':'Submit'}</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}
export default Form