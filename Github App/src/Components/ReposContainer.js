import React from 'react';
import { Route } from 'react-router-dom';
import Overview from './Overview';
import Repositories from './Repositories';
import Followers from './Followers';

const ReposContainer = () => {

    return (
        <div className="reposContainer">
            <Route path="/overview" component={Overview} />
            <Route path="/repositories" component={Repositories}/>
            <Route path="/followers" component={Followers} />
        </div>
    )
}

export default ReposContainer;