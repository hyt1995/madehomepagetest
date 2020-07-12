import React from 'react';
import { Row, Col,Typography } from 'antd';
const { Title } = Typography;
const style = { background: '#0092ff', padding: '8px 0' };

const CompetetionArray = [
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"안산",
        width:"110평",
        floor:"3층",
        sales: "133,282,000" + " 원"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"안산",
        width:"110평",
        floor:"3층",
        sales: "133,282,000" + " 원"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"안산",
        width:"110평",
        floor:"3층",
        sales: "133,282,000" + " 원"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"안산",
        width:"110평",
        floor:"3층",
        sales: "133,282,000" + " 원"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"안산",
        width:"110평",
        floor:"3층",
        sales: "133,282,000" + " 원"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"안산",
        width:"110평",
        floor:"3층",
        sales: "133,282,000" + " 원"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"안산",
        width:"110평",
        floor:"3층",
        sales: "133,282,000" + " 원"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"안산",
        width:"110평",
        floor:"3층",
        sales: "133,282,000" + " 원"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"안산",
        width:"110평",
        floor:"3층",
        sales: "133,282,000" + " 원"
    },
]



const CreateStoreCompetetion=()=>{


    const DisplayCompetetionArray = CompetetionArray.map((result,key)=>{
        return(
            <Col span={6} style={{ textAlign: 'center' }} >
                <Row>{result.picture}</Row>
                <Row>{result.name}</Row>
                <Row>{result.width}</Row>
                <Row>{result.floor}</Row>
                <Row>{result.sales}</Row>
            </Col>
        )
    })



    return(
        <div>
            <Row>
                <Col span={16} offset={4} style={{ textAlign: 'center' }}>
                    <Title level={1}>Competitiveness</Title>
                    <br />
                    <Title level={2}>오픈하는 곳마다 주류판매량 부동의 1위!!</Title>
                    <br />
                    <Title level={3}>상권파괴 아이템</Title>
                    <br />
                    <Title level={3}>분위기, 음식, 가격, 모든걸 충족시켜주는 브랜드 입증</Title>
                    <br />
                    <Title level={2}>최고가 아니면 시작도 안하겠습니다.</Title>
                </Col>
            </Row>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"40px 100px 20px 100px"}}>
                {DisplayCompetetionArray}
            </Row>
        </div>
    )
}





export default CreateStoreCompetetion;