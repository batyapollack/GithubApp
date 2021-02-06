import React, { useContext } from 'react';
import { GithubContext } from '../Context/GithubContext';

const Followers = () => {
    const { followers } = useContext(GithubContext);

    return (
        <>
            {followers && followers.map((item, index) => (
                <a key={index} href={item.html_url} target="_blank" rel="noopener noreferrer" className="followersContainer">
                    <div className="followers">
                        <img src={item.avatar_url} alt="follower" />
                        <p>{item.login}</p>
                    </div>
                </a>
            ))}
        </>
    )

}

export default Followers;