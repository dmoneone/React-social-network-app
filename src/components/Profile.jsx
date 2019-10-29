import React from 'react';

const Profile = () => {
    return (
        <content className="main-content">
            <div className="img-block">
                <img src="https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg"/>
            </div>
            
            <div className="profile-block">
                ava + descr
            </div>

            <div className="my-posts-block">
                My posts
                <div className="new-post-block">
                    New post
                </div>
            </div>

            <div className="posts-wrap">
                <div className="post-block">post 1</div>
                <div className="post-block">post 2</div>
                <div className="post-block">post 3</div>
            </div>
        </content>
    );
}

export default Profile;