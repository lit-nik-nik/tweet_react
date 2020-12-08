import React from 'react';

import './app-header.css';

const AppHeader = ({amountPosts, likePosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Иванов Иван Иванович</h1>
            <h2>{amountPosts} записей, из них понравилось - {likePosts}</h2>
        </div>
    )
}

export default AppHeader;