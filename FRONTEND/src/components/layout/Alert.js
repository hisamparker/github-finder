import React, {Fragment, useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'

export default function Alert() {
    const alertContext = useContext(AlertContext)
    const {alert} = alertContext
    return (
        <Fragment>
            {alert !== null && (
                <div className={`alert alert-${alert.color}`}>
                <i className="fas fa-info-circle" />                
                {alert.msg}
                </div>
            )
            }
        </Fragment>
    )
}
