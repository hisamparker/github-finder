import React, {useContext} from 'react'
import GithubContext from '../../context/github/githubContext'

import UserCard from './UserCard'
import Spinner from '../layout/Spinner'

const Users = () => {
    const githubContext = useContext(GithubContext);
    const {loading, users} = githubContext
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

export default Users
