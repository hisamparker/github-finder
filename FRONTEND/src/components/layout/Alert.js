import React, {Fragment} from 'react'

export default function Alert({alert, alertData}) {
    return (
        <Fragment>
            {alert !== null && (
                <div className={`alert alert-${alertData.color}`}>
                <i className="fas fa-info-circle" />                
                {alertData.msg}
                </div>
            )
            }
        </Fragment>
    )
}
