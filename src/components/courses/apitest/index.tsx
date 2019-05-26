import React, { Component } from 'react';
import { Layout, Typography, Card,Icon,List,Avatar,Collapse } from 'antd'
import DetailComponent from './detail';
import BannerComponent from './banner';


export default class APITestingComponent extends Component {
    
    render() {
        
        return (
           <Layout >
               <BannerComponent />
            <DetailComponent />
           </Layout>
        )
    }
}


