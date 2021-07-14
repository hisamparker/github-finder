import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'


import Spinner from './Spinner'

export default function UserDetails({getUser, user, loading, match}) {
    
    useEffect(() => {
        getUser(match.params.login)
        console.log('hi')
    }, [])
    const {name, avatar_url } = user;
    // const {name, avatar_url, login, location, bio, blog, html_url, followers, following, hireable} = user;

    return (
        loading === true
            ? 
            <Spinner /> 
            :
            <div className="card txt-center" style={{width: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={avatar_url} alt={name} className="round-img" style={{width: '160px'}} />
                <h1>{name}</h1>
                <Link to='/'>Back to Search</Link>
            </div>
    )
}
