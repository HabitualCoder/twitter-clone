import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';

import "./Feed.css";
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <Tweetbox />
            <FlipMove>
                {posts.map(post =>
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        userName={post.userName}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                )}
            </FlipMove>
        </div>
    );
}

export default Feed;