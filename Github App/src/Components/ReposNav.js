import React from 'react';
import { NavLink } from 'react-router-dom';

const ReposNav = () => {
  
    return (
        <div className="reposNav">
            <NavLink activeClassName="active" to="/overview">Overview</NavLink>
            <NavLink activeClassName="active" to="/repositories">Repositories</NavLink>
            <NavLink activeClassName="active" to="/followers">Followers</NavLink>
        </div>
    )
}

export default ReposNav;