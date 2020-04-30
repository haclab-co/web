import React, { useEffect } from 'react'
import { FaUmbrellaBeach, FaThumbsUp } from 'react-icons/fa'
import { MdHearing } from 'react-icons/md';
import { IoIosChatbubbles } from "react-icons/io";
import { TiSupport } from 'react-icons/ti'
import { GiTeamIdea } from 'react-icons/gi'
import gsap from 'gsap';

const tl = gsap.timeline();

const reasons = [
    {
        title: 'Good listeners',
        description: 'We ask (many) questions. A deep understanding of our clients’ business processes and audiences is the foundation of our practice. We support our creative process with data and qualitative research, bringing clarity to the project.',
        image: <MdHearing />
    },
    {
        title: 'Excellent at engaging',
        description: 'Every communication has a conversion goal. Goals vary from project to project, but our objective is always the same: engage the user on an enjoyable journey that ends in conversion.',
        image: <IoIosChatbubbles />
    },
    {
        title: 'Simplifiers',
        description: 'We break down complex products and processes to make them simple and easy to understand. Your final digital product will be not only visually attractive, but also easy to comprehend/understand.',
        image: <FaUmbrellaBeach />
    },
    {
        title: 'Reliable',
        description: 'We are problem solvers at heart. We enjoy simplifying and suggesting sustainable solutions to our clients. We always deliver, most of the time on time.',
        image: <TiSupport />
    },
    {
        title: 'Cooperative',
        description: 'We care about our client’s brands and the digital products we create. We favor long-term relations, often becoming digital partner for all aspects of our clients digital ventures.',
        image: <GiTeamIdea />
    },
    {
        title: 'Making you look good',
        description: 'First impressions matter a lot, so we make sure your audience retains a positive impression from the moment they interact with your brand.',
        image: <FaThumbsUp />
    },
]
const Why = () => {

    useEffect(() => {
        tl.from('.why .item', .6, {
            y: '100vh',
            skewY: 7,
            stagger: .2,
            overflow: 'hidden'
        }).from('.why .item .image *', .4, {
            scale: 0,
            delay: -1,
            stagger: 0.1,
            skewY: 80
        })
        return () => {

        };
    }, []);

    return (
        <div className='why'>
            {
                reasons.map(({ title, description, image }) =>
                    <div className="item">
                        <div className="image">
                            {image}
                        </div>
                        <div className="text">
                            <h4 className="title">
                                {title}
                            </h4>
                            <p className="description">
                                {description}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Why
