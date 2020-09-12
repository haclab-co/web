import React, { useState, useEffect } from 'react'
import { ReactComponent as CaseNext } from '../assets/arrow-right.svg'
import { ReactComponent as CasePrev } from '../assets/arrow-left.svg'
import gsap, { Expo, TimelineLite } from 'gsap';
import { Card, Carousel } from 'antd';


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

    useEffect(() => {
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

    const [ani, setAni] = useState(false)
    const animate = (id) => {
        var animation = new TimelineLite();
        if (!ani) {
            animation
                .to('.main', 1.2, {
                    y: '-50vh',
                    ease: 'expo.inOut',
                })
                .to('.services', 1.2, {
                    height: '100vh',
                    y: '-50vh',
                    delay: -1.2,
                    ease: 'expo.inOut',
                })
                .to(`.child${id} .service-details`, 1.2, {
                    zIndex: 50,
                    height: "100vh",
                    width: '100vw',
                    delay: -1.2,
                    ease: 'expo.inOut',
                })
                .to('.service-title', 1.2, {
                    width: '25vw',
                    delay: -1.2,
                    ease: 'expo.inOut',
                })
                .to(`.child${id} .service-properties`, 1.2, {
                    width: '75vw',
                    display: 'block',
                    opacity: 1,
                    delay: -1.2,
                    ease: 'expo.inOut',
                })
                .to(`.service:not(.child${id})`, 1.2, {
                    width: '0%',
                    opacity: '0',
                    delay: -1.2,
                    ease: 'expo.inOut',
                })
                .to('.logo>a,.hamburger-menu>span', 1.2, { color: '#ffffff', delay: -1.2, ease: 'expo.inOut', })
                .to('.hamburger-dash', 1.2, { backgroundColor: '#ffffff', delay: -1.2, ease: 'expo.inOut', })
                .to('.main', 1.2, {
                    y: '50vh'
                })

            setAni(true);
        } else {
            animation.to('.services', 1.2, {
                height: '50vh',
                y: '0vh',
                ease: 'expo.inOut',
            }).to('.main', 1.2, {
                y: '0vh',
                delay: -1.2,
                ease: 'expo.inOut',
            })

                .to(`.service:not(.child${id})`, 1.2, {
                    width: '100%',
                    opacity: '1',
                    delay: -1.2,
                    ease: 'expo.inOut',
                })
                .to(`.child${id} .service-details`, 1.2, {
                    width: '25vw',
                    height: '100%',
                    zIndex: 6,
                    delay: -1.2,
                    ease: 'expo.inOut',
                })
                .to('.service-title', 1.2, {
                    width: '100%',
                    delay: -1.2,
                    ease: 'expo.inOut',
                })
                .to(`.child${id} .service-properties`, 1.2, {
                    width: '0vw',
                    opacity: 0,
                    delay: -1.2,
                    ease: 'expo.inOut',
                })
                .to('.logo>a,.hamburger-menu>span', 1.2, { color: '#000000', delay: -1.2 , ease: 'expo.inOut'})
                .to('.hamburger-dash', 1.2, { backgroundColor: '#000000', delay: -1.2 , ease: 'expo.inOut'})

            setAni(false);
        }
    }
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
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
                <div className='row parent'>
                    {
                        servises.map(item =>
                            <div  onClick={() =>animate(item.id)} className={'service child' + item.id} key={item.id}>
                                <div className='service-details'>
                                    <div className='inner-details'>
                                        <div className='service-title'>
                                            <span>{item.subtitle}</span>
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div className='service-properties'>
                                        <Carousel autoplay>
                                            <div>
                                            <h3 style={contentStyle}>1</h3>
                                            </div>
                                            <div>
                                            <h3 style={contentStyle}>2</h3>
                                            </div>
                                            <div>
                                            <h3 style={contentStyle}>3</h3>
                                            </div>
                                            <div>
                                            <h3 style={contentStyle}>4</h3>
                                            </div>
                                        </Carousel>
                                        </div>
                                    </div>
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
