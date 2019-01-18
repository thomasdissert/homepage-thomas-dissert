import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            year: '',
            email: '',
            linkedin: '',
            xing: ''
        };
    }
    componentDidMount(){
        this.setState({
            author: this.props.author,
            year: this.props.year,
            email: this.props.email,
            linkedin: this.props.linkedin,
            xing: this.props.xing
        });
    }
    render() {
        return (
            <div className="Footer">
                <div className="widthHolder">
                    <div className="copyright">© {this.state.year} {this.state.author} </div>
                    <div className="social"><a href={`mailto:${this.state.email}`}>Email</a> \\ <a href={this.state.linkedin}>LinkedIn</a> \\ <a href={this.state.xing}>Xing</a></div>
                </div>
            </div>
        );
    }
}

export default Footer;