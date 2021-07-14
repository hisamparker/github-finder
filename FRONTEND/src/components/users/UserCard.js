import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



const UserCard = ({user}) => {
    const {login, avatar_url} = user
    return (
        <div className='card text-center'>
            <img src={avatar_url} alt={login} className="round-img" style={{width: '160px'}}/>
            <h3>{login}</h3>
            <div><Link className="btn btn-dark btn sm my-1" to={`/users/${login}`}>Say hi 🥰</Link></div>
        </div>
    )
}

UserCard.protoTypes = {
    user: PropTypes.object.isRequired,
}

export default UserCard

