import React, { useState } from 'react';
import { Row, Col, Divider,Typography,Carousel,Drawer, Button, Radio, Space } from 'antd';
const { Title } = Typography;
import variable from "../components/textvariable"

const TestPage =()=>{

    const [placement, setPlacement] = useState('top')



    const onChangevalue =(e)=>{
        setPlacement(e.target.value)
    }


    const DisplayTop = variable.TopArray.map((result,key)=>{
        return(
            <Col span={6}>
              <Row>{result.picture}</Row>
              <div>
                <Row><Title level={3} style={{color: '#ffffff'}} >{result.name}</Title></Row>
                <Row><Title level={3} style={{color: '#ffffff'}} >{result.bill}</Title></Row>
              </div>
            </Col>
        )
    })

    const DisplayRight = variable.RightArray.map((result,key)=>{
        return(
            <Col span={6}>
              <Row>{result.picture}</Row>
              <div>
                <Row><Title level={3} style={{color: '#ffffff'}} >{result.name}</Title></Row>
                <Row><Title level={3} style={{color: '#ffffff'}} >{result.bill}</Title></Row>
              </div>
            </Col>
        )
    })

    const DisplayBottom = variable.BottomArray.map((result,key)=>{
        return(
            <Col span={6}>
              <Row>{result.picture}</Row>
              <div>
                <Row><Title level={3} style={{color: '#ffffff'}} >{result.name}</Title></Row>
                <Row><Title level={3} style={{color: '#ffffff'}} >{result.bill}</Title></Row>
              </div>
            </Col>
        )
    })

    const DisplayLeft = variable.LeftArray.map((result,key)=>{
        return(
            <Col span={6}>
              <Row>{result.picture}</Row>
              <div>
                <Row><Title level={3} style={{color: '#ffffff'}} >{result.name}</Title></Row>
                <Row><Title level={3} style={{color: '#ffffff'}} >{result.bill}</Title></Row>
              </div>
            </Col>
        )
    })


    return(
        <div style={{backgroundColor:"#000000"}}>
            <img alt="fortest" src={require('../public/양주/양주3.jpeg')} style={{width:"100%",height:"500px"}}/>
            <div>
                <Row >
                    
                </Row>
            
            
                <Row style={{padding:"40px 100px 20px 100px"}}>
                    <Col>
                        <Divider orientation="left" style={{fontWeight: 'normal', borderBlockColor: '#000000' }}>
                            <Title level={2} style={{color: '#ffffff'}}>1987 LOOPTOP Menu</Title>
                        </Divider>
                    </Col>
                    <Col span={8} offset={16}>
                        <Space>
                            <Radio.Group 
                            defaultValue={placement} onChange={onChangevalue} 
                            >
                                <Radio value="top" style={{color: '#ffffff'}}>양주</Radio>
                                <Radio value="right" style={{color: '#ffffff'}}>칵테일</Radio>
                                <Radio value="bottom" style={{color: '#ffffff'}}>안주</Radio>
                                <Radio value="left" style={{color: '#ffffff'}}>메뉴판</Radio>
                            </Radio.Group>
                        </Space>
                    </Col>
                </Row>
                <Row 
                  style={{padding:"40px 100px 20px 100px"}}
                  gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]}
                >
                    {placement === "top" ? DisplayTop : placement === "right" ? DisplayRight : placement === "bottom" ?  DisplayBottom : DisplayLeft }
                    {/* {DisplqyMenuPageArray} */}
                </Row>
            </div>
        </div>
    )
}


export default TestPage;