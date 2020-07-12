import React from 'react';
import { Row, Col, Divider,Typography,Carousel } from 'antd';
const { Title } = Typography;

const MenuPageArray = [
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"오지치즈 후라이",
        bill: "6.900"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"오지치즈 후라이",
        bill: "6.900"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"오지치즈 후라이",
        bill: "6.900"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"오지치즈 후라이",
        bill: "6.900"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"오지치즈 후라이",
        bill: "6.900"
    },
    {
        picture:<img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"200px"}}/>,
        name:"오지치즈 후라이",
        bill: "6.900"
    },
]

const MenuPage =()=>{


    const DisplqyMenuPageArray = MenuPageArray.map((result,key)=>{
        return(
            <Col span={6}>
              <Row>{result.picture}</Row>
              <Row>{result.name}</Row>
              <Row>{result.bill}</Row>
            </Col>
        )
    })


    return(
        <div>
            <img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"300px"}}/>
            <div>
                <Row style={{padding:"40px 100px 20px 100px"}}>
                    <Col span={24}>
                        <img src="/home/gksdudxkr/제로초/homepage/pages/logo.jpg" style={{width:"100%", height:"400px"}}/>
                    </Col>
                </Row>
                <Row style={{padding:"40px 100px 20px 100px"}}>
                    <Col>
                        <Divider orientation="left" style={{ color: '#000000', fontWeight: 'normal', borderBlockColor: '#000000' }}>
                            <Title level={2}>Food Menu</Title>
                        </Divider>
                    </Col>
                </Row>
                <Row 
                  style={{padding:"40px 100px 20px 100px"}}
                  gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]}
                >
                    {DisplqyMenuPageArray}
                </Row>
            </div>
        </div>
    )
}







export default MenuPage;