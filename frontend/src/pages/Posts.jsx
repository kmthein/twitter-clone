import React from 'react'
import PostCard from '../components/PostCard'
import {useSelector} from 'react-redux';

const Posts = () => {
    const {posts} = useSelector(state => state.post);
  return (
    <>
    {
        posts && posts.length > 0 && 
        posts.map((post) => {
            const {id, text, img, comment, repost, love, share} = post;
            return (
                <PostCard key={id} id={id} text={text} img={img} comment={comment} repost={repost} love={love} share={share} />
            )
        })
    }
    </>
  )
}

export default Posts