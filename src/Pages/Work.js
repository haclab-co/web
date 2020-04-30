import React, { useState } from 'react'
import Page from '../Components/Page'
import { FaGlobeAfrica, FaMobile, FaLaptopCode } from 'react-icons/fa';
import { useEffect } from 'react';
import gsap from 'gsap';
import WorkDetails from '../Components/WorkDetails';


const icons = {
    website: { name: 'website', icon: <FaGlobeAfrica /> },
    webApp: { name: 'Web App', icon: <FaLaptopCode /> },
    mobileApp: { name: 'Mobile App', icon: <FaMobile /> }
}

const projects = [
    {
        name: 'Wion Motors Limited',
        type: icons.website,
        tech: ['wordpress', 'php', 'css'],
        description: 'vehicle import company and garage',
        image: 'wionmotors.png'
    },
    {
        name: 'Bolt Signals',
        type: icons.website,
        tech: ['html', 'php', 'javascript', 'css'],
        description: 'ICT Procurement company',
        image: 'boltsignals.png'
    },
    {
        name: 'Myhealthcliniq',
        type: icons.webApp,
        tech: ['html', 'php', 'javascript', 'css', 'laravel'],
        description: 'App fro finding medical help online',
        image: 'cliniq.png'
    }
    ,
    {
        name: 'Myhealthcliniq',
        type: icons.mobileApp,
        tech: ['html', 'php', 'javascript', 'css', 'laravel'],
        description: 'App fro finding medical help online',
        image: 'cliniq.png'
    },
    {
        name: 'Covid 19 Updates',
        type: icons.mobileApp,
        tech: ['android', 'ios', 'javascript', 'React Native'],
        description: 'App fro finding medical help online',
        image: 'covid-app.png'
    }
]

const tl = gsap.timeline()
const Work = () => {
    const [currentProject, setCurrentProject] = useState(0)

    useEffect(() => {

        tl.from('.pagination', .4, {
            y: 140,
            delay: .8,
            ease: 'power4.out',
        })
            .from('.companies *', .5, {
                x: '100vw',
                skewY: 10,
                stagger: .05,
                ease: 'power4.out',
            })
        return () => {

        }
    }, [])

    return (
        <Page>
            <div className="work">
                <WorkDetails currentProject={currentProject} projects={projects} tl={tl} />
                <div className="pagination">
                    <div className="bg"></div>
                    <div className="navigation"><p className='text'>Select a company</p></div>
                    <div className="companies">
                        {
                            projects.map((p, i) => <div onClick={() => setCurrentProject(i)} className={currentProject === i ? 'image active' : 'image'}><img src={require(`../assets/${p.image}`)}
                                alt={p.name} /></div>)
                        }
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default Work
