import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPosts } from '../../actions/posts'
import PostDesc from './PostDesc'

export default function PostPage() {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getPosts())
    }, [dispatch])
    
    const posts = useSelector(state => state.posts)
    const {id} = useParams()
    const selectedPost = posts.find((post) => {
        return post._id === id})
  return (
    <div>
        <PostDesc posts = {posts} post = {selectedPost} />
    </div>
  )
}
