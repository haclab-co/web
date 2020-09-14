import React from 'react'
import {Descriptions,Badge, Space, Tag} from 'antd';
import Template from './Template';
import { CheckCircleOutlined } from '@ant-design/icons';


const Hosting    = (props) => {

    const {flipped,setFliped,packagePlan,setPackagePlan,handleFlip} = props

    const content = {
        images:[],
        TheText:()=><>
         <h4 className="title">
            Super fast & flexible web hosting services
                </h4>
                <p>
                Our Linux based plans provide your websites with lightning-fast performance and fast 
                loading times, high-grade security and our expert customer support to help you along the way.
                </p>
                <p>Our fast & reliable cPanel-managed packages feature everything you need to get started, 
                    from unlimited websites, lightning-fast SSD web space, bandwidth and email accounts to a 
                    professional site builder with no hidden costs. 
                </p>
                <center style={{marginBottom:'20px'}}>
        <Tag icon={<CheckCircleOutlined />} color="#33aa33">
        24/7/365 Customer Support
      </Tag>
      <Tag icon={<CheckCircleOutlined />} color="#33aa33">
      99.9% Uptime
      </Tag>
      <Tag icon={<CheckCircleOutlined />} color="#33aa33">
      Free Migration
      </Tag>
        </center>
        </>,
        Right:()=><Descriptions
        title="Pricing"
        size={'small'}
        layout="vertical"
        >
        <Descriptions.Item>
        <h2 style={{color:'#0050ff'}}>Basic</h2>
        <Badge color={"#0050ff"} text="2GB Storage" /><br /> 
        <Badge color={"#0050ff"} text="Unlimited Bandwidth" /><br /> 
        <Badge color={"#0050ff"} text="1 FTP Account" /><br /> 
        <Badge color={"#0050ff"} text="5 Hosted Domains" /><br /> 
        <Badge color={"#0050ff"} text="Free Web Applications" /><br />
        <h3 style={{color:'#0050ff', paddingBottom:'10px',paddingTop:'10px'}}><strong>UGX 500,000/-</strong></h3>                                               
        <button onClick={()=>{setPackagePlan('Web Hosting Basic package');handleFlip()}} className='buy'>Proceed </button>
            </Descriptions.Item>
        <Descriptions.Item>
        <h2  style={{color:'#11aa11'}}>Standard</h2>
        <Badge color={"#11aa11"} text="10GB Storage" /><br /> 
            <Badge color={"#11aa11"} text="Unlimited Bandwidth" /><br /> 
            <Badge color={"#11aa11"} text="FTP Accounts" /><br /> 
            <Badge color={"#11aa11"} text="10 Hosted Domains" /><br /> 
            <Badge color={"#11aa11"} text="Free Web Applications" /><br />
        <h3  style={{color:'#11aa11', paddingBottom:'10px',paddingTop:'10px'}}><strong>UGX 1,000,000/-</strong></h3>                                               
        <button onClick={()=>{setPackagePlan('Web Hosting Standard package');handleFlip()}} className='buy'>Proceed </button>
        </Descriptions.Item>
        <Descriptions.Item>
        <h2  style={{color:'#ff0000'}}>Advanced</h2>
        <Badge color={"#ff0000"} text="Unlimited Storage" /><br /> 
        <Badge color={"#ff0000"} text="Unlimited Bandwidth" /><br /> 
        <Badge color={"#ff0000"} text="Email accounts" /><br /> 
        <Badge color={"#ff0000"} text="20 Hosted Domains" /><br /> 
        <Badge color={"#ff0000"} text="Free web applications" /><br /> 
        <Badge color={"#ff0000"} text="And more" /><br /> 
        <h3  style={{color:'#ff0000', paddingBottom:'10px',paddingTop:'10px'}}><strong>UGX 2,000,000/-</strong></h3>                                               
        <button  onClick={()=>{setPackagePlan('Web Hosting Advanced package');handleFlip()}} className='buy'>Proceed </button>
            </Descriptions.Item>
        </Descriptions>
    }

    return (
       <Template {...content} {...props} />
    )
}

export default Hosting
