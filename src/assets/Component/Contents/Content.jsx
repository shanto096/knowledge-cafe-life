import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Content.css'

const Content = ({post,handleBookmark,}) => {


    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    var date = today.toLocaleDateString("en-US", options)
    
    return (
        <div>
             <img className='img-blog' src={post.postP} alt="" />
            <div className='blog-profile-content'>
                    <div >
                        <img className='blog-profile' src={post.proPic} alt="" />
                    </div>
                    <div style={{marginLeft:"1rem"}}> 
                     <h3>{post.name}</h3>
                     <h4>{date}</h4>
                    </div>
                     <h5 style={ {marginLeft:"25rem",fontSize:"20px"}}><span>{post.time}</span>min read <span onClick={() =>handleBookmark(post)} className='bookmarks'><FontAwesomeIcon icon={ faBookmark}></FontAwesomeIcon></span> </h5>
            </div>
            <h1 style={{marginRight:"7rem" ,marginTop:"1px"}}>{post.tittle}</h1>
            <p>#beginners  #programming</p>
            <h2 onClick={() => handleBookmark(post)}>Mark as Read</h2>
          </div>
    );
};

export default Content;