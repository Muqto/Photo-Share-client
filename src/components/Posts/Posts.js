import Post from "./Post/Post"
import {useSelector} from 'react-redux'
import {Grid, CircularProgress} from "@mui/material"
import useStyles from "./styles"
import './styles.css'
const Posts = () => {
    const classes = useStyles()
    useSelector(state => state.authReducer) // to render once the auth state has changed, eg. on logout
    const posts = useSelector(state => state.posts)

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={`${classes.container} container`} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid  key={post._id} item lg={4} md={6} xs={12}>
                        <Post post={post} />
                    </Grid>
                    ))}
            </Grid>)
 
    )
}
export default Posts