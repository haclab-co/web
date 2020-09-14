import React from 'react'
import {Descriptions,Badge, Comment, Tooltip, Col, Row, Alert, Tag} from 'antd';
import Template from './Template';
import Text from 'antd/lib/typography/Text';
import Avatar from 'antd/lib/avatar/avatar';
import { FaUserSecret } from 'react-icons/fa';
import {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
  } from '@ant-design/icons';

const Mobile = (props) => {

    const {flipped,setFliped,packagePlan,setPackagePlan,handleFlip} = props

    const content = {
        images:[],
        TheText:()=><>
         <h4 className="title">
         Mobile application development services
                </h4>
                <p>
                In a time where almost everything can be done from  a smartphone, 
                mobile apps have become one of the top needs in order for a 
                business to be successful, being present in your customer’s life constantly 
                showing up every time they unlock their phone leaves an impression on their minds
                </p>
                <p>
                Extend your reach with a sleek mobile application.
                Haclab validates, designs and develops custom mobile apps that boost brand presence, 
                revenue, and reputation.</p>

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
                    title:'Learn ',
                    details:'We begin by learning from you – your goals, expectations, and vision to inform the development.',
                    tag:'Idea'
                },
                {
                    title:'Validate',
                    details:'Once we understand the problem completely, we validate the viability of our plan before development. ',
                    tag:'Study'
                },
                {
                    title:'Design',
                    details:'We center our design practice on your customers, using prototypes to incorporate feedback.',
                    tag:'Design'
                },
                {
                    title:'Build',
                    details:'Building your app takes a team of experts versed in the technologies best suited for your goals.',
                    tag:'Development'
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
        
       
        <center><button onClick={()=>{setPackagePlan('Mobile application development services');handleFlip()}}  className='buy'>Let's get started</button></center>
        </Descriptions.Item>
        </Descriptions>
        }
    }

    return (
       <Template {...content} {...props} />
    )
}

export default Mobile
