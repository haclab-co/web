import { FacebookFilled, FacebookOutlined, InstagramFilled, InstagramOutlined, LinkedinFilled, LinkedinOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons'
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'

const SocialLinks = () => {
    return (
        <div className='site-icons'>
            <FaFacebookF className='icon' />
            <a target='_blink' href='https://web.facebook.com/HytechUg'><FacebookFilled className='icon' /></a>
            <a target='_blink' href='https://twitter.com/HytechUg'><TwitterOutlined className='icon' /></a>
            <a target='_blink' href='https://www.instagram.com/hytechlab'><InstagramFilled className='icon' /></a>
            <a target='_blink' href='https://www.linkedin.com/company/hytech-uganda'><LinkedinFilled className='icon' /></a>
            <a target='_blink' href='https://api.whatsapp.com/send?phone=+256781343882'><WhatsAppOutlined className='icon' /></a>
            <a target='_blink' href='https://github.com/hytechlab'><FaGithub className='icon' /></a>
        </div>
    )
}

export default SocialLinks
