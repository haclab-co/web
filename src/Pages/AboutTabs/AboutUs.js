import React, { useEffect } from 'react'
import { FaPhone } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import { Col, Row, Space, Tag } from 'antd'
import TweenOne from 'rc-tween-one';
import { CheckCircleOutlined } from '@ant-design/icons'

const tl = gsap.timeline()
const AboutUs = () => {
    useEffect(() => {
        tl.from('.aboutUs .item', .6, {
            scale: 0,
            skewY: 20,
            stagger: {
                amount: .2
            }
        }).from('.left .btn-row', .6, {
            scale: 0
        }).to('.left .btn-row', .1, {
            scale: 2,
        }).to('.left .btn-row', .6, {
            scale: 1,
        })
        return () => {

        }
    }, [])
    return (
        <div className='aboutUs'>

        <TweenOne.TweenOneGroup
          enter={{
            y: 30,
            delay: 300,
            opacity: 0,
            type: 'from',
            ease: 'easeOutQuad',
          }}
          leave={null}
          component=""
        >
            <Row
              key="content"
              gutter={4}
            >
              <Col md={14} xs={24}>
              <span>
                <h3>About Haclab Company Limited.</h3>
                <p>
                Haclab. is a Kampala Uganda based Digital Solutions firm delivering high quality, cost effective, reliable result-oriented web, apps, 
                e-commerce and many other digital solutions on time for a local & global clientele.
                </p>
                <p>
                Professionalism, Skill and Expertise are the tools we use to make the web work for your business bringing in maximum return on your 
                investment in shortest possible time.
                </p>
                <p>As a trusted partner with wide-ranging service capabilities, we help number of people country to grow their business and maximize profit.。</p>
              <p>Our main areas of key business are Web Development in Uganda, .</p>
              </span>
                <Row>
                    <Col span={12}>
                    <Space direction='vertical'>
                <Tag icon={<CheckCircleOutlined />} color="#33aa33">Custom Website Designing, </Tag>
                <Tag icon={<CheckCircleOutlined />} color="#33aa33">Rich Application Development, </Tag>
                <Tag icon={<CheckCircleOutlined />} color="#33aa33">Software Application Development,</Tag> 
                <Tag icon={<CheckCircleOutlined />} color="#33aa33">PHP Development, Open Source Customization, </Tag>
                    </Space>
                    </Col>
                    <Col span={12}>
                    <Space direction='vertical'>
                <Tag icon={<CheckCircleOutlined />} color="#33aa33">Promotion and more</Tag>
                <Tag icon={<CheckCircleOutlined />} color="#33aa33">Website Optimization </Tag>
                <Tag icon={<CheckCircleOutlined />} color="#33aa33">E-Commerce Solutions, </Tag>
                <Tag icon={<CheckCircleOutlined />} color="#33aa33">Website/Software/Application Maintenance,</Tag> 
                    </Space>
                    </Col>
                </Row>

             
              </Col>
              <Col className={'content7-img'} xs={24} md={10}>
                <img src={'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png'} width="100%" alt="img" />
              </Col>
            </Row>
        </TweenOne.TweenOneGroup>
        </div>
    )
}

export default AboutUs
