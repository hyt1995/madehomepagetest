import React from 'react';

import { Row, Col, Divider,Typography,Timeline } from 'antd';
import {LoadingOutlined,ClockCircleOutlined,BorderOutlined } from '@ant-design/icons';
const { Title } = Typography;


const Brand =()=>{
    return(
        <div style={{backgroundColor:"#000000",margin:"0",padding:"0"}} >
            <div style={{backgroundColor:"#ffffff"}}>
                <div style={{margin:"0 150px",backgroundColor:"#ffffff"}}>
                    <Row>
                        <Col xs = {24}  sm = {24}  md = {24}  lg = {12}>
                            <img alt="fortest" src={require('../public/Maintoppage8.png')} style={{width:"100%", height:"auto"}}/>
                        </Col>
                        <Col xs = {24}  sm = {24}  md = {24}  lg = {12}>
                            <div style={{marginTop:"70px", fontSize:"30px",fontWeight:"bold",textAlign:"center",padding:"20px 0 0 50px",color:"#a09c9c",lineHeight:"80px"}}>
                            우리는 사업가이기 전에
                            <br /> 
                            문화를 만드는 
                            <br />
                            '문화예술인'입니다.
                            <p>
                            기존의 브랜드를 재조명하여, 새로운 프렌차이즈로 재탄생
                            <br />
                            (프렌차이즈화 1달만에 대전2개 매장 오픈)
                            </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* <div>
                <img alt="fortest" src={require('../public/logo.jpg')} style={{width:"100%", height:"200px"}}/>
            </div> */}
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"100px 100px 30px 100px", margin:"0px"}}>
                <Col xs = {24}  sm = {24}  md = {24}  lg = {12} >
                    <div style={{marginTop:"200px"}}>
                    <Title style={{color:"#f09f79",fontSize:"200%"}}>
                        경기(본점)에서 4년간 주류판매량 1위,
                        <br />
                        검증된 핫플레이스로 주요 메인상권에서 강세
                    </Title>
                    <Divider orientation="left" style={{ color: '#bdb8b8', fontWeight: 'normal' }}>
                        consulting
                    </Divider>
                    <Title level={3} style={{color:"#f09f79"}} >
                    2층,3층에서도 억대매출!(오픈하는 곳마다 부동의 1위)
                    <br />
                    동성로점,강남점 2층에서도 3억 매출 신화!!
                    <div></div>
                    검증된 프리미엄 브랜드
                    </Title>
                    <div style={{color:"#ffffff"}} >
                    따라올수 없는 분위기, 클래식에 젊음을 입히다.
                    <br />
                    세월의 흔적이 묻어나는 클래식한 공간
                    <br />
                    편안함과 트렌디함이 공존하는 여심저격 플레이스
                    <div>
                    </div>
                    경험있는 젊은 경영인들이 만들어낸 따라올수없는 트렌드
                    <div></div>
                    단순 음식과 주류를 파는공간이 아닌,
                    <br />
                    분위기-음식-가격-서비스-음악 모든걸 충족시켜주는 공간으로서 감동을 선사해 드립니다.
                    </div>
                    </div>
                </Col>
                <Col xs = {24}  sm = {24}  md = {24}  lg = {10}>
                    <img alt="fortest" src={require('../public/brand4.png')} style={{width:"120%", height:"120%"}} />
                </Col>
            </Row>
            <div style={{color:"#ffffff",margin:"0 150px"}}>
                <fieldset style={{border:"1px solid #ffffff",borderColor: "#ffffff #000000 #000000 #000000",lineHeight: "28px",textIndent:"9px",fontWeight:"bold",width:"100%"}}>
                    <legend style={{textAlign:"center",display:"block",width:"500px",fontSize:"20px"}}>1987 consulting <br />CEO</legend>
                </fieldset>
            </div>
                <Row>
                    <Col xs = {24}  sm = {24}  md = {24}  lg = {8} offset={4} >
                        <img alt="fortest" src={require('../public/sugidepeu.png')} style={{width:"80%", height:"500px",marginTop:"50px"}}/>
                    </Col>
                    <Col xs = {24}  sm = {24}  md = {24}  lg = {8}>
                        <Timeline mode="left" className="Timeline">
                        <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />}  >
                            김수기
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />}  >
                            서울한양대학교 졸업
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2014"  >
                                샤브쌈주머니 창업
                                <br />
                                (현 약60개지점)
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2016"  >
                                1987루프탑라운지 창업
                                <br />
                                (현 7개지점)
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2017"  >
                                약 18개 컨설팅
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2018"  >
                                비래키키 창업
                                <br />
                                DMF 대전뮤직페스티벌 주최
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2019"  >
                                GREATE GATSBY 창업
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2019"  >
                                관광진흥협회 청년대표
                                <br />
                                키락키락 키즈페스티벌 주최
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2018~2020"  >
                                약 29개 컨설팅
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2020"  >
                                장날 1987 창업
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="Timelinefontstyle" />} label="2020"  >
                                사업왕 김후기 유튜브
                            </Timeline.Item>
                        </Timeline>
                    </Col>
                </Row>
                <Row>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {18} offset={3}>
                        <div style={{color:"#ffffff",margin:"0 50px 50px 50px",fontSize:"20px",lineHeight:"30px"}}>
                        <Title level={2} style={{color:"#f09f79"}}>
                        브랜드 경영으로 가치있게
                        </Title>
                        <br />
                        지금시장에서는 수익성 저하, 극심한 경쟁, 장기적인 불황, 고객의 변덕 등의 이유로 브랜드 생존 기준선을 넘지 못하는 브랜드로 가득차 있습니다. 이러한 총체적인 해결점은 브랜드 경영을 통해  가치있는 브랜드를 소유하는 것에 있습니다.
                        <br />
                        가치있는 브랜드는 경쟁 기업에 비해 차별화된 가치가 있음을 보여주고 Brand Loyalty는 신규 사업 Extension을 용이하게 하고 더불어 강력한 브랜드는 신제품이 나올 때마다 즉각적인 신뢰감을 줍니다. 또한 Brand Power에 기반한 가격 프리미엄은 더 높은 이익을 약속하고 주주에게 더 큰 이익을 제공하며 최고의 인재를 모으고 직원의 긍지와 만족도를 제고시킵니다.
                        <br />
                        이디어그램 브랜드는 고객중심의 브랜드 전략을 통해 기업에게 더 많은 브랜드 가치와 이익을 창출해 드릴 것을 약속드립니다.
                        </div>
                    </Col>
                </Row>
                <div style={{color:"#ffffff",margin:"0 150px"}}>
                <fieldset style={{border:"1px solid #ffffff",borderColor: "#ffffff #000000 #000000 #000000",lineHeight: "28px",textIndent:"9px",fontWeight:"bold",width:"100%"}}>                </fieldset>
            </div>
                <Row>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {10} offset={7}>
                        <img alt="fortest" src={require('../public/step.png')} style={{width:"80%", height:"80%",marginTop:"50px"}}/>
                    </Col>
                </Row>
        </div>
    )
}



export default Brand;