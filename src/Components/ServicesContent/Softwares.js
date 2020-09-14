import React from 'react'
import {Descriptions,Badge, Comment, Tooltip, Col, Row, Tag} from 'antd';
import Template from './Template';
import Text from 'antd/lib/typography/Text';
import Avatar from 'antd/lib/avatar/avatar';
import { FaUserSecret } from 'react-icons/fa';
import { CheckCircleOutlined } from '@ant-design/icons';


const Software = (props) => {

    const {flipped,setFliped,packagePlan,setPackagePlan,handleFlip} = props

    const content = {
        images:[],
        TheText:()=><>
         <h4 className="title">
         Custom software development services
                </h4>
                <p>
                Off the shelf software can be a good short term solution. 
                The problem? It <Text type='warning'>doesn’t scale</Text> with your business and your needs. 
                You need software that fits your processes and workflows to outcompete others.
                </p>
                <p>
                After following our proven agile-based software development process, 
                we will present your organization with an end product that perfectly 
                fits the needs of your company.
                </p>
                <p>
                So re-imagine your business into a software-first business with our design and development approach
                </p>
                <center style={{marginBottom:'20px'}}>
        <Tag icon={<CheckCircleOutlined />} color="#33aa33">
        Attract new customers
      </Tag>
      <Tag icon={<CheckCircleOutlined />} color="#33aa33">
      Better serve existing ones
      </Tag>
      <Tag icon={<CheckCircleOutlined />} color="#33aa33">
      Boost revenue
      </Tag>
        </center>
        </>,
        Right:()=>{

            const steps = [
                {
                    title:'Discovery',
                    details:'We collect your ideas & convert them to objectives',
                    tag:'Idea'
                },
                {
                    title:'Assessment',
                    details:'We study your business & idea practicalities.',
                    tag:'Study'
                },
                {
                    title:'Planning',
                    details:'We design: Architecture, modules, UIs, & database.',
                    tag:'Design'
                },
                {
                    title:'Implementation',
                    details:'We develop and complete your project deliverables.',
                    tag:'Development'
                },
                {
                    title:'Delivery',
                    details:'We deploy your new system',
                    tag:'Deploy'
                },
                {
                    title:'Support',
                    details:'We ensure smooth functionality & train stuff',
                    tag:'Maintain'
                },
            ]
        
        return <Descriptions
        title="Development Life Cycle"
        size={'small'}
        layout="vertical"
        >
        <Descriptions.Item>
        <Row>
        {steps.map((step,i)=><Col  span={12}><Comment
      author={<h5>{step.title}</h5>}
      avatar={
        <Avatar style={{ backgroundColor: "#ff0000", verticalAlign: 'middle' }} size="large" gap={4}>
        {i+1}
      </Avatar>
      }
      content={
      <p>{step.details}</p>
      }
      datetime={
        <Tooltip title={step.tag}>
          <span>{step.tag}</span>
        </Tooltip>
      }
    /></Col>)}
        </Row>
        <center><button onClick={()=>{setPackagePlan('Custom software development services');handleFlip()}}  className='buy'>Let's get started</button></center>
        </Descriptions.Item>
        </Descriptions>
        }
    }

    return (
       <Template {...content} {...props} />
    )
}

export default Software
