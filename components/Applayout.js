import React from "react"
import { Layout, Menu, Breadcrumb,Row, Col } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';



const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const AppLayout =({children})=>{
    return(
        <Layout>
            <Header className="header">
            <div className="logo" style={{width: "100px",height: "50px",background:"#ff7875",float:"left",margin:"10px"}} />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{float:"right",marginRight:"100px"}}>
                <Menu.Item key="1">브랜드</Menu.Item>
                <Menu.Item key="2">매장안내</Menu.Item>
                <Menu.Item key="6">매뉴</Menu.Item>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="창업">
                    <Menu.Item key="5">경쟁력</Menu.Item>
                    <Menu.Item key="6">가맹절차</Menu.Item>
                    <Menu.Item key="7">개설배용</Menu.Item>
                    <Menu.Item key="8">수익성</Menu.Item>
                </SubMenu>
                <Menu.Item key="4">뉴스</Menu.Item>
            </Menu>
            </Header>
            <Content 
                // style={{ padding: '0 50px' }}
            >
            <Layout 
                className="site-layout-background" 
                style={{ padding: '24px 0' }}
            >
        <Content style={{ 
            // padding: '0 24px', 
            minHeight: 280 }}>{children}</Content>
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





























