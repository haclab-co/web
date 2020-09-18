import React from 'react'
import SocialLinks from './SocialLinks'
export default () => {
    return (
        <section className='main'>
            {/* <div className="page-bg">Hytech Lab</div> */}
            <div className='container'>
                <div className='row-parent'>
                    <div className='left'>
                            <h2>
                                <div className='line'>
                                    <span>Attain efficiency and</span>
                                </div>
                                <div className='line'>
                                    <span>effectiveness effortlessly</span>
                                </div>
                            </h2>
                        {/* <div className='btn-row'>
                            <NavLink to='/about'>
                                More about us
                            </NavLink>
                        </div> */}
                        <div className='row'>
                            <address>
                                <h3>+256 781 343 882</h3>
                                <h4>info@haclab.net</h4>
                            </address>
                            <SocialLinks />
                        </div>
                    </div>
                    {/* <div className='contact-details'>
                    <address>
                        <h3>+256 781 343 882</h3>
                        <h4>info@haclab.net</h4>
                    </address>
                    </div> */}
                </div>
            </div>

        </section>
    )
}
