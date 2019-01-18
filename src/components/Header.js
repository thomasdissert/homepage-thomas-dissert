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
                {this.state.title}
            </div>
        );
    }
}

export default Header;