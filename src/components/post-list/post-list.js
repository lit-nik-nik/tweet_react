import React, { Component } from 'react';

import PostListItem from "../post-list-item";

import './post-list.css';

export default class PostList extends Component {

    render() {
        const {posts, delItem, onLike, onImportant} = this.props;

        const elemPost = posts.map(e => {

            const {id, ...posts} = e;

            return (
                <li key={id} className='list-group-item'>
                    <PostListItem 
                        {...posts} 
                        delItem = {() => delItem(id)}
                        onLike = {() => onLike(id)}
                        onImportant = {() => onImportant(id)} 
                        />
                </li>
            )
        });
    
        return (
            <ul className='app-list list-group'>
                {elemPost}
            </ul>
        )
    }
}