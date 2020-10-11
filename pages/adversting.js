import React from 'react';
import Link from 'next/link';
import { Row, Col, Divider,Typography,Carousel,Timeline } from 'antd';
import {PhoneOutlined,MessageOutlined,HomeOutlined } from '@ant-design/icons';



const { Title } = Typography;

const IndexPage = ({props}) => {
    return (
        <div style={{margin:"50px 150px"}}>
            <Row>
                <Col xs = {24}  sm = {24}  md = {24}  lg = {12}>
                    <img alt="fortest" src={require('../public/main33.jpg')} style={{width:"100%", height:"400px",borderRadius:"10px"}}/>
                </Col>
                <Col xs = {24}  sm = {24}  md = {24}  lg = {12}>
                    <div style={{textAlign:"left", fontSize:"20px",margin:"0 0 0 200px",lineHeight:"80px",color:"#f0f0f0"}}>
                        <p style={{fontSize:"1.4em",fontWeight:"bold",color:"#f0f0f0"}}>
                            1987 consulting 문의하는 곳
                            <hr />
                        </p>
                        <p>
                        <HomeOutlined style={{fontSize:"2em",margin:"0 15px"}} /> <span style={{fontWeight:"600"}}>본사 위치: </span> 대전광역시 유성구 장대동 341-4 6층
                        </p>
                        <p>
                        <PhoneOutlined style={{fontSize:"2em",margin:"0 15px"}} /> <span style={{fontWeight:"600"}}>TEL : </span>042-622-9180
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
  }
  
  export default IndexPage;