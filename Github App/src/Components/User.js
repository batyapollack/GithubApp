import React, { useContext } from 'react';
import { GithubContext } from '../Context/GithubContext';

const User = () => {
    const { user } = useContext(GithubContext);

    return (
        <div className="user">
            <div className="userContainer">
                <div className="imgContainer">
                    <img src={user.avatar_url} slt="user" />
                </div>
                <div className="userRow">
                    <div className="userInfo">
                        {user.name && <h2>{user.name}</h2>}
                        {user.login && <p>{user.login}</p>}
                    </div>

                    {user.bio && (
                        <div className="userDesc">
                            <p> {user.bio} </p>
                        </div>
                    )}
                    <div className="rowInfo">
                    <i class="fas fa-user-friends fa-0.01x"></i>
                    {
                        
                        user.followers && (
                            <span> { user.followers} followers </span>
                        )
                    }
                    {
                        user.following && (
                           
                            <span> { '• '+ user.following } following </span>
                       
                        )
                    }
                    <span> {' •'} </span>
                    <i className="far fa-star fa-0.001x"></i>
                    {
                        user.public_gists && (
                            <span> { "  "+ user.public_gists} </span>
                        )
                    }
                    </div>
                    <div className="userLinks">
                        {user.location && (
                            <h5>
                            <i class="fas fa-map-marker-alt fa-xs"></i>
                                {user.location}
                            </h5>
                        )}
                        {user.blog && (
                                <a href={`https://${user.blog}`}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="fas fa-link fa-xs"></i>
                                    {user.blog}
                                </a>
                           
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;