import React from "react"
import { Layout, Menu, Breadcrumb,Row, Col } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Link from 'next/link';

const backGround = {
    // backgroundImage: `url(${sky})`,
    // backgroundSize: 'cover',
    overflow: 'hidden',
    textAlign:"center",
    height:"700px",
    padding:"0"
}
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
// style={{}}
// opacity: "0"

const AppLayout =({children})=>{
    return(
        <Layout>
            <Menu  mode="horizontal"  style={{textAlign:"center", height:"80px",padding:"15px"}}>
                <Menu.Item key="1"><Link href="/"><a>home</a></Link></Menu.Item>
                <Menu.Item key="2"><Link href="/Brand"><a>브랜드</a></Link></Menu.Item>
                <Menu.Item key="3"><Link href="/GuidanceStore"><a>매장안내</a></Link></Menu.Item>
                <Menu.Item key="4"><Link href="/MenuPage"><a>메뉴</a></Link></Menu.Item>
                <SubMenu key="sub2"
                //  icon={<LaptopOutlined />} 
                 title="창업"
                >
                    <Menu.Item key="5"><Link href="/CreateStoreCompetetion"><a>경쟁력</a></Link></Menu.Item>
                    <Menu.Item key="6"><Link href="/FranchiseeProcess"><a>가맹절차</a></Link></Menu.Item>
                    <Menu.Item key="7"><Link href="/ForOpenEquipment"><a>개설비용 및 절차</a></Link></Menu.Item>
                    <Menu.Item key="8">수익성</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">뉴스</Menu.Item>
            </Menu>

            
            
            {/* <Header className="header" style={backGround} >
            <img alt="fortest" src={require('../public/sky.jpg')} style={{width:"100%",height:"700px",opacity:"0.5" }}/>
            <video autoPlay loop muted width="100%" height="100%" >
                    <source src={require("../public/forchange.mp4")} type="video/mp4" />
                </video>
                <div>
            <Link href="/"><a><div className="logo" />
                <img alt="fortest" src={require('../public/back3.png')} style={{width:"500px", height:"200px", position:"absolute", right:"100px", top:"100px",opacity:"1"}}/>
                </a>
            </Link>
            </div>
            </Header> */}

            <Content>
            <Layout 
                className="site-layout-background" 
            >
        <Content style={{ 
            minHeight: 280,
            backgroundColor:"#ffffff",
             }}>{children}</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center', backgroundColor:"#000000", color:"#ffffff" }}>
        여기는 Footer부분입니다. 여기서 맨 밑에 까지 끌어야한다
        <div>
            <br />
        </div>
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{paddingLeft:"150px", paddingRight:"150px"}}>
            <Col className="gutter-row" xs = {24}  sm = {24}  md = {13}  lg = {13} >
                <Row>
                    <Col>
                    <Row>
                        dfsdlfnlksnfknfv
                    </Row>
                        <div>회사명: ovierhfvkjdnfk</div>
                        <Row>
                        dfsdlfnlksnfknfv
                    </Row>
                    <Row>
                        dfsdlfnlksnfknfv
                    </Row>
                    </Col>
                    <Col>
                        <div>회사명: ovierhfvkjdnfk</div>
                    </Col>
                    <Col>
                        <div>회사명: ovierhfvkjdnfk</div>
                    </Col>
                    <Col>
                        <div>회사명: ovierhfvkjdnfk</div>
                    </Col>
                </Row>
            </Col>
            <Col className="gutter-row" xs = {24}  sm = {24}  md = {5}  lg = {5} >
                <div>회사명: ovierhfvkjdnfk</div>
            </Col>
            <Col className="gutter-row" xs = {24}  sm = {24}  md = {6}  lg = {6} >
                <div>회사명: ovierhfvkjdnfk</div>
            </Col>
        </Row>
    </Footer>
  </Layout>
    )
}


export default AppLayout;





























