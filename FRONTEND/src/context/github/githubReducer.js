import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
  } from '../types';
  
// a reducer takes a state and an action
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        //if the type is search_users, we set USERS to the payload
        case SEARCH_USERS:
            return {
                // return current state, and make loading true
                ...state,
                users: action.payload,
                loading: false
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case GET_REPOS: 
            return {
                ...state,
                repos: action.payload,
                loading:false
            }
        
        //if the type is set_loading, we set loading to true
        case SET_LOADING:
            return {
                // return current state, and make loading true
                ...state,
                loading: true
            };
        // by default we return the state
        default: return state;
    }

}