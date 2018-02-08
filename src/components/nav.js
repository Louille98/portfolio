import React, {Component} from 'react'

import CV_web from '../docs/CV_web.pdf'

class Nav extends Component {
    render() {
        return (
            <nav className="header__nav">
                <ul>
                    <li>
                        <a href={CV_web} download="resume" className="header__nav__link">resume</a>
                    </li>
                    <li>
                        <a href="mailto:hi@louislemoine.me" className="header__nav__link">hi@louislemoine.me</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Nav