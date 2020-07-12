import React from 'react';
import { Row, Col,Typography,Carousel } from 'antd';
const { Title } = Typography;
const style = { background: '#0092ff', padding: '8px 0' };

const array = ['안양','안양','안양','안양','안양','안양','안양','안양','안양','안양','안양','안양','안양','안양','안양','안양','안양']

const GuidanceStore=()=>{

    const DisplayArray = array.map((result,key)=>{
        return(
            <Col span={6}>
                <div style={style}>
                    <Title level={2}>
                        {result}
                    </Title>
                </div>
            </Col>
        )
    })

    return(
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
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"100px"}} >
               {DisplayArray}
            </Row>
        </div>
    )
}





export default GuidanceStore;