import React, { useState } from 'react';
import './Tweetbox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: '',
            userName: '',
            verified: true,
            avatar: 'http://localhost:3000/tgto_logo.png',
            text: tweetMessage,
            image: tweetImage
        });
        setTweetMessage('');
        setTweetImage('');
    }

    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="http://localhost:3000/tgto_logo.png" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                    <input
                        value={tweetImage}
                        onChange={(e) => setTweetImage(e.target.value)}
                        className="tweetbox__imageInput"
                        placeholder="Optional: Enter image URL"
                        type="text"
                    />
                </div>
                <Button
                    className="tweetbox__tweetButton"
                    onClick={sendTweet}
                    type="submit"
                >
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default Tweetbox;