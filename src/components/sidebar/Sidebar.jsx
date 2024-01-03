/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import classes from './Sidebar.module.css'
const Sidebar = (props) => {
    let SbClass = props.show ? 'sidebar' : 'sidebar-close';
    function handleClick(page) {
        props.setPage(page);
        if (page === 'about') {
            window.history.pushState({}, '', '/portfolio-amisha');
        } else if (page === 'contact') {
            window.history.pushState({}, '', '/portfolio-amisha/contact');
        }
    }
    return (
        props.show && <div className={classes[`${SbClass}`]}>
                <nav>
                    <ul>
                        <li onClick={() => handleClick("about")} >Home</li>
                        <li onClick={() => handleClick("contact")}>Contact </li>
                        <li>Intro</li>
                        <li>Services</li>
                        <li>Blog</li>
                    </ul>
                </nav>
        </div>
    )
}

export default Sidebar