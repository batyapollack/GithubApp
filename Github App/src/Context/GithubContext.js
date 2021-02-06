import React, { createContext, useState, useEffect } from 'react';

export const GithubContext = createContext()

export const GithubState = ({ children }) => {

    const [user, setUser] = useState(null)
    const [overview, setOverview] = useState(null)
    const [repos, setRepos] = useState(null)
    const [followers, setFollowers] = useState(null)
    const [search, setSearch] = useState("batyapollack")
    const [error, setError] = useState("")

    const getSearch = (e)=> {
        e.preventDefault();
        getData();
        setSearch("")
    }

    useEffect(()=>{
        getData();
        setSearch("")
    }, []);

    const getData = () => {

        fetch(`https://api.github.com/users/${search}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setUser(null)
                    setOverview(null)
                    setRepos(null)
                    setFollowers(null)
                    setError("User not found...")
                }
                else {
                    setError("")
                    setUser(data)
                    getOverview()
                    getRepos()
                    getFollowers()
                }
            })
    }

    const getOverview = () => {
        fetch(`https://api.github.com/users/${search}/repos?per_page=8&sort=asc`)
            .then(res => res.json())
            .then((data) => setOverview(data))
    }

    const getRepos = () => {
        fetch(`https://api.github.com/users/${search}/repos`)
            .then(res => res.json())
            .then((data) => setRepos(data))
    }


    const getFollowers = () => {
        fetch(`https://api.github.com/users/${search}/followers`)
            .then(res => res.json())
            .then((data) => setFollowers(data))
    }




    return (
        <GithubContext.Provider value={{getSearch, user, overview, repos, followers, setSearch, error }}>
            {children}
        </GithubContext.Provider>
    )

};
