import React from 'react';
import Link from 'next/link';
import { Row, Col, Divider,Typography,Carousel,Timeline } from 'antd';
import {ClockCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const IndexPage = ({props}) => {
    return (
        <div style={{margin:"100px 200px 0 200px"}}>
            <Row>
                <div style={{lineHeight:"50px",color:"#f0f0f0"}}>
                    <span style={{fontSize:"50px"}}>1987</span> <span style={{fontSize:"30px"}}>company</span>
                </div>
            </Row>
            <hr />
            <Row>
                <Col xs = {24}  sm = {24}  md = {24}  lg = {10} >
                    <div style={{margin:"150px 80px"}}>
                        <img alt="fortest" src={require('../public/sugiimg.jpg')} style={{width:"100%", height:"400px"}}/>
                        <div style={{fontSize:"30px", textAlign:"center",margin:"30px 0 0 0",color:"#f0f0f0"}}>
                            1987 company ceo
                        </div>
                        <div style={{fontSize:"20px", textAlign:"center",fontWeight:"bold",color:"#f0f0f0"}}>김수기</div>
                    </div>
                </Col>
                <Col xs = {24}  sm = {24}  md = {24}  lg = {14}>
                    <div style={{color:"#000000",margin:"40px 0"}}>
                        <Timeline mode="left" style={{lineHeight:"100px"}}>
                        <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />}  >
                            <div style={{fontSize:"40px",color:"#f0f0f0"}}>
                            김수기
                            </div>
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} className="timelineitem"  >
                            서울한양대학교 졸업
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2014" className="timelineitem"  >
                                샤브쌈주머니 창업
                                <br />
                                (현 약60개지점)
                            </Timeline.Item>
                            <Timeline.Item 
                                dot={<ClockCircleOutlined className="Timelinefontstyle" />} 
                                label="2016"
                                className="timelineitem"
                            >
                                1987루프탑라운지 창업
                                <br />
                                (현 7개지점)
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2017" className="timelineitem" >
                                약 18개 컨설팅
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2018" className="timelineitem" >
                                비래키키 창업
                                <br />
                                DMF 대전뮤직페스티벌 주최
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2019"className="timelineitem"  >
                                GREATE GATSBY 창업
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2019" className="timelineitem" >
                                관광진흥협회 청년대표
                                <br />
                                키락키락 키즈페스티벌 주최
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2018~2020" className="timelineitem" >
                                약 29개 컨설팅
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2020" className="timelineitem" >
                                장날 1987 창업
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2020" className="timelineitem" >
                                사업왕 김후기 유튜브
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} >
                                <div style={{fontSize:"20px",color:"red",fontSize:"30px"}}>
                                    약 150건의 컨설팅 진행
                                </div>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </Col>
            </Row>
        </div>
    )
  }
  
  export default IndexPage;