import React from 'react';
import { Row, Col, Divider,Typography,Carousel } from 'antd';
// import logo from "../components/the-caucasus-5302236_1920.jpg"
const style = { background: '#0092ff', padding: '8px 0' };
const { Title } = Typography;

const IndexPage = () => {
    return (
        <div>
            <div>
                <iframe width="100%" height="800" src="https://www.youtube.com/embed/jF2UdLgGxuw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                    Horizontal
                </Divider>
                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"200px"}} >
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8}>
                        <div>사진</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8}>
                        <div style={style}>사진</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8}>
                        <div style={style}>
                            <Title level={2}>
                                다양한 안주와 특별한 공간이 있는 1943으로 초대합니다.
                            </Title>
                            <div></div>
                            <br />
                            따라올수 없는 분위기, 클래식에 젊음을 입히다.<br />
                            세월의 흔적이 묻어나는 클래식한 공간.<br />
                            편안함과 트렌디함이 공존하는 여심저격 플레이스.
                            <div></div>
                            <br />
                            <Title level={2}>
                                경험있는 젊은 경영인들이 만들어낸 따라올수없는 트렌드.
                            </Title>
                            <div></div>
                            <br />
                            단순 음식과 주류를 파는공간이 아닌,<br />
                            분위기-음식-가격-서비스-음악 모든걸 충족시켜주는 공간으로서 감동을 선사해 드립니다.
                        </div>
                    </Col>
                </Row>
                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"200px"}}>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {12}>
                        <div style={style}>사진6</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {12}>
                        <div style={style}>사진</div>
                    </Col>
                </Row>
            </div>
            <div>
            <Carousel autoplay effect="fade" style={{textAlign: "center",height: "350px",lineHeight: "200px",background: "#364d79",overflow: "hidden"}}>
                <div>
                <h3>1</h3>
                </div>
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
            </Carousel>
            </div>
            <Divider orientation="left" style={{ color: '#000000', fontWeight: 'normal', borderBlockColor: '#000000' }}>
                Menu
            </Divider>
            <Row style={{padding:"200px"}}>
                <Col className="gutter-row" >
                    <div style={{width:"100%"}}>개인진 큰거</div>
                </Col>
            </Row>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"200px"}}>
                <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {16}>
                    <div style={style}>지도옆에 사진</div>
                </Col>
                <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8}>
                    <div style={style}>지도부분이 나올 곳</div>
                </Col>
            </Row>
            <Divider orientation="left" style={{ color: '#000000', fontWeight: 'normal', borderBlockColor: '#000000' }}>
                Contact Us
            </Divider>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"200px"}}>
                <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {16}>
                    <Title level={2}>
                    부천,부평 주류판매량 1위달성 (오픈하는 곳마다 부동의 1위) 검증된 프리미엄 브랜드, 1943.
                    <br />
                    따라올수 없는 분위기, 클래식에 젊음을 입히다.
                    <br />
                    단순 음식과 주류를 파는공간이 아닌 “분위기-음식-가격-서비스-음악” 모든걸 충족시켜주는 공간으로서 감동을 선사해 드립니다.
                    </Title>
                </Col>
                <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {8}>
                    <Title level={2}>
                        Address
                    </Title>
                    <br />
                    경기도 안산시 단원구 광덕대로 137 밀레니엄빌딩 601호~604호
                    <br />
                    <div></div>
                    <Title level={2}>
                        Tel
                    </Title>
                    <br />
                    대표번호 1811-8248
                </Col>
            </Row>
        </div>
    )
  }
  
  export default IndexPage;