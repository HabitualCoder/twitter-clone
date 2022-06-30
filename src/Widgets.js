import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Widgets.css';

import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={""} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="TGTOofficial"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://www.facebook.com/thegoodthings.online"}
                    options={{ text: "#reacjs is awesome", via: "TGTOofficial" }}
                />
            </div>
        </div>
    );
}

export default Widgets;