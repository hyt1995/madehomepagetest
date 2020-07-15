import React, { useState } from 'react';
import { Row, Col,Typography,Steps, Divider } from 'antd';


const { Title } = Typography;
const { Step } = Steps;


const ForOpenEquipment=()=>{

    const [current, setCurrent] = useState(0)

    const onChange = current => {
        console.log('onChange:', current);
        setCurrent({current})
      };



    return(
        <div style={{backgroundColor:"#ffffff", padding:"80px"}}>
            <Steps current={current} onChange={onChange}>
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
            </Steps>

            <Divider />

            <Steps current={current} onChange={onChange} direction="vertical" style={{alignItems:"center"}}>
                <Step title="Step 1" description="탭 수직을 추가하여 눌렀을 경우 내용이 바뀌게 할 수 있다." />
                <Step title="Step 2" description="개설비용은 표로 행과열을 만들어서 해도 된다" />
                <Step title="Step 3" description="타임라인으로 가게발전 과정을 만들수도 있지만 개설과정이나 유튜브를 넣을 수도 있다." />
                <Step title="Step 4" description="설명으로 표를 만들어 행과 열에 색을 주어 만들수도 있다." />
                <Step title="Step 5" description="This is a description." />
                <Step title="Step 6" description="This is a description." />
                <Step title="Step 7" description="This is a description." />
                <Step title="Step 8" description="This is a description." />
                <Step title="Step 9" description="This is a description." />
                <Step title="Step 10" description="This is a description." />
                <Step title="Step 11" description="This is a description." />
                <Step title="Step 12" description="This is a description." />
                <Step title="Step 13" description="This is a description." />
                <Step title="Step 14" description="This is a description." />
                <Step title="Step 15" description="This is a description." />
            </Steps>
        </div>
    )
}





export default ForOpenEquipment;