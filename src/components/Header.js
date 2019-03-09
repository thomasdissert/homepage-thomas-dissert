import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Default Title'
        };
    }
    componentDidMount(){
        this.setState({
            title: this.props.title,
        });
    }
    render() {
        return (
            <div className="Header">
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}

export default Header;