import React from 'react';
import './Bookmark.css'

const Bookmark = ({bookmark}) => {
    return (
        <div>
            <h3 className='bookmark'>{bookmark.tittle}</h3>
        </div>
    );
};

export default Bookmark;