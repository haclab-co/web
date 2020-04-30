import React from 'react'
import Page from '../Components/Page'
import AboutUs from './AboutTabs/AboutUs'
import { useState } from 'react'
import MV from './AboutTabs/MV'
import Why from './AboutTabs/Why'
import Team from './AboutTabs/Team'

export default function About() {

    const [tab, setTab] = useState('about');

    return (
        <>
            <Page>

                <div className='about'>
                    <ul className='nav'>
                        <li className={tab === 'about' ? 'item active' : 'item'} onClick={() => { setTab('about') }}>
                            About Us
                        </li>
                        <li className={tab === 'mv' ? 'item active' : 'item'} onClick={() => { setTab('mv') }}>
                            Mission & Vision
                        </li>
                        <li className={tab === 'why' ? 'item active' : 'item'} onClick={() => { setTab('why') }}>
                            Why
                        </li>
                        <li className={tab === 'team' ? 'item active' : 'item'} onClick={() => { setTab('team') }}>
                            Team
                        </li>
                    </ul>
                    <div className='body'>
                        {
                            tab === 'about' ? <AboutUs /> :
                                tab === 'mv' ? <MV /> :
                                    tab === 'why' ? <Why /> :
                                        tab === 'team' ? <Team /> : ""
                        }
                    </div>
                    {/* <div className='indicator'>
                        Indicator
                    </div> */}
                </div>
            </Page>
        </>
    )
}
