import React, { useState, useEffect } from 'react'
import { ReactComponent as CaseNext } from '../assets/arrow-right.svg'
import { ReactComponent as CasePrev } from '../assets/arrow-left.svg'
import gsap,{Expo,TimelineLite} from 'gsap';


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
        .to('.main',0.3,{
            y:'-50vh',
            ease: Expo.easeOut
        })    
        .to('.services',0.3,{
            height: '100vh',
            y:'-50vh',
            delay:-0.3
        })
        
        .to(`.child${id}>.service-details`, 1.2, {
                zIndex:50,
                height: "100vh",
                width:'25vw',
                ease: Expo.easeOut
              })
              .to(`.service:not(.child${id})`,1.2,{
                height: "0vh",
                width:'0vw',
                opacity:'0',
                delay:-1.2,
              })
              .to('.hamburger-dash,.logo>a',0.8,{color:'#ffffff'})
              .to('.hamburger-dash',0.8,{backgroundColor:'#ffffff',delay:-0.8})
              
  
          setAni(true);
        } else {
            animation.to('.services',0.3,{
                height: '50vh',
                y:'0vh',
            ease: Expo.easeOut
            })     .to('.main',0.3,{
                display:'block',
                y:'0vh',
                delay:-0.3,
                ease: Expo.easeOut
            }) 
            
          .to(`.child${id} .service-details`, 1.2, {
           
            width: '25vw',
            height: '100%',
            zIndex:6,
            ease: Expo.easeOut
          })
          .to(`.service:not(.child${id})`,1.2,{
            height: "100%",
            width:'100%',
            opacity:'1',
            delay:-1.2,
            ease: Expo.easeOut
          })
          .to('.logo>a,.hamburger-menu>span',0.8,{color:'#000000'})
          .to('.hamburger-dash',0.8,{backgroundColor:'#000000',delay:-0.8})
          
          setAni(false);
        }
      }
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
                            <div onClick={()=>animate(item.id)} className={'service child'+item.id} key={item.id}>
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
