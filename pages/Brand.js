import React from 'react';
import Link from 'next/link';
import { Row, Col, Divider,Typography,Carousel,Timeline } from 'antd';

const { Title } = Typography;

const IndexPage = ({props}) => {
    return (
        <div style={{margin:" 70px 150px"}}>
            <div style={{color:"#f0f0f0",margin:"100px"}}>
                <fieldset style={{border:"1px solid #ffffff",borderColor: "#f0f0f0 #000000 #000000 #000000",lineHeight: "28px",textIndent:"9px",fontWeight:"bold",width:"100%"}}>
                    <legend style={{textAlign:"center",display:"block",width:"30%",fontSize:"20px"}}>1987 consulting <br />Brand</legend>
                </fieldset>
            </div>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 150 }]} style={{margin:"50px 0",textAlign:"center"}} >
            <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {24}>
                        <img alt="fortest" src={require('../public/rooptop.jpg')} style={{width:"50%", height:"auto"}}/>
                        <div style={{color:"#f0f0f0",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>1987ROOPTOP&LOUNGE</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {24}>
                        <img alt="fortest" src={require('../public/greate.jpg')} style={{width:"50%", height:"auto"}}/>
                        <div style={{color:"#f0f0f0",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>GREATE GATSBY</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {24} style={{margin:"0px"}}>
                        <img alt="fortest" src={require('../public/birerekiki.jpg')} style={{width:"50%", height:"auto"}}/>
                        <div style={{color:"#f0f0f0",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>비래키키</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {24} style={{margin:"0px"}}>
                        <img alt="fortest" src={require('../public/allair.jpg')} style={{width:"50%", height:"auto"}}/>
                        <div style={{color:"#f0f0f0",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>ALLAIR</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {24}>
                        <img alt="fortest" src={require('../public/샤브.jpg')} style={{width:"50%", height:"auto"}}/>
                        <div style={{color:"#f0f0f0",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>샤브 쌈주머니</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {24}>
                        <img alt="fortest" src={require('../public/장날.jpg')} style={{width:"50%", height:"auto"}}/>
                        <div style={{color:"#f0f0f0",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>장날 1987</div>
                    </Col>
                    <Col className="gutter-row" xs = {24}  sm = {24}  md = {24}  lg = {24}>
                        <img alt="fortest" src={require('../public/고을순대.png')} style={{width:"50%", height:"auto"}}/>
                        <div style={{color:"#f0f0f0",textAlign:"center",marginTop:"30px",fontSize:"30px",fontWeight:"bold"}}>고을순대</div>
                    </Col>
                </Row>
                {/* <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{margin:"0",textAlign:"center"}} >
                    
                </Row> */}
        </div>
    )
  }
  
  export default IndexPage;