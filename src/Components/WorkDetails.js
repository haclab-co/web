import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const WorkDetails = ({ currentProject, projects }) => {



    return (
        <div className="projects">
            {/* <div className="space"></div> */}

            <div className="type">
                <AnimatePresence exitBeforeEnter>
                    <motion.span className='type-icon'
                        key={currentProject}
                        src={require(`../assets/${projects[currentProject].image}`)}
                        alt={projects[currentProject].name}
                        initial={{ opacity: 0, x: '-20rem', scale: .3 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: '-20rem', scale: .3 }}
                        transition={{ duration: .4 }}
                    >
                        {projects[currentProject].type.icon}
                    </motion.span>
                </AnimatePresence>
                <AnimatePresence exitBeforeEnter>
                    <motion.span className='type-name'
                        key={currentProject}
                        src={require(`../assets/${projects[currentProject].image}`)}
                        alt={projects[currentProject].name}
                        initial={{ opacity: 0, x: '-20rem', scale: .3 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: '-20rem', scale: .3 }}
                        transition={{ duration: .2, delay: .2 }}
                    >
                        {projects[currentProject].type.name}
                    </motion.span>
                </AnimatePresence>
            </div>
            <div className="image">
                <AnimatePresence exitBeforeEnter>
                    <motion.img
                        key={currentProject}
                        src={require(`../assets/${projects[currentProject].image}`)}
                        alt={projects[currentProject].name}
                        initial={{ opacity: 0, y: 300, scale: .3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -500, scale: .3 }}
                        transition={{ duration: .3 }}
                    />
                </AnimatePresence>

            </div>

            <div className="details">
                <div className='number'>
                    <span class="label">No. </span>

                    <motion.span class="now"
                        key={currentProject}
                        initial={{ opacity: 0, y: '20rem', scale: .3 }}
                        animate={{ opacity: 1, y: '0rem', scale: 1 }}
                        exit={{ opacity: 0, y: '-20rem', scale: .3 }}
                        transition={{ duration: 6 }}
                    >{currentProject + 1}
                    </motion.span>
                    <span class="all">{projects.length}</span>
                </div>
                <AnimatePresence exitBeforeEnter>
                    <motion.div className='name'
                        key={currentProject}
                        initial={{ opacity: 0, x: '20rem', scale: .3 }}
                        animate={{ opacity: 1, x: '0rem', scale: 1 }}
                        exit={{ opacity: 0, x: '20rem', scale: .3 }}
                        transition={{ duration: .4 }}
                    >
                        {projects[currentProject].name}
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence exitBeforeEnter>
                    <motion.div className='description'
                        key={currentProject}
                        initial={{ opacity: 0, x: '20rem', scale: .3 }}
                        animate={{ opacity: 1, x: '0rem', scale: 1 }}
                        exit={{ opacity: 0, x: '20rem', scale: .3 }}
                        transition={{ duration: .3, delay: .1 }}
                    >
                        {projects[currentProject].description}
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence exitBeforeEnter>
                    <motion.a href='/about'
                        key={currentProject}
                        initial={{ opacity: 0, x: '20rem', scale: .3 }}
                        animate={{ opacity: 1, x: '0rem', scale: 1 }}
                        exit={{ opacity: 0, x: '20rem', scale: .3 }}
                        transition={{ duration: .1, delay: .2 }}
                    >
                        View details
                    </motion.a>
                </AnimatePresence>
            </div>

        </div>
    )
}

export default WorkDetails
