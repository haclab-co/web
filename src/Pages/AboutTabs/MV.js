import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'

const tl = gsap.timeline()
const MV = () => {

    useEffect(() => {
        tl.from('.mv .card *', .4, {
            scale: 0,
            skewY: 7,
            stagger: .1
        })
        return () => {

        }
    }, [])

    return (
        <>
            <div className="mv">
                <div className='card'>
                    <img alt='misson' src={require('../../assets/misson.svg')} />
                    <h3>Our Mission</h3>
                    <p>
                        With today’s exponential pace of change,
                        opportunities from traditional sectors and disruptive
                        innovations require agility and vision to act decisively.
                        For those driven to seize opportunities, Decisive offers a
                        team who fulfill ambitions and turn visions into reality.
                </p>
                </div>
                <div className="card">
                    <img alt='vision' src={require('../../assets/vision.svg')} />
                    <h3>Our Vision</h3>
                    <p>
                        While our clients have differing goals and different measures of success,
                        they all rely on our relentless energy and proficient expertise to achieve
                        their objectives.
                </p>
                </div>
            </div>
        </>
    )
}

export default MV
