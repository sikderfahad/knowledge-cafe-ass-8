import React from 'react';
import './Bookmark.css'

const Bookmark = () => {
    return (
        <div className='bookmark'>
            <div className="read-duration">
                <h3>Spent time on read : {} min</h3>
            </div>
            <div className="bookmark-list">
                <h3 className='list-count'>Bookmarked Blogs : 8</h3>
            </div>
        </div>
    );
};

export default Bookmark;