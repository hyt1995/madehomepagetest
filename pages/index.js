import React from 'react';
import { Row, Col, Divider,Typography,Carousel,Timeline } from 'antd';

const { Title } = Typography;

const IndexPage = ({props}) => {
    return (
        <div style={{margin:"0 8%",margin:"100px 0"}}>
            <div>
                <div>
                    <Carousel autoplay effect="fade" >
                        <div>
                            <img alt="fortest" src={require('../public/main11.jpg')} className="Carousel"/>
                        </div>
                        <div>
                            <img alt="fortest" src={require('../public/main22.jpg')} className="Carousel"/>
                        </div>
                    </Carousel>
                    {/* <div style={{margin:"100px 0 50px 100px",position:"absolute",left:"15%",top:"10%"}}>
                            <p className="fontstty">
                            우리는, 사업가이기 이전에 
                            <br />
                            문화를 만드는 문화 예술인입니다.
                            </p>
                            <p style={{fontSize:"20px", fontWeight:"600",textAlign:"center",color:"#fff"}}>
                                1987 Company
                            </p>
                    </div> */}
                </div>
                {/* <Row>
                    <Col xs = {24}  sm = {24}  md = {24}  lg = {24}>
                        <div style={{margin:"100px 0 50px 100px"}}>
                            <p style={{fontSize:"400%", fontWeight:"700", color:"#000000"}}>
                            우리는, 사업가이기 이전에 문화를 만드는 문화 예술인입니다.
                            </p>
                            <p style={{fontSize:"20px", fontWeight:"600",textAlign:"center"}}>
                                1987 Company
                            </p>
                        </div>
                    </Col>
                </Row> */}
                {/* <Row style={{margin:"3%  0"}}>
                    <Col xs = {24}  sm = {24}  md = {24}  lg = {24}>
                        <img alt="fortest" src={require('../public/비즈니스.png')} style={{width:"100%", height:"500px",textAlign:"center"}}/>
                    </Col>
                </Row> */}
                {/* <Row>
                    <Col xs = {24}  sm = {24}  md = {24}  lg = {24}>
                        <div> */}
                            {/* <p style={{fontSize:"400%", fontWeight:"700", color:"#780650"}}> */}
                            {/* <p style={{fontSize:"400%", fontWeight:"700", color:"#ffffff"}}>
                                우리 브랜드의 시작,
                            </p> */}
                            {/* <p style={{fontSize:"200%", fontWeight:"700", color:"#000000"}}> */}
                            {/* <p style={{fontSize:"200%", fontWeight:"700", color:"#fff"}}>
                            1987 Company는 2015년 대전에 첫 발걸음을 내딛어, 약 150건의 컨설팅을 진행하였습니다.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {24}  sm = {24}  md = {24}  lg = {24}>
                        <img alt="fortest" src={require('../public/여러개.jpg')} style={{width:"100%", height:"400px"}}/>
                    </Col>
                </Row> */}
            </div>
        </div>
    )
  }
  
  export default IndexPage;