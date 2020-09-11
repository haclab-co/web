import React, { useState, useEffect } from 'react'
import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg'
import gsap from 'gsap'
import { withRouter, NavLink } from 'react-router-dom'

const tl = gsap.timeline()
const Header = ({ history, dimensions }) => {

    const [menuState, setMenuState] = useState({ menuOpened: false })

    const toggleMenu = () => setMenuState({ menuOpened: !menuState.menuOpened })
    useEffect(() => {
        console.log(menuState);

        history.listen(() => {
            setMenuState({ menuOpened: false })
        })

        if (menuState.menuOpened === true) {
            gsap.to('nav', { duration: 0.01, css: { display: 'block' } })
            tl.to('body', { duration: 0.01, css: { overflow: 'hidden' } })
                .to('.App', {
                    duration: 1,
                    y: dimensions.width <= 654 ? '100vh' : dimensions.height / 1.3,
                    ease: 'expo.inOut'
                }).to('.hamburger-menu span', {
                    duration: 0.6,
                    delay: -1,
                    scaleX: 0,
                    transformOrigin: '50% 0%',
                    ease: 'expo.inOut'
                }).to('#path_1', {
                    duration: 0.4,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: 10,
                        strokeDasharray: 5
                    }
                }).to('#path_2', {
                    duration: 0.4,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: 10,
                        strokeDasharray: 20
                    }
                }).to('#line_1', {
                    duration: 0.4,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: 40,
                        strokeDasharray: 18
                    }
                }).to('#circle', {
                    duration: 0.6,
                    delay: -0.8,
                    css: {
                        strokeDashoffset: 0
                    }
                }).to('.hamburger-menu-close', {
                    duration: 0.6,
                    delay: -0.8,
                    css: {
                        display: 'block'
                    }
                })
        } else {

            tl.to('.App', {
                duration: 1,
                y: 0,
                ease: 'expo.inOut'
            }).to('#circle', {
                duration: 0.4,
                delay: -0.4,
                css: {
                    strokeDashoffset: -183,
                    strokeDasharray: 227
                }

            }).to('#path_1', {
                duration: 0.4,
                delay: -0.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 10
                }

            }).to('#path_2', {
                duration: 0.4,
                delay: -0.6,
                css: {
                    strokeDashoffset: 10,
                    strokeDasharray: 10
                }

            }).to('#line_1', {
                duration: 0.4,
                delay: -0.6,
                css: {
                    strokeDashoffset: 40,
                    strokeDasharray: 40
                }
            }).to('.hamburger-menu span', {
                duration: 0.6,
                delay: -1,
                scaleX: 1,
                transformOrigin: '50% 0%',
                ease: 'expo.inOut'
            }).to('.hamburger-menu-close', {
                duration: 0.001,
                display: 'none'
            }).to('body', {
                css: { overflow: 'auto' }
            }).to('nav', {
                duration: 0,
                delay: -.6,
                display: 'none'
            })

        }
    }, [menuState, dimensions,history])

    return (
        <div className="header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="logo">
                        <NavLink to='/'>HACLAB</NavLink>

                    </div>
                    <div
                        onClick={() => toggleMenu()}
                        className='nav-toggle'>
                        <div className="hamburger-menu">
                            <span className="hamburger-dash"></span>
                            <span className="hamburger-dash"></span>
                            <span className="hamburger-dash"></span>
                        </div>
                        <div
                            onClick={() => toggleMenu()}
                            className='hamburger-menu-close'>
                            <UpArrow style={{ width: '40px' }} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default withRouter(Header)