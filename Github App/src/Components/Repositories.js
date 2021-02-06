import React, { useContext } from 'react';
import { GithubContext} from '../Context/GithubContext';

const Repositories = () => {
    const { repos } = useContext(GithubContext);

    return (
        <div className="reposContainer">
            {repos && repos.map((item, index) => (
                <a key={index} href={item.html_url} target="_blank" rel="noopener noreferrer" className="reposWrap">
                    <div className="repos">
                        {item.name && <p> {item.name} </p>}
                        {item.description && <h5>{item.description}</h5>}
                        <div className="repoInfo">
                            {item.language && (
                                <p>
                                    <span></span>
                                    {item.language}
                                </p>
                            )}
                            {item.updated_at && <p> <h1>&nbsp;</h1>{item.updated_at}</p>}
                        </div>
                    </div>

                </a>
            ))}
        </div>
    )

}

export default Repositories;