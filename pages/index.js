import React from 'react';
import Link from 'next/link';
import { Row, Col, Divider,Typography,Carousel,Timeline } from 'antd';
import img from "../public/13.jpg"
// import logo from "../components/the-caucasus-5302236_1920.jpg"
import {LoadingOutlined,ClockCircleOutlined,BorderOutlined } from '@ant-design/icons';
import ForIndexMap from '../components/ForIndexMap';

const { Title } = Typography;


const ttt = <div className="Carouselimg">
    <p>2011년 한국의 문화를 주도하는 서울 강남에 오픈한 클럽 옥타곤은
<br />
얼마 지나지 않아 아시아를 대표하는 클럽으로 자리매김하였고 2020년 현재,
<br />
세계적인 클럽 매거진 DJ Mag : Top 100 Clubs Chart에서
세계 7위에 오르며 대한민국 클럽의 위상을 높였습니다. 
</p>
<br />
<p>
이는 기존 한국 클럽 문화에서 탈피하여 단순 클럽이 아닌 복합문화공간으로서 
여러 가지 문화콘텐츠를 고객들에게 제공하고 클럽의 본질인 음악과
<br />
문화 형성에 기반을 두어 꾸준히 노력한 성과입니다.
<br />
</p>
<p>
클럽 옥타곤은 다양한 경험과 실력을 바탕으로 대한민국의 클럽 문화를
<br />
세계에  알리고 건전하고 올바른 클럽 문화 형성을 위하여 앞으로도
<br />
계속 노력하며 발전해 나아갈 것입니다.
<br />
감사합니다.
<br />
</p>
​
<p>
Club Octagon official
</p>
</div>

const timelinetoptext = <div class="text1987">
    당신만의 문화,당신만의 브랜드
    <div>1987 consulting</div>
</div>

const question = <div className="question"><p>문의 시간</p>
    <p>9:00</p>
    <p>~</p>
    <p>18:00</p>
    <p>TEL: 042-000-0000</p>
</div>

const chandimg = <img alt="fortest" src={require('../public/chand.jpg')} style={{width:"70%",height:"400px"}}/>

const IndexPage = ({props}) => {
    return (
        <div className="dev">
            <div style={{position:"relative"}}>
                <Carousel autoplay effect="fade" >
                    <div>
                        <img alt="fortest" src={require('../public/Maintoppage3.jpg')} className="Carousel"/>
                    </div>
                    <div>
                        <img alt="fortest" src={require('../public/Maintoppage4.jpg')} className="Carousel"/>
                    </div>
                    <div>
                        <img alt="fortest" src={require('../public/Maintoppage6.jpg')} className="Carousel"/>
                    </div>
                    <div>
                        <img alt="fortest" src={require('../public/Maintoppage5.jpg')} className="Carousel"/>
                    </div>
                </Carousel>
                <img alt="fortest" src={require('../public/origin.png')} style={{width:"200px", height:"auto", position:"absolute", right:"200px", top:"40%",display:"block",zIndex:"1"}}/>
            </div>
            <div className="content">
                <Timeline mode="alternate" className="Timeline">
                    <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label={timelinetoptext} className="text1987label" >
                    </Timeline.Item>

                    <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label={ttt} className="text1987label2" >
                    <img alt="fortest" src={require('../public/Mainlogo1.png')}/>
                    </Timeline.Item>

                    <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label={question} style={{height:"500px",position:"relative"}}  >
                    <img alt="fortest" src={require('../public/bererekiki.jpg')} className="sugiimg"/>
                    </Timeline.Item>

                    <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label={chandimg}  >
                        <img alt="fortest" src={require('../public/greate.jpg')} style={{width:"70%",height:"400px",margin:"0px" }}/>
                    </Timeline.Item>

                    <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} style={{padding:"30px 0px 30px 0px"}} >
                    </Timeline.Item>
                </Timeline>
            </div>
            
            <div style={{color:"#ffffff",margin:"0 150px"}}>
                <fieldset style={{border:"1px solid #ffffff",borderColor: "#ffffff #000000 #000000 #000000",lineHeight: "28px",textIndent:"9px",fontWeight:"bold",width:"100%"}}>
                    <legend style={{textAlign:"center",display:"block",width:"500px",fontSize:"20px"}}>1987 consulting</legend>
                </fieldset>
            </div>
            
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{margin:"50px"}} >
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {6}>
                        <img alt="fortest" src={require('../public/rooptop.jpg')} style={{width:"100%", height:"400px"}}/>
                        <div style={{color:"#ffffff",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>1987ROOPTOP&LOUNGE</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {6}>
                        <img alt="fortest" src={require('../public/greate.jpg')} style={{width:"100%", height:"400px"}}/>
                        <div style={{color:"#ffffff",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>GREATE GATSBY</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {6} style={{margin:"0px"}}>
                        <img alt="fortest" src={require('../public/birerekiki.jpg')} style={{width:"100%", height:"400px"}}/>
                        <div style={{color:"#ffffff",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>비래키키</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {6} style={{margin:"0px"}}>
                        <img alt="fortest" src={require('../public/allair.jpg')} style={{width:"100%", height:"400px"}}/>
                        <div style={{color:"#ffffff",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>ALLAIR</div>
                    </Col>
                </Row>
                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{margin:"0",textAlign:"center"}} >
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8} offset={4}>
                        <img alt="fortest" src={require('../public/샤브.jpg')} style={{width:"80%", height:"400px"}}/>
                        <div style={{color:"#ffffff",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>샤브 쌈주머니</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8}>
                        <img alt="fortest" src={require('../public/장날.jpg')} style={{width:"80%", height:"400px"}}/>
                        <div style={{color:"#ffffff",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>장날 1987</div>
                    </Col>
                </Row>
                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{margin:"0",textAlign:"center"}} >
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8} offset={4}>
                        <img alt="fortest" src={require('../public/갈촌.jpg')} style={{width:"80%", height:"400px"}}/>
                        <div style={{color:"#ffffff",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>갈촌 126</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8}>
                        <div>
                            <Title level={3} style={{color:"#ffffff"}} >
                                1987의 젊은 경영진들은 빠르게 바뀌는 유행,
                                <br />
                                너무나도 많아진 경쟁속에서
                                <br />
                                독자적이고 지속적인 스타일을 만들었습니다.
                            </Title>
                            따라올수 없는 분위기, 클래식에 젊음을 입히다.<br />
                            세월의 흔적이 묻어나는 클래식한 공간.<br />
                            편안함과 트렌디함이 공존하는 여심저격 플레이스.
                            <br />
                            <Title level={2} style={{color:"#ffffff"}}>
                                경험있는 젊은 경영인들이 만들어낸 따라올수없는 트렌드.
                            </Title>
                            <br />
                            <Title level={3} style={{color:"#ffffff"}}>
                            단순 음식과 주류를 파는공간이 아닌,<br />
                            분위기-음식-가격-서비스-음악 모든걸 충족시켜주는 공간으로서 감동을 선사해 드립니다.
                            </Title>
                        </div>
                    </Col>
                </Row>
                <div style={{color:"#f09f79",margin:"0 150px"}}>
                    <fieldset style={{border:"1px solid #ffffff",borderColor: "#f09f79 #000000 #000000 #000000",lineHeight: "28px",textIndent:"9px",fontWeight:"bold",width:"100%"}}>
                        <legend style={{textAlign:"center",display:"block",width:"500px",fontSize:"20px"}}>
                            <div>1987 consulting</div>
                            <br />
                            <div>맛집 브랜딩 사례</div>
                            </legend>
                    </fieldset>
            </div>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{margin:"0",textAlign:"center"}} >
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8} offset={4}>
                        <img alt="fortest" src={require('../public/branding.png')} style={{width:"80%", height:"400px"}}/>
                        <div style={{color:"#ffffff",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>청정고을 순대</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8}>
                        <div style={{color:"#ffffff",fontSize:"20px",padding:"0 30px"}}>
                            <p>#소자본 창업</p>
                            <p>#HACCAP인증</p>
                            <p>#화학조미료 X</p>
                            <p>#건강한 순대국밥</p>
                            <p>원주유명맛집</p>
                            <p style={{fontSize:"30px", fontWeight:"bold"}}>기존의 브랜드를 재조명하여, 새로운 프렌차이즈로 재탄생</p>
                            <p style={{fontSize:"25px", fontWeight:"bold"}}>( 프렌차이즈화 1달만에 대전2개 매장 오픈 )</p>
                        </div>
                    </Col>
                </Row>
        </div>
    )
  }
  
  export default IndexPage;