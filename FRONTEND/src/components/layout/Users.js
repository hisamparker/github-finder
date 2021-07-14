import React from 'react'
import PropTypes from 'prop-types'

import UserCard from './UserCard'
import Spinner from './Spinner'

const Users = ({users, loading}) => {
    return (
        loading 
        ? 
        <Spinner /> 
        :
        users
        ?
        <div style={userStyle}>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
        :
        null
    )
}


const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr',
    gridGap: '1rem'
}

Users.propTypes = {
    users: PropTypes.array.isRequired || PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Users
