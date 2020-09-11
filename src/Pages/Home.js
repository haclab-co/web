import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Services from '../Components/Services'
import IntroOverlay from '../Components/IntroOverlay'
import gsap from 'gsap'
import { motion } from 'framer-motion'

const homeAnimation = (completeAnimation) => {
    const tl = gsap.timeline()

    tl.from('.line span', 1, {
        y: 100,
        ease: 'power4.out',
        delay: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        }
    }).to('.overlay-top', 1.6, {
        height: 0,
        ease: 'expo.inOut',
        stagger: 0.4
    }).from('.header', 1, {
        y: -100,
        ease: 'power4.out',
        delay: -.5,

    })
        .to('.overlay-bottom', 1.6, {
            width: 0,
            delay: -.8,
            ease: 'expo.inOut',
            stagger: {
                amount: .4
            }
        }).to('.intro-overlay', 0, { css: { display: 'none' } })
        .from('.service-image img', 1.6, {
            scale: 1.4,
            ease: 'expo.inOut',
            delay: -2,
            stagger: {
                amount: .4
            }
        }).from('.site-icons .icon', .001, {
            y: 80,
            ease: 'power4.out',
            delay: 0,
            skewY: 7,
            stagger: {
                amount: 0.3
            },
            onComplete: completeAnimation
        })
}
export default (props) => {

    const [animationComplete, setAnimationComplete] = useState(false)
    const completeAnimation = () => setAnimationComplete(true)
    useEffect(() => {
        homeAnimation(completeAnimation)



        return () => {

        }
    }, [])

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {
                !animationComplete && <IntroOverlay />
            }
            <Banner />
            <Services />
        </motion.div>
    )
}
