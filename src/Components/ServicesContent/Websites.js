import React from 'react'
import {Descriptions,Badge, Tag} from 'antd';
import Template from './Template';
import { CheckCircleOutlined } from '@ant-design/icons';


const Websites = (props) => {

    const {flipped,setFliped,packagePlan,setPackagePlan,handleFlip,selectedService} = props

    const content = {
        images:[],
        TheText:()=><>
         <h4 className="title">
                Professional Website Development 
                </h4>
                <p>
                Haclab company is Web design company in Kampala Uganda, 
                we are committed to providing our customers with excellent 
                service for all their design needs. 
                We understand that today’s society is more focused on using 
                the Internet more now than ever, which is why we believe in 
                and understand the importance of a quality website. 
                A good website could be the difference between a client 
                choosing your company over your competition, so we place a 
                great deal of importance on ensuring your website needs are 
                met to your satisfaction and in an innovative and engaging way. 
                </p>
                <center style={{marginBottom:'20px'}}>
        <Tag icon={<CheckCircleOutlined />} color="#33aa33">
        Modern
      </Tag>
      <Tag icon={<CheckCircleOutlined />} color="#33aa33">
      Responsive
      </Tag>
      <Tag icon={<CheckCircleOutlined />} color="#33aa33">
      Optimized
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
        <Badge color={"#0050ff"} text="Home page" /><br /> 
        <Badge color={"#0050ff"} text="About Page" /><br /> 
        <Badge color={"#0050ff"} text="Services page" /><br /> 
        <Badge color={"#0050ff"} text="Portfolio Page" /><br /> 
        <Badge color={"#0050ff"} text="Contact Page" /><br /> 
        <Badge color={"#0050ff"} text="Basic SEO" /><br /> 
        <Badge color={"#0050ff"} text="1 week support" /><br /> 
        <Badge color={"#0050ff"} text="Location map" /><br /> 
        <h3 style={{color:'#0050ff', paddingBottom:'10px',paddingTop:'10px'}}><strong>UGX 500,000/-</strong></h3>                                               
        <button onClick={()=>{setPackagePlan('Web Development Basic package');handleFlip()}} className='buy'>Proceed </button>
            </Descriptions.Item>
        <Descriptions.Item>
        <h2  style={{color:'#11aa11'}}>Pro</h2>
        <Badge color={"#11aa11"} text="All basic features" /><br /> 
            <Badge color={"#11aa11"} text="Unlimited Page" /><br /> 
            <Badge color={"#11aa11"} text="Google business" /><br /> 
            <Badge color={"#11aa11"} text="Google analytics" /><br /> 
            <Badge color={"#11aa11"} text="Live chat" /><br /> 
            <Badge color={"#11aa11"} text="1 month support" /><br /> 
            <Badge color={"#11aa11"} text="Advanced SEO." /><br /> 
        <Badge color={"#11aa11"} text="E.T.C." /><br /> 
        <h3  style={{color:'#11aa11', paddingBottom:'10px',paddingTop:'10px'}}><strong>UGX 1,000,000/-</strong></h3>                                               
        <button onClick={()=>{setPackagePlan('Web Development Pro package');handleFlip()}} className='buy'>Proceed </button>
        </Descriptions.Item>
        <Descriptions.Item>
        <h2  style={{color:'#ff0000'}}>Enterprise</h2>
        <Badge color={"#ff0000"} text="All Pro features" /><br /> 
        <Badge color={"#ff0000"} text="Automation" /><br /> 
        <Badge color={"#ff0000"} text="Marketing" /><br /> 
        <Badge color={"#ff0000"} text="Social media" /><br /> 
        <Badge color={"#ff0000"} text="Payments" /><br /> 
        <Badge color={"#ff0000"} text="Advanced support" /><br /> 
        <Badge color={"#ff0000"} text="Free Consultation" /><br /> 
        <Badge color={"#ff0000"} text="E.T.C" /><br /> 
        <h3  style={{color:'#ff0000', paddingBottom:'10px',paddingTop:'10px'}}><strong>UGX 2,000,000/-</strong></h3>                                               
        <button  onClick={()=>{setPackagePlan('Web Development Enterprise package');handleFlip()}} className='buy'>Proceed </button>
            </Descriptions.Item>
        </Descriptions>
    }

    return selectedService && <Template {...content} {...props} /> 
}

export default Websites
