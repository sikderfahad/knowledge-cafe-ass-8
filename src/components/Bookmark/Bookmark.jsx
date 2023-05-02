import React from 'react';
import './Bookmark.css'
import BookmarkItem from '../BookmarkItem/BookmarkItem';

const Bookmark = (props) => {
    const bookmarks = props.bookmarks
    console.log(bookmarks)

    return (
        <div className='bookmark'>
            <div className="read-duration">
                <h3>Spent time on read : {} min</h3>
            </div>
            <div className="bookmark-list">
                <h3 className='list-count'>Bookmarked Blogs : { bookmarks.length}</h3>

                <div id="bookmark-list-container">
                    {
                        bookmarks.map(item => <BookmarkItem title={item}></BookmarkItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmark;