import React, { useState, useEffect } from 'react'
import { ReactComponent as CaseNext } from '../assets/arrow-right.svg'
import { ReactComponent as CasePrev } from '../assets/arrow-left.svg'
import gsap from 'gsap';


const servises = [
    {
        id: 1,
        subtitle: 'Web Development Hosting & SEO',
        title: 'We leverage  highly scalable JavaScript frameworks such as React to deliver web solutions that are both stylish and fast.',
        img: 'host'

    },
    {
        id: 2,
        subtitle: 'Custom Software Development',
        title: 'Modification of existing business processes and customer experiences to help you operate effectively and efficiently',
        img: 'dev'

    },
    {
        id: 3,
        subtitle: 'Mobile app Development',
        title: 'The world went mobile. To keep up to date let us craft smart solution that will be a good fit for your mobile users.',
        img: 'database'

    },
    {
        id: 4,
        subtitle: 'E-Commerce Website',
        title: 'We help you expand your market by intergrating E-Commerce in your website',
        img: 'pay'

    }
]

const tl = gsap.timeline();
export default function Services() {

    const [selectedService, setSelectedService] = useState(0)

    useEffect(() => {
        console.log(selectedService);
        tl.to('.selected-service', {
            duration: 1,
            y: '100vh',
            ease: 'expo.inOut',
            css: {
                position: 'fixed',
                top: 0,
                zIndex: 9,
                left: 0,
                height: '100vh',
                width: '100vw'
            }

        })
        return () => {

        }
    }, [])


    return (
        <section className='services'>
            <div className='container-fluid'>
                <div className='services-navigation'>
                    <div className='services-arrow prev disabled'>
                        <CasePrev />
                    </div>
                    <div className='services-arrow next'>
                        <CaseNext />
                    </div>
                </div>
                <div className='row'>
                    {
                        servises.map(item =>
                            <div onClick={() => setSelectedService(item.id)} className={selectedService === item.id ? 'selected-service service' : 'service'} key={item.id}>
                                <div className='service-details'>
                                    <span>{item.subtitle}</span>
                                    <h2>{item.title}</h2>
                                </div>
                                <div className='service-image'>
                                    <img src={require(`../assets/${item.img}.jpg`)}
                                        alt={item.title} />
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

        </section>
    )
}
