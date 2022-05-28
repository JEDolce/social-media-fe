import React from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';
import { Posts } from '../../data';

export default function Feed() {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {Posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}
