import React, {Component} from 'react'

import Nav from './nav'

export class Header extends Component {
    render(props) {
        return (
            <header className="header">
                <div className="col-2">
                    <a href="/" className="logo">Louis Lemoine</a>
                </div>
                <div className="col-10 header--image">
                    <Nav />
                </div>
                <h1 className="header--text">{this.props.firstText}<br/>{this.props.secondText}</h1>
            </header>
        )
    }
}
export default Header