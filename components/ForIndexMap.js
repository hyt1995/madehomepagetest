import React from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow } from "google-maps-react"
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, Route,Switch } from "react-router-dom"
import variable from "./textvariable"


class ForIndexMap extends React.Component {
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
      }

      onmapclick=(props)=>{
          if(this.state.showingInfoWindow){
              this.setState({
                  showingInfoWindow:false,
                  activeMarker:null
              })
          }
      }

    render(){
        const mapStyles = {
            width: "100%",
            height: "100%",
        };
        const eventmarkers = this.state.eventlist.map((item,i)=>{
            return(
                    <Marker key={i++}
                        name={"축제 이름: " + item.title+ "  전화번호: " + item.tel+ "  시작날짜: " + item.eventstartdate+ " 끝나는 날짜: " +item.eventenddate }
                        title={"축제 이름: " + item.title+ "  전화번호: " + item.tel+ "  시작날짜: " + item.eventstartdate+ " 끝나는 날짜: " +item.eventenddate } 
                        position={{ lat:item.mapy, lng:item.mapx }}
                        content={item}
                        onClick={this.onmarkerclick}
                    />
            )
        })
          return(
              <div style={{backgroundColor:"#ffffff", height:"100%"}}>
                  <Map
                    google = {this.props.google}
                    zoom={8} //14
                    style={mapStyles}
                    initialCenter={{ lat:37.60652774, lng:126.09281389 }}
                    onClick={this.onmapclick}
                  >
                      {/* {eventmarkers} */}
                      <Marker 
                        name={"Current location"}
                        title={"center maker"} 
                        position={{ lat:37.60652774, lng:126.09281389 }}
                        onClick={this.onmarkerclick}
                      />
                        <InfoWindow 
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            content="<div>"
                        >
                            <div id="iwc">
                            {this.state.infosindow}
                            </div>
                        </InfoWindow>
                  </Map>
              </div>
          )
        }
    }

export default GoogleApiWrapper({
    apiKey: "AIzaSyCgl0XB4EdBHtmyB4P7Pu4HbnM3gndzyiY"
})(ForIndexMap);

