import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class NavBar extends Component {
    static defaultProps = {
        title: 'GitFind',
        icon: 'fab fa-github'
    };

    static propTypes = {
        title: this.prototype.string.isRequired,
        icon: this.prototype.string.isRequired
    }
    
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon} />
                      {this.props.title}
                </h1>
            </nav>
        )
    }
}

