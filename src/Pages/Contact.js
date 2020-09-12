import React, { useEffect, useState } from 'react'
import Page from '../Components/Page'
import { GoMail } from 'react-icons/go'
import gsap from 'gsap'
import SocialLinks from '../Components/SocialLinks'
import emailjs from 'emailjs-com';
import { message, Spin } from 'antd'


const tl = gsap.timeline()
const Contact = () => {
    useEffect(() => {
        tl.from('.contact *', .6, {
            scale: 0,
            stagger: .1
        }).from('.site-icons .icon', .6, {
            x: '50vw',
            ease: 'power4.out',
            skewY: 7,
            stagger: {
                amount: 0.3
            },
        })
        return () => {

        };
    }, []);

    const key = 'updatable';

    const [values, setValues] = useState({name:'',email:'',message:''})
    const [sending, setSending] = useState(false)
    const sendEmail = (e) =>{
      e.preventDefault()
      message.loading({ content: 'Sending your message...', key });
      setSending(true)

      console.log(values);

      emailjs.send("service_nhczqca","template_baaamst",{
        from_name: "Contact form on company site",
        name: values.name,
        email:values.email,
        message: values.message,
        reply_to: values.email,
        },'user_6kdiE6yD7KqCXhOIaXEKv')
        .then(done=>{
          setSending(false)
          setValues({name:'',email:'',message:''})
          done.status === 200?message.success({ content: 'Message sent successfully we will get back to you in a shot while', key, duration: 5 }):message.error({ content: 'Sorry, something went wrong. Please try again!', key, duration: 5 })
        })
    }

    const handleChange = e =>{
      setValues({...values, [e.target.name]:e.target.value})
    }

    
    return (
        <Page>
            <div className="contact">
                <div className='title'>
                    <h3>
                        Let's talk
                    </h3>
                    <div className="line lineStagger"></div>
                </div>
                <div className='text'>
                    <div className="line lineStagger"></div>
                    <p>
                        Tell us about your company or organization.<br />
                        How may we help you?<br />
                        Would you like us to answer some questions?<br />
                        Got a project?
                    </p>
                </div>
                
                <div className='form'>
                  <Spin tip="Sending message..." spinning={sending}>
                    <form onSubmit={sendEmail}>
                        <div className="element">
                            <label>Why don't we start with your name?</label>
                            <input onChange={handleChange} name={'name'} value={values.name} className='name' placeholder='Type your name here' />
                            <div  className='error-text'>Who are you?</div>
                        </div>
                        <div className="element">
                            <label>E-mail Address</label>
                            <input onChange={handleChange}name={'email'} value={values.email} placeholder='E-mail Address here' />
                            <div className='error-text'>Need to reach you somehow</div>
                        </div>
                        <div className="element">
                            <label>What's on your mind? </label>
                            <textarea onChange={handleChange}name={'message'} value={values.message} placeholder='Message here' />
                            <div className='error-text'>How may we help?</div>
                        </div>
                        <button type='submit' > <GoMail className='icon' /> Send</button>
                    </form>
                </Spin>
                </div>
                <div className='links'>
                    <p>
                        © {new Date().getFullYear()} Hytech Lab All rights reserved</p>
                </div>
                <SocialLinks />
            </div>
        </Page>
    )
}

export default Contact
