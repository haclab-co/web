import React from 'react'
import { motion } from 'framer-motion'

const Page = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, scale: 0 }}
            className="page"
        >
            {props.children}
            <div className="animated-bg">
                <marquee direction="left" scrollamount="10">Hytech lab uganda. Hytech lab uganda. Hytech lab uganda. Hytech lab uganda. Hytech lab uganda. Hytech lab uganda. </marquee>
                <marquee behavior="" direction="right" scrollamount="5">Web Development in Uganda, Rich Application Development, Software Application Development, Custom Website Designing, PHP Development, Open Source Customization, Website/Software/Application Maintenance, E-Commerce Solutions, Website Optimization & Promotion and more.</marquee>
                <marquee behavior="" direction="left" scrollamount="20">Web Development in Uganda, Rich Application Development, Software Application Development, Custom Website Designing, PHP Development, Open Source Customization, Website/Software/Application Maintenance, E-Commerce Solutions, Website Optimization & Promotion and more.</marquee>
                <marquee behavior="" direction="right" scrollamount="5">Web Development in Uganda, Rich Application Development, Software Application Development, Custom Website Designing, PHP Development, Open Source Customization, Website/Software/Application Maintenance, E-Commerce Solutions, Website Optimization & Promotion and more.</marquee>
            </div>
            <div className='page-content'>
            </div>
        </motion.div>
    )
}

export default Page
