import React from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow } from "google-maps-react"
import { Row, Col,Typography,Carousel,Card } from 'antd';
import variable from "../components/textvariable"

const { ForGuidanceStoreArray } = variable
const { Title } = Typography;
const { Meta } = Card;



class GuidanceStore extends React.Component{

    constructor(props){
        super(props)
        this.state={
          eventlist:[],
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
          infosindow:"",
          redirect:false
        }
      }


    onmarkerclick=(props,marker, e)=>{
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            infosindow:marker.name,
            redirect:true
        });
        //버튼을 눌렀을 경우 axios로 this.state.activeMarker.title를 서버로 보내고
        // 그에 해당하는 값을 클라이언트에 보내 페이지를 구성하면 된다 
      }

      onmapclick=(props)=>{
          if(this.state.showingInfoWindow){
              this.setState({
                  showingInfoWindow:false,
                  activeMarker:null
              })
          }
      }

      buttonredirect=(e)=>{
        this.setState({
          redirect:false
        })
        console.log(this.state.redirect)
      }


    render(){
        const mapStyles = {
            width: "100%",
            height: "100%",
        };
        
        const DisplayArray = ForGuidanceStoreArray.map((result,key)=>{
            const Info = <div>
                매장이름 :   {result.store} <br />   주소 :   {result.localaddress}
            </div>;
            const InfoChild = 
            <div style={{color:"#000000"}}>
                <div>
                    매장이름 :   {result.store}
                </div>
                <div>
                    주소 :   {result.localaddress}
                </div>
                <div>
                    매출 :   {result.sales}
                </div>
                <div>
                    지점장 :  {result.지점장}
                </div>
            </div>
            return(
                <Col span={6}>
                    <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={<img alt= "매장이름"  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title={Info} description={InfoChild} />
                    </Card>
                </Col>
            )
        })
        
        const LocalMarkers = ForGuidanceStoreArray.map((result,i)=>{
            const Info = <div>
                매장이름 :   {result.store} <br />   주소 :   {result.localaddress}
            </div>
            return(
                <Marker key={i++}
                    name={Info }
                    title= "1987LOOPTOP"
                    position={{ lat:result.maplat, lng:result.maplng }}
                    onClick={this.onmarkerclick}
                />
            )
        })



    return(
        <div style={{backgroundColor:"#000000"}} >
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
                <Col span={24} style={{height:"800px", marginBottom:"50px"}}>
                    <Map
                        google = {this.props.google}
                        zoom={8} //14
                        style={mapStyles}
                        initialCenter={{ lat:37.52643587, lng:126.87600409 }}
                        onClick={this.onmapclick}
                    >
                        {LocalMarkers}
                            <InfoWindow 
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                                content="<div>"
                            >
                                <div id="iwc" style={{color:"#000000"}}>
                                {this.state.infosindow}
                                </div>
                            </InfoWindow>
                    </Map>
                  </Col>
               <Col>
               </Col>
            </Row>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} style={{padding:"100px"}} >
            {DisplayArray}
            </Row>
        </div>
    )
    }
}



export default GoogleApiWrapper({
    apiKey: "AIzaSyCgl0XB4EdBHtmyB4P7Pu4HbnM3gndzyiY"
})(GuidanceStore);