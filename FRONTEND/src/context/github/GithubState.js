// will hold all our state and our actions
import React, { useReducer } from 'react';

import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
} from '../types';

let githubClientId;
let githubClientSecret;

// this is how we say if we're not in production, use these .env vars otherwise... 
if(process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_SECRET
} else {
    //use these env vars that will wxist in netlify!
    githubClientId = process.env.GITHUB_ID;
    githubClientSecret = process.env.GITHUB_SECRET
}

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //SEARCH USERS
    // pass searchUser method down to search so that we can access the search
    const searchUsers = async (user) => {
        setLoading()
        const results = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        // reducer will send all this into our context
        dispatch({
            // in the dispatch we need a type
            type: SEARCH_USERS,
            // and we send a payload, the data
            payload: results.data.items
        })
    }

    //GET USER
    const getUser = async(userName) => {
        setLoading()
        const results = await axios.get(`https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({
            type: GET_USER,
            payload:results.data
        })
      }
    //GET REPOS
    const getUserRepos = async(userName) => {
        setLoading()
        const results = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({
            type: GET_REPOS,
            payload:results.data
        })
      }

    //CLEAR USERS
    const clearUsers = () => dispatch({type: CLEAR_USERS})

    //SET LOADING
    // dispatch an object with a type, must have a type, can also have a payload, but must have a type, reducer will catch and handle setLoading
    const setLoading = () => dispatch({type: SET_LOADING})

    return <GithubContext.Provider  
        value={{
            //anything we want available in global context must be here!
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
    }}>{props.children}</GithubContext.Provider>

}

export default GithubState