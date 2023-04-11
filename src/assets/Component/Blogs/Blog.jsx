import React, { useEffect, useState } from 'react';
import Content from '../Contents/Content';
import Bookmark from '../BookMark/Bookmark';
import './Blog.css'
import Timer from '../Timer/Timer';

const Blog = () => {

    const [posts, setPost] =useState([])
    const [bookmark, setBookmark] = useState([])

    useEffect(()=>{
        fetch('./../../../../public/Api/Data.json')
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);
    
    const handleBookmark = (post) => {
        const bookmarks = [...bookmark, post]
    
        setBookmark(bookmarks)
        
    }
    
    return (
        
            <div className='all-content'>
                   <div className='post-content'>
                   {
                    posts.map(post => <Content key ={post.id} post = {post} handleBookmark={handleBookmark}></Content>)
                   }
                   </div>
                   <div className='bookmark-content'>
                      <Timer key ={posts.index} bookmark ={bookmark}></Timer>
                      {
                       bookmark.map(bookmark => <Bookmark key = {bookmark.name} bookmark = {bookmark} ></Bookmark>)
                      }
                  </div>
            </div>     
    );
};

export default Blog;