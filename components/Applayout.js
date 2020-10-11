import React from "react"
import { Layout, Menu, Breadcrumb,Row, Col,Typography } from 'antd';
import Link from 'next/link';

const { Title } = Typography;

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const AppLayout =({children})=>{
    return(
        <div>
            <Layout style={{position:"relative"}}>

                <Menu mode="horizontal"  style={{textAlign:"center",position:"fixed",display:"block",width:"100%",zIndex:"2",lineHeight:"70px"}}>
                    {/* <Menu.Item key="1"><Link href="/"><a>HOME</a></Link></Menu.Item> */}
                    <Menu.Item key="2"><Link href="/introduce"><a>회사소개</a></Link></Menu.Item>
                    <Menu.Item key="3"><Link href="/ceointroduce"><a>대표소개</a></Link></Menu.Item>
                    <Menu.Item key="6"><Link href="/"><a><img alt="fortest" src={require('../public/changelogo.png')} style={{width:"100px",height:"70px",margin:"10px"}}/></a></Link></Menu.Item>
                    <Menu.Item key="4"><Link href="/Brand"><a>브랜드</a></Link></Menu.Item>
                    <Menu.Item key="5"><Link href="/adversting"><a>1987 광고&마케팅</a></Link></Menu.Item>
                </Menu>


                <Content>
                    <Layout>
                    <Content style={{ 
                            minHeight: 280,
                            margin:"70px 0 0 0",
                            padding:"0",
                            backgroundColor:"#000"
                            }}>{children}</Content>
                    </Layout>
                </Content>



                <Footer style={{ textAlign: 'center', backgroundColor:"#000000", color:"#ffffff",margin:0,borderTop:"1px solid #ffffff",padding:"0"}}>
                    {/* <div>
                        <br />
                    </div> */}
                    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{margin:"50px"}}>
                        <Col className="gutter-row" xs = {24}  sm = {24}  md = {13}  lg = {13} >
                            <Row>
                                <Col>
                                <Row>
                                    looptop 1987
                                </Row>
                                    <div>회사명: looptop 1987</div>
                                    <Row>
                                    looptop 1987
                                </Row>
                                <Row>
                                looptop 1987
                                </Row>
                                </Col>
                                <Col>
                                    <div>회사명: looptop 1987</div>
                                </Col>
                                <Col>
                                    <div>회사명: looptop 1987</div>
                                </Col>
                                <Col>
                                    <div>회사명: looptop 1987</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="gutter-row" xs = {24}  sm = {24}  md = {5}  lg = {5} >
                            <div>회사명: looptop 1987</div>
                        </Col>
                        <Col className="gutter-row" xs = {24}  sm = {24}  md = {6}  lg = {6} >
                            <div>회사명: looptop 1987</div>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </div>
    )
}


export default AppLayout;





























