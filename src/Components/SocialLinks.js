import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'

const SocialLinks = () => {
    return (
        <div className='site-icons'>
            <a target='_blink' href='https://web.facebook.com/HytechUg'><FaFacebookF className='icon' /></a>
            <a target='_blink' href='https://twitter.com/HytechUg'><FaTwitter className='icon' /></a>
            <a target='_blink' href='https://www.instagram.com/hytechlab'><FaInstagram className='icon' /></a>
            <a target='_blink' href='https://www.linkedin.com/company/hytech-uganda'><FaLinkedin className='icon' /></a>
            <a target='_blink' href='https://api.whatsapp.com/send?phone=+256781343882'><FaWhatsapp className='icon' /></a>
            <a target='_blink' href='https://github.com/hytechlab'><FaGithub className='icon' /></a>
        </div>
    )
}

export default SocialLinks
