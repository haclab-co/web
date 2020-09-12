import React, { useEffect } from 'react'
import { FaPhone } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'

const tl = gsap.timeline()
const AboutUs = () => {
    useEffect(() => {
        tl.from('.aboutUs .item', .6, {
            scale: 0,
            skewY: 20,
            stagger: {
                amount: .2
            }
        }).from('.left .btn-row', .6, {
            scale: 0
        }).to('.left .btn-row', .1, {
            scale: 2,
        }).to('.left .btn-row', .6, {
            scale: 1,
        })
        return () => {

        }
    }, [])
    return (
        <div className='aboutUs'>
            <div className='left item'>
                <div className="image">
                    <img alt='about' src={require('../../assets/bulb.jpg')} />
                </div>
                <div className='btn-row' style={{marginTop:'-50px'}}>
                    <NavLink to='/contact'>
                        Get in touch <FaPhone />
                    </NavLink>
                </div>
            </div>
            <div className='right item'>
                <span className='text'>
                    Haclab. is a Kampala Uganda based Digital Solutions firm delivering high quality, cost effective, reliable result-oriented web, apps, e-commerce and many other digital solutions on time for a local & global clientele.
                            <br /> <br />Professionalism, Skill and Expertise are the tools we use to make the web work for your business bringing in maximum return on your investment in shortest possible time.
                            <br /> <br />
                            As a trusted partner with wide-ranging service capabilities, we help number of people country to grow their business and maximize profit. <br /><br />Our main areas of key business are Web Development in Uganda, Rich Application Development, Software Application Development, Custom Website Designing, PHP Development, Open Source Customization, Website/Software/Application Maintenance, E-Commerce Solutions, Website Optimization & Promotion and more.
                    </span>
            </div>
        </div>
    )
}

export default AboutUs
