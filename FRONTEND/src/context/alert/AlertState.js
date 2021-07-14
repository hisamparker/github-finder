// will hold all our state and our actions
import React, { useReducer } from 'react';

import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const initialState = null

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = (msg, color) => {
        dispatch({
            type: SET_ALERT,
            payload: {msg, color}
        })
        setTimeout(() => dispatch({type: REMOVE_ALERT}), 3000)
    }


    return <AlertContext.Provider  
        value={{
            //anything we want available in global context must be here!
           alert: state,
           setAlert,
    }}>
    {props.children}
    </AlertContext.Provider>

}

export default AlertState