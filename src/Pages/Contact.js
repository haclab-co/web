import React, { useEffect } from 'react'
import Page from '../Components/Page'
import { GoMail } from 'react-icons/go'
import gsap from 'gsap'
import SocialLinks from '../Components/SocialLinks'

const mailjet = require ('node-mailjet')
.connect('5f7b8405146dd65efb7e9b907c2de04e', 'f85b16209494eb74f7a4112d69899484')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "haclab@outlook.com",
        "Name": "Haclab"
      },
      "To": [
        {
          "Email": "mudalit@gmail.com",
          "Name": "Haclab"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log('success',result.body)
  })
  .catch((err) => {
    console.log('failed',err.statusCode)
  })

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
                    <form>
                        <div className="element">
                            <label>Why don't we start with your name?</label>
                            <input className='name' placeholder='Type your name here' />
                            <div  className='error-text'>Who are you?</div>
                        </div>
                        <div className="element">
                            <label>E-mail Address</label>
                            <input placeholder='E-mail Address here' />
                            <div className='error-text'>Need to reach you somehow</div>
                        </div>
                        <div className="element">
                            <label>What's on your mind? </label>
                            <textarea placeholder='Message here' />
                            <div className='error-text'>How may we help?</div>
                        </div>
                        <button disabled='true'> <GoMail className='icon' /> Send</button>
                    </form>
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
