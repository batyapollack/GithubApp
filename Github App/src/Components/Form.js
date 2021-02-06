import React, { useContext, useEffect } from 'react';
import { GithubContext } from '../Context/GithubContext';
import ReactHistory, { useHistory } from 'react-router-dom';

const Form = () => {

    const { search, setSearch, getSearch } = useContext(GithubContext);
    const history = useHistory();

    useEffect(() => {
        history.push('/overview');
    }, []);


    return (
        <form onSubmit={getSearch}>
            <div >
                <i className="fab fa-github fa-2x"></i>
                <input
                    autoFocus
                    type="text"
                    value={search}
                    placeholder="Search for a user..."
                    onChange={(e) => setSearch(e.target.value)} />
            </div>
        </form>
    )
}
export default Form;