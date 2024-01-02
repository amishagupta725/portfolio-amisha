import { BrowserRouter, Link } from 'react-router-dom'

import classes from './Sidebar.module.css'
const Sidebar = () => {
    return (
        <div className={classes["sidebar"]}>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/intro'>Intro</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </nav>
            </BrowserRouter>
        </div>
    )
}

export default Sidebar