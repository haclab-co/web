import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className='nav-columns'>
                    <div className='nav-column'>
                        <div className='nav-label'>Menu</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to='/work'>
                                    Work
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink exact to='/services'>
                                    Shop
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to='/about'>
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-column'>
                        <div className='nav-label'>Contacts</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className='nav-info-label'>Email</li>
                                <li>
                                    <NavLink to='/contact'>
                                        Get in touch
                                </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/quote' exact>
                                        Get a Quote
                                    </NavLink>
                                </li>

                            </ul>
                            <ul className="nav-info">
                                <li className='nav-info-label'>Headquoters</li>
                                <li>Maria Tusabire,</li>
                                <li>Kireka Kamuri road</li>
                                <li>Kampala, Uganda</li>
                            </ul>
                            <ul className="nav-info">
                                <li className='nav-info-label'>Phone</li>
                                <li>+256 781 343 882</li>
                            </ul>
                            <ul className="nav-info">
                                <li className='nav-info-label'>Legal</li>
                                <li>Privacy & Cookies</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
