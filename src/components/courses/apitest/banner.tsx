import React, { Component } from 'react';
import {Layout, Typography,Row,Col} from 'antd';
import banner from '../../../files/apibanner.jpg';
const {Content} = Layout;
const {Paragraph,Text,Title} = Typography;

export default class BannerComponent extends Component {
    render() {
        return (
            <Content style={{height:400,background:'#fff',marginTop:1,paddingTop:20,backgroundImage:'url(../../../files/apibanner.jpg)'}}>
                <Paragraph>
                    <Title style={{textAlign:'center'}} level={2}>Python接口自动化课程</Title>
                    <Row gutter={12} type='flex' align='middle' justify='center'>
                        <Col span={4}> <Text>学以致用<br/>接轨企业用人需求</Text></Col>
                        <Col span={4}><Text>实战案例<br/>均来自企业真是项目</Text></Col>
                        <Col span={4}><Text>线上学习<br/>可以无限多次学习</Text></Col>
                        <Col span={4}> <Text>时间灵活<br/>直播+录屏，灵活安排时间学习</Text></Col>
                    </Row>  
                </Paragraph>
            </Content>
        )
    }
}
