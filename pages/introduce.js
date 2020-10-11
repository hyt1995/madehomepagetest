import React from 'react';
import Link from 'next/link';
import { Row, Col, Divider,Typography,Carousel,Timeline } from 'antd';

const { Title } = Typography;

const IndexPage = ({props}) => {
    return (
        <div style={{margin:"100px 150px"}}>
            <div style={{fontSize:"40px",fontWeight:"700px",color:"#f0f0f0"}}>회사 소개</div>
            <hr style={{margin:"50px 0"}}/>
            <Row style={{margin:"20px 0 100px 0"}}>
                <Col xs = {24}  sm = {24}  md = {24}  lg = {8}>
                    <img alt="fortest" src={require('../public/Mainlogo1.png')} style={{width:"100%", height:"400px",margin:"60px 0"}}/>
                </Col>
                <Col xs = {24}  sm = {24}  md = {24}  lg = {16}>
                    <div style={{margin:"30px 100px 0 100px",fontSize:"40px", fontWeight:"bold",color:"#f0f0f0"}}>
                       1987 company 소개
                    </div>
                    <div style={{margin:"30px 100px",fontWeight:"700px",fontSize:"20px",color:"#f0f0f0"}}>
                        <p>
                        유방 조직에 칼슘 성분이 침착되어 유방촬영에서 소금 가루 같이 작고 하얀 점들이 보이는 것을 말합니다. 
                        <br />
                        종괴 덩어리를 형성하지 않은 작은 석회화는 보통 증상이 없고 만져지지 않기 때문에 검진에서 우연히 발견되는 경우가 많습니다.
                        <br />
                        대부분의 경우는 '양성 석회화’로 암과는 관련이 없어 걱정할 필요가 없습니다. 
                        </p>
                        <p>
                        양성 석회가 생기는 원인으로는 퇴화된 유방조직, 과거에 앓았던 유방염증, 
                        <br />
                        유방을 심하게 부딪힌 경우, 유선 분비물이 원활하게 배출되지 않아 찌꺼기가 쌓이는 등의 다양한 원인이 있습니다.
                        </p>
                        <p>
                        반면 ‘악성 석회화’는 유방암세포에서 생기는 석회로 암세포들이 자라는 과정에서 일부 세포가 죽어서 내부의 칼슘 성분이 침착 되어 생기게 됩니다. 
                        <br />
                        보통 0.5mm보다 작은 크기의 미세석회화로 나타나는데, 종괴와 동반되기도 하고 종괴 없이 흩어져 있는 미세석회화로만 나타나기도 합니다.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
  }
  
  export default IndexPage;