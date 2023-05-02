import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import ToastBox from '../ToastBox/ToastBox';




const Blog = (props) => {
    const { id, profile, createdAt, coverPic, duration, title, tag } = props.blog
    const addToBookmark = props.addToBookmark
    const handledMarkBlog = props.handledMarkBlog

    
    return (
        <div className='blog'>
            <div className="cover">
                <img className='cover-pic' src={coverPic} alt="" />
            </div>

            <div className="author">
                <div className="author-info">
                    <div className="author-pic">
                        <img src={profile.authorPic} alt="" />
                    </div>
                    <div className="status">
                        <h3 className='dark-1'>{profile.authorName }</h3>
                        <p className='dark-2'>Mar 14 (4 days ago)</p>
                        
                    </div>
                </div>
                <div className="duration">
                    <p className='dark-2'>{duration } min read <button onClick={() => addToBookmark(props.blog)}><FontAwesomeIcon icon={faBookmark} /></button></p>
                </div>
            </div>

            <h1 className='blog-title'>{title}</h1>
            <ol className='tag'>
                {
                    tag.map(item => <li>{ item}</li>)
                }
            </ol>
            <a onClick={() => handledMarkBlog(duration)} className="mark">Mark as read</a>
            <ToastBox></ToastBox>
            
        </div>
    );
};

export default Blog;