import React, { Component } from 'react'
import {Layout,Carousel} from 'antd'
import barner from '../../files/banner.png';

const {Content} = Layout;


export default class BannerComponent extends Component {
  render() {
    return (
        <Content>
            <Carousel >
            <div><img src={barner}></img></div>
            <div><img src={barner}></img></div>
            <div><img src={barner}></img></div>
            <div><img src={barner}></img></div>
            </Carousel>
      </Content>
    )
  }
}
