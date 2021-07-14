import React, {useState, useContext} from 'react'

import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

export default function Search() {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const [formData, setFormData] = useState({
        text: ''
    })

    const onChange = (e) => {
        // formData is an object with multiple properties. each input has the name of one of these properties. so, we use [e.target.name] to define which property we want to set, then e.target.value to get the new value 
        setFormData({[e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(formData.text === '') {
            return alertContext.setAlert('Please enter a human name!', 'light')
        }
        githubContext.searchUsers(formData.text)
        setFormData({text: ''})
    }

    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
                <input value={formData.text} onChange={onChange} type="text" name="text" id="form_input" placeholder="Search users..." />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 &&
            <button className="btn tbn-light btn-block" onClick={githubContext.clearUsers} >Clear Users</button>
            }
        </div>
    )
}
