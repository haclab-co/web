import React, { useState, useEffect } from 'react'
import { Card, Carousel, Row, Col, Tabs, Layout, message, Descriptions, Button, Badge, Divider } from 'antd';
import { MdClose, MdAccessible, MdWeb, MdCode, MdPhoneAndroid, MdDeveloperMode, MdDesktopWindows, MdShoppingCart } from 'react-icons/md';
import { FaMobile, FaMobileAlt, FaCode, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GiShoppingCart, GiAbacus } from 'react-icons/gi';
import { TiCode } from 'react-icons/ti';
import { IoMdCart } from 'react-icons/io';
import { GoMail, GoArrowRight } from 'react-icons/go';
import Text from 'antd/lib/typography/Text';
import ContactForm from '../ContactForm';
const { TabPane } = Tabs;


const Template = (props) => {

const {images,TheText,Right,flipped,setFliped,packagePlan,setPackagePlan,handleFlip} = props

    flipped && alert('flip-card flip-card--flipped')

    const classVariant = flipped ? "flip-card flip-card--flipped" : "flip-card";
  
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#ff0000',
        margin:0
    };
    return (
        <Row>
        <Col span={12} style={{color:'white', padding:'15px'}}>
            <Carousel autoplay>
                <div>
                    <div style={contentStyle}>1</div>
                </div>
                <div>
                    <p style={contentStyle}>2</p>
                </div>
                <div>
                    <p style={contentStyle}>3</p>
                </div>
                <div>
                    <p style={contentStyle}>4</p>
                </div>
            </Carousel>
                <TheText />
            </Col>
            <Col span={12}>
            <div className={classVariant}>
            <div className="flip-card__front">
                <div className="sg-flex sg-flex--justify-content-center sg-flex--align-items-center sg-flex--full-width sg-flex--full-height">
                <Right />
                </div>
            </div>
            <div className="flip-card__back">
                <h2>Get In Touch With Us</h2>
                <p>
                    Do you have more questions? or your want to proceed. We are ready to serve you
                </p>
                <div className='form'>
               {flipped && <ContactForm {...props}/>}
                </div>
            </div>
            </div>
            </Col>
            
        </Row>
    )
}

export default Template
