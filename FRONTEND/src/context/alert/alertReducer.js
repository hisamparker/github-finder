import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';
  
// a reducer takes a state and an action
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        //if the type is search_users, we set USERS to the payload
        case SET_ALERT:
            return  action.payload;
        case REMOVE_ALERT:
            return null;
        // by default we return the state
        default: return state;
    }

}