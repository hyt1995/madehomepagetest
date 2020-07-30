import React from 'react';
import Link from 'next/link';
import { Row, Col, Divider,Typography,Carousel,Timeline } from 'antd';
import img from "../public/13.jpg"
// import logo from "../components/the-caucasus-5302236_1920.jpg"
import {LoadingOutlined,CodepenCircleOutlined,BorderOutlined } from '@ant-design/icons';
import ForIndexMap from '../components/ForIndexMap';

const style = {height:"500px",color:"#ffffff" };

const { Title } = Typography;

const text = 
<div style={{padding:"30px 10px 50px 10px", width:"600px", height:"auto", position:"absolute"}} >
    <Title style={{fontSize:"150%",color:"#ffffff"}} >
    2011년 한국의 문화를 주도하는 서울 강남에 오픈한 저희 가게는

    얼마 지나지 않아 아시아를 대표하는 가게로 자리매김하였고 2020년 현재,

    세계적인 store 매거진 DJ Mag : Top 100 Clubs Chart에서
    세계 7위에 오르며 대한민국 store의 위상을 높였습니다. 

    이는 기존 한국 클럽 문화에서 탈피하여 단순 클럽이 아닌 복합문화공간으로서 
    여러 가지 문화콘텐츠를 고객들에게 제공하고 클럽의 본질인 음악과

    문화 형성에 기반을 두어 꾸준히 노력한 성과입니다.
    저희 가게는 다양한 경험과 실력을 바탕으로 대한민국의 클럽 문화를

    세계에  알리고 건전하고 올바른 클럽 문화 형성을 위하여 앞으로도

    계속 노력하며 발전해 나아갈 것입니다.

    감사합니다.


    Club Octagon official
    </Title>
</div>

const about = 
<div style={{width:"600px", height:"auto"}}>
    <Title level={1} style={{margin:"0 150px 0 0",color:"#ffffff"}} >
    ABOUT
    <br/>
    LOOPTOP 1987
    </Title>
</div>

const time = 
<div style={{textAlign:"center",width:"600px", height:"auto",padding:"60px",padding:"10% 0% 0% 30%"}}>
    <Title level={2} style={{color:"#ffffff"}}>
        오픈시간
    </Title>
    <Title level={4} style={{color:"#ffffff"}}>
        PM 6:00
    </Title>
    <Title level={4} style={{color:"#ffffff"}}>
        AM 4:00
    </Title>
    <Title level={3} style={{color:"#ffffff"}}>
        월 화 수 목 금 토 일
    </Title>
</div>

const brand = <div style={{textAlign:"center", padding: "100px 80px 50px 30px"}}>
    <Title level={4} style={{color:"#ffffff"}}>
    2층,3층에서도 억대매출!(오픈하는 곳마다 부동의 1위)
    동성로점,강남점 2층에서도 3억 매출 신화!!
    <div></div>
    검증된 프리미엄 브랜드
    </Title>
</div>

const IndexPage = ({props}) => {
    return (
        <div style={{backgroundColor:"#000000"}}>
            <Carousel autoplay effect="fade" style={{textAlign: "center",height: "500px",lineHeight: "200px",background: "#364d79",overflow: "hidden"}}>
                <div>
                    <img alt="fortest" src={require('../public/sky.jpg')} style={{width:"100%",height:"700px",opacity:"0.6" }}/>
                </div>
                <div>
                    <img alt="fortest" src={require('../public/12.jpg')} style={{width:"100%",height:"700px",opacity:"0.6" }}/>
                </div>
                <div>
                    <img alt="fortest" src={require('../public/14.jpg')} style={{width:"100%",height:"700px",opacity:"0.6" }}/>
                </div>
                <div>
                    <img alt="fortest" src={require('../public/3.jpg')} style={{width:"100%",height:"700px",opacity:"0.6" }}/>
                </div>
            </Carousel>
            {/* <div>
                <iframe width="100%" height="800" src="https://www.youtube.com/embed/jF2UdLgGxuw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> */}
            
                <Link href="/"><a><div className="logo" />
                    <img alt="fortest" src={require('../public/back3.png')} style={{width:"500px", height:"200px", position:"absolute", right:"300px", top:"100px"}}/>
                    </a>
                </Link>
            <div>
                <Divider orientation="left" style={{ borderColor: '#ffffff', fontWeight: 'normal' }}>
                </Divider>

                <Timeline mode="alternate" style={{
                      width:"1600px",
                      marginRight:"20%",
                      marginLeft:"10%",
                    marginTop:"10%"
                    }}>
                    <Timeline.Item dot={<BorderOutlined style={{fontSize:"20px", color: "red",backgroundColor:"#000000"}} />} label={about} style={{padding:"30px 0px 100px 0px"}} >
                    </Timeline.Item>
                    <Timeline.Item dot={<BorderOutlined style={{fontSize:"20px", color: "red",backgroundColor:"#000000"}} />} label={text}  >
                    <Carousel autoplay effect="fade" style={{width:"98%",height: "300px",lineHeight: "200px",overflow: "hidden",padding:"0% 0% 0% 10%"}}>
                        <div>
                            <img alt="fortest" src={require('../public/sky.jpg')} style={{width:"100%",height:"auto" }}/>
                        </div>
                        <div>
                            <img alt="fortest" src={require('../public/12.jpg')} style={{width:"100%",height:"auto" }}/>
                        </div>
                        <div>
                            <img alt="fortest" src={require('../public/14.jpg')} style={{width:"100%",height:"auto" }}/>
                        </div>
                        <div>
                            <img alt="fortest" src={require('../public/3.jpg')} style={{width:"100%",height:"auto" }}/>
                        </div>
                    </Carousel>
                    </Timeline.Item>
                    <Timeline.Item dot={<BorderOutlined style={{fontSize:"20px", color: "red",backgroundColor:"#000000"}} />} label={time} style={{padding:"0px"}} >
                        <img alt="fortest" src={require('../public/3.jpg')} style={{width:"600px",height:"auto",margin:"0px" }}/>
                    </Timeline.Item>
                    <Timeline.Item dot={<BorderOutlined style={{fontSize:"20px", color: "red",backgroundColor:"#000000"}} />} label={brand} style={{padding:"30px 0px 30px 0px"}} >
                        <img alt="fortest" src={require('../public/3.jpg')} style={{width:"90%",height:"400px", padding:"20px" }}/>
                    </Timeline.Item>
                </Timeline>
                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"30px 150px 30px 150px",margin:"0px"}} >
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8}>
                        <img alt="fortest" src={require('../public/2.jpg')} style={{width:"100%", height:"500px"}}/>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8}>
                        <img alt="fortest" src={img} style={{width:"100%", height:"500px"}}/>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8} style={{margin:"0px"}}>
                        <div style={style}>
                            <Title level={2} style={{color:"#ffffff"}} >
                                다양한 안주와 특별한 공간이 있는 LOOPTOP 으로 초대합니다.
                            </Title>
                            <div></div>
                            <br />
                            따라올수 없는 분위기, 클래식에 젊음을 입히다.<br />
                            세월의 흔적이 묻어나는 클래식한 공간.<br />
                            편안함과 트렌디함이 공존하는 여심저격 플레이스.
                            <div></div>
                            <br />
                            <Title level={2} style={{color:"#ffffff"}}>
                                경험있는 젊은 경영인들이 만들어낸 따라올수없는 트렌드.
                            </Title>
                            <div></div>
                            <br />
                            단순 음식과 주류를 파는공간이 아닌,<br />
                            분위기-음식-가격-서비스-음악 모든걸 충족시켜주는 공간으로서 감동을 선사해 드립니다.
                        </div>
                    </Col>
                </Row>
                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"30px 200px 30px 200px",margin:"0px"}}>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {12}>
                        <img alt="fortest" src={require('../public/6.jpg')} style={{width:"100%", height:"500px"}}/>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {12}>
                        <img alt="fortest" src={require('../public/7.jpg')} style={{width:"100%", height:"500px"}}/>
                    </Col>
                </Row>
            </div>
            <div style={{padding:"30px 200px 30px 200px"}}>
            <Carousel autoplay effect="fade" style={{textAlign: "center",height: "500px",lineHeight: "200px",background: "#364d79",overflow: "hidden"}}>
                <div>
                    <img alt="fortest" src={require('../public/11.jpg')} style={{width:"100%", height:"500px"}}/>
                </div>
                <div>
                    <img alt="fortest" src={require('../public/12.jpg')} style={{width:"100%", height:"500px"}}/>
                </div>
                <div>
                    <img alt="fortest" src={require('../public/14.jpg')} style={{width:"100%", height:"500px"}}/>
                </div>
                <div>
                    <img alt="fortest" src={require('../public/3.jpg')} style={{width:"100%", height:"500px"}}/>
                </div>
            </Carousel>
            </div> 
            <Divider orientation="left" style={{ fontWeight: 'normal',borderColor: '#ffffff',padding:"0px 200px 0px 200px",color:"#ffffff" }}>
            </Divider>
            <Row style={{padding:"30px 200px 30px 200px",margin:"0px"}}>
                <Col className="gutter-row" span={24} >
                    <img alt="fortest" src={require('../public/9.jpeg')} style={{width:"100%", height:"500px"}}/>
                </Col>
            </Row>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"30px 200px 30px 200px",margin:"0px"}}>
                <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {16}>
                    <img alt="fortest" src={require('../public/10.jpg')} style={{width:"100%", height:"500px"}}/>
                </Col>
                <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8}>
                    <ForIndexMap />
                </Col>
            </Row>
            <Divider orientation="left" style={{ fontWeight: 'normal',borderColor: '#ffffff' }}>
            </Divider>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"30px 200px 30px 200px",margin:"0px"}}>
                <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {16}>
                    <Title level={4} style={{color:"#ffffff"}}>
                    부천,부평 주류판매량 1위달성 (오픈하는 곳마다 부동의 1위) 검증된 프리미엄 브랜드, LOOPTOP.
                    <br />
                    따라올수 없는 분위기, 클래식에 젊음을 입히다.
                    <br />
                    단순 음식과 주류를 파는공간이 아닌 “분위기-음식-가격-서비스-음악” 모든걸 충족시켜주는 공간으로서 감동을 선사해 드립니다.
                    </Title>
                </Col>
                <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8} style={{color:"#ffffff"}}>
                    <Title level={2} style={{color:"#ffffff"}}>
                        Address
                    </Title>
                    <br />
                    경기도 단원시 단원구 광덕대로 137 밀레니엄빌딩 601호~604호
                    <br />
                    <div></div>
                    <Title level={2} style={{color:"#ffffff"}}>
                        Tel
                    </Title>
                    <br />
                    대표번호 1811-8248
                </Col>
            </Row>
            <Divider orientation="left" style={{borderColor: '#ffffff',margin:"0px" }}>
            </Divider>
        </div>
    )
  }
  
  export default IndexPage;