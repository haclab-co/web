import React from 'react'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'
import { NavLink } from 'react-router-dom'
import SocialLinks from './SocialLinks'
import { ArrowRightOutlined } from '@ant-design/icons'
export default () => {
    return (
        <section className='main'>
            {/* <div className="page-bg">Hytech Lab</div> */}
            <div className='container'>
                <div className='row'>
                    <div className='left'>
                        <h2>
                            <div className='line'>
                                <span>We enhance digital experience</span>
                            </div>
                            <div className='line'>
                                <span>while maximizing your business potential</span>
                            </div>

                        </h2>
                        <div className='btn-row'>
                            <NavLink to='/about'>
                                More about us <ArrowRightOutlined />
                            </NavLink>
                        </div>
                    </div>
                    <SocialLinks />
                </div>
            </div>

        </section>
    )
}
