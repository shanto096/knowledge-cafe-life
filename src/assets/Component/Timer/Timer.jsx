import React from 'react';

const Timer = ({bookmark}) => {
    let time = 0;
    for (const times of bookmark) {
        time =  time + times.time;
    }
    
    return (
        <div>
            <h3 className='bookmarktime'>Spent time on read : {time} min</h3>
             <h1 style={{marginLeft:'3rem'}}>Bookmarked Blogs : {bookmark.length} </h1>
        </div>
    );
};

export default Timer;