import React, { useState, useEffect } from 'react'
import { ReactComponent as CaseNext } from '../assets/arrow-right.svg'
import { ReactComponent as CasePrev } from '../assets/arrow-left.svg'
import gsap, { Expo, TimelineLite } from 'gsap';
import { Card, Carousel, Row, Col, Tabs, Layout, message, Descriptions, Button } from 'antd';
import { MdClose, MdAccessible, MdWeb, MdCode, MdPhoneAndroid, MdDeveloperMode, MdDesktopWindows, MdShoppingCart } from 'react-icons/md';
import { FaMobile, FaMobileAlt, FaCode, FaArrowLeft, FaArrowRight, FaServer } from 'react-icons/fa';
import { GiShoppingCart, GiAbacus } from 'react-icons/gi';
import { TiCode } from 'react-icons/ti';
import { IoMdCart } from 'react-icons/io';
import { GoMail, GoArrowRight } from 'react-icons/go';
import emailjs from 'emailjs-com';
import Websites from './ServicesContent/Websites';
import Software from './ServicesContent/Softwares';
import Mobile from './ServicesContent/Mobile';
import Hosting from './ServicesContent/Hosting';
const { TabPane } = Tabs;

const servises = [
    {
        id: 1,
        subtitle: 'Professional Web Development',
        title: 'Overcome geographical limitations in your business',
        img: 'host',
        Icon:MdWeb,
        Details:Websites

    },
    {
        id: 2,
        subtitle: 'Custom Software Development',
        title: 'improve business efficiency and effectiveness',
        img: 'dev',
        Icon:MdDesktopWindows,
        Details:Software

    },
    {
        id: 3,
        subtitle: 'Mobile app Development',
        title: 'We bring your product to life',
        img: 'database',
        Icon:MdDeveloperMode,
        Details:Mobile

    },
    {
        id: 4,
        subtitle: 'Domain Names, Web Hosting & SEO',
        title: 'Exposing your Business to new potential customers',
        img: 'pay',
        Icon:FaServer,
        Details:Hosting

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
                    overflow:'hidden',
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
                .to('.prev',0.3,{
                    x:'-200px',
                    delay:-1.2
                })
                .to('.next',0.3,{
                    x:'200px',
                    delay:-1.2
                })
                .to('.click-for-details',0.3,{
                    y:'200px',
                    delay:-1.2
                })
                .to('.close-details',0.3,{
                    opacity:1,
                    delay:-1,
                    ease: 'expo.inOut',
                })


            setAni(true);
        } else {
            
            animation.to('.close-details',0.3,{
                opacity:0,
                ease: 'expo.inOut',
            }).to('.services', 1.2, {
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
                    height:'0vh',
                    opacity: 0,
                    delay: -1.2,
                    ease: 'expo.inOut',
                })
                .to('.logo>a,.hamburger-menu>span', 1.2, { color: '#000000', delay: -1.2, ease: 'expo.inOut' })
                .to('.hamburger-dash', 1.2, { backgroundColor: '#000000', delay: -1.2, ease: 'expo.inOut' })
                
                .to('.prev',0.3,{
                    x:'0px',
                })
                .to('.next',0.3,{
                    x:'0px',
                    delay:-0.3
                })
                .to('.click-for-details',0.3,{
                    y:'0px',
                    delay:-0.3
                })
            setAni(false);
        }
    }

    const [flipped, setFliped] = useState(false);

    const [packagePlan, setPackagePlan] = useState('')
    const handleFlip = () => {
      flipped ? setFliped(false) : setFliped(true);
    };

    return (
        <section className='services'>
            <div className='container-fluid'>
            <div className="click-for-details">
                <center>
                    <p className='text'>Click on one for details</p>
                </center>
                </div>
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
                            <div onClick={() => !ani && animate(item.id)} className={'service child' + item.id} key={item.id}>
                                <div className='service-details'>
                                <div onClick={() => ani && animate(item.id)} className="close-details">
                                <center>
                                    <p className='text'><MdClose/> Close</p>
                                </center>
                                </div>
                                    <div className='inner-details'>
                                        <div className='service-title'>
                                            {/* <div><item.Icon className="icon"/></div> */}
                                            <span className="subtitle">{item.subtitle}</span>
                                            <h2 className="title">{item.title}</h2>
                                        </div>
                                        <div className='service-properties'>
                                        <item.Details flipped={flipped} setFliped={setFliped}packagePlan={packagePlan} setPackagePlan={setPackagePlan}handleFlip={handleFlip}/>
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
