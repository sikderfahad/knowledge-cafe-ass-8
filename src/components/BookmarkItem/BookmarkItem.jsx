import React from 'react';
import './BookmarkItem.css'

const BookmarkItem = (props) => {
    return (
        <div className='bookmark-item'>
            <h3>{ props.title}</h3>
        </div>
    );
};

export default BookmarkItem;