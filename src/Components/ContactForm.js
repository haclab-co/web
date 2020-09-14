import React, { useState, useEffect } from 'react'
import { Spin, message } from 'antd';
import emailjs from 'emailjs-com';

const ContactForm = (props) => {
    const{packagePlan,setPackagePlan,handleFlip} = props
    console.log(packagePlan,'packagePlan');
    const [values, setValues] = useState({name:'',email:'',message:packagePlan?`${packagePlan}\n----------------------------------------\n`:''})
    const [sending, setSending] = useState(false)
    const key = 'updatable';

    // useEffect(() => {
    // packagePlan && setValues({message:packagePlan})
    // }, [])
    const sendEmail = (e) =>{
      e.preventDefault()
      message.loading({ content: 'Sending your message...', key });
      setSending(true)

      console.log(values);

      emailjs.send("service_nhczqca","template_baaamst",{
        from_name: packagePlan?packagePlan:"Contact form on company site",
        name: values.name,
        email:values.email,
        message: values.message,
        reply_to: values.email,
        },'user_6kdiE6yD7KqCXhOIaXEKv')
        .then(done=>{
          setSending(false)
          setPackagePlan('')
          setValues({name:'',email:'',message:''})
          handleFlip()
          done.status === 200?message.success({ content: 'Message sent successfully we will get back to you in a shot while', key, duration: 5 }):message.error({ content: 'Sorry, something went wrong. Please try again!', key, duration: 5 })
        })
    }

    const handleChange = e =>{
      setValues({...values, [e.target.name]:e.target.value})
    }
    return (
        <Spin tip="Sending message..." spinning={sending}>
             <form onSubmit={sendEmail}>
                    <div className="element">
                        <label>Why don't we start with your name?</label>
                        <input onChange={handleChange}name={'name'} value={values.name} name={'name'}className='name' placeholder='Type your name here' />
                    </div>
                    <div className="element">
                        <label>Need to reach you somehow</label>
                        <input onChange={handleChange}name={'email'} value={values.email} placeholder='E-mail Address here' />
                    </div>
                    <div className="element">
                        <label>What's on your mind? </label>
                        <textarea onChange={handleChange}name={'message'} value={values.message} placeholder='Message here' />
                    </div>
                    <button type='submit' > Send</button>
                </form>
        </Spin>
    )
}

export default ContactForm
