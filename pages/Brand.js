import React from 'react';

import { Row, Col, Divider,Typography } from 'antd';
const { Title } = Typography;
// import img from "../next.config"


const Brand =()=>{
    return(
        <div>
            <div>
                <img alt="fortest" src={require('../public/logo.jpg')} style={{width:"100%", height:"200px"}}/>
            </div>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"200px"}}>
                <Col xs = {24}  sm = {24}  md = {24}  lg = {14}>
                    <Title level={2}>
                        안산(본점)에서 4년간 주류판매량 1위,
                        <br />
                        검증된 핫플레이스로 주요 메인상권에서 강세
                    </Title>
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                        Horizontal
                    </Divider>
                    <Title level={3}>
                    2층,3층에서도 억대매출!(오픈하는 곳마다 부동의 1위)
                    <br />
                    동성로점,강남점 2층에서도 3억 매출 신화!!
                    <div></div>
                    검증된 프리미엄 브랜드
                    </Title>
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
                </Col>
                <Col xs = {24}  sm = {24}  md = {24}  lg = {8} >
                    <img alt="fortest" src={require('../public/logo.jpg')} style={{width:"600px", height:"600px"}} />
                </Col>
            </Row>
        </div>
    )
}



export default Brand;