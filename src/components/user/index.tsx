import React, { Component } from 'react'
import { Layout, Menu, Tabs, List, Avatar, Typography, Button,Divider,Row,Col,Form,Input,Icon,Upload } from 'antd'

import { Route,Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form';



const { Content, Sider } = Layout;
const { TabPane } = Tabs;
const { Title } = Typography;
export default class UserComponent extends Component {
    
    
    render() {
        return (
            <Layout style={{ minHeight: '80vh', marginTop: '5px', padding: '0 50px' }}>
                <Sider width={200} style={{ background: '#fff', float: 'left' }}>
                    <Menu mode="inline"
                        defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to='/user/order'>我的订单</Link> </Menu.Item>
                        <Menu.Item key="2"><Link to='/user/setting'>我的资料</Link> </Menu.Item>
                    </Menu>
                </Sider>
                <Route path='/user/order' component={OrderComponent} />
                <Route path='/user/setting' component={UserProfileComponent} />
            </Layout>

        )
    }
}
interface profileProps extends FormComponentProps{}
interface profileState {}

class ProfileSettingComponent extends Component<profileProps,profileState>{
    constructor(props:profileProps,state:profileState){
        super(props,state);
    }
    handleChange =()=>{

    }
    render(){
        const {getFieldDecorator} = this.props.form; 
        return(
            <Content style={{ background: '#fff', margin: '0 16px' }}>
                <Title style={{ padding: 10, marginBottom: 0, fontSize:24 }}> 我的资料</Title>
                <Divider />
                <Row  >
                    <Col span={7}>
                        <Form style={{padding:'10px 30px'}}>
                            <Form.Item label="账户">
                                {getFieldDecorator('name', { initialValue:"zhangsan" })(<Input disabled />)}
                            </Form.Item>
                            <Form.Item label="邮箱">
                                {getFieldDecorator('email', {
                                    rules: [
                                        { required: true, message: '请输入邮箱地址' },
                                        { type: 'email', message: '请输入有效的邮箱地址' }
                                    ],
                                    initialValue: "123123123@163.com"
                                })(
                                    <Input placeholder="请输入邮箱地址" />
                                )}
                            </Form.Item>
                            <Form.Item label="新密码">
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true, message: '请输入密码',
                                    }]
                                })(
                                    <Input type="password" placeholder="请输入密码" />
                                )}
                            </Form.Item>
                            <Form.Item
                                label="确认密码"
                            >
                                {getFieldDecorator('confirm', {
                                    rules: [{
                                        required: true, message: '请再次输入密码',
                                    }],
                                })(
                                    <Input type="password" placeholder="请再次输入密码"  />
                                )}
                            </Form.Item>
                            <Button type="primary" htmlType="submit"> 修改信息 </Button>
                        </Form>
                    </Col>
                    <Col span={7}>

                        <div style={{ textAlign: "center" }}>
                            <Avatar style={{ width: 144, height: 144, verticalAlign: 'middle' }} src="//szimg.mukewang.com/5aa781790001ba2c05400300-160-90.jpg" size="large">

                            </Avatar>
                            <div style={{ marginTop: 20 }}>
                                <Upload
                                    accept=".jpg,.jpeg,.png"
                                    showUploadList={true}
                                    // customRequest={this.customRequest}
                                    // headers={{ 'x-access-token': token }}
                                    // action={UserService.getUri({ dataObject: DataObjects.media, args: ['avatar'] })}
                                    action = {"/uapi/media/avatar/user/" }
                                    onChange={this.handleChange}
                                // onSuccess={this.uploadSucess}
                                >
                                    <Button>
                                        <Icon type="upload" />上传
                                    </Button>
                                </Upload>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        );
    }
}

const UserProfileComponent = Form.create({ name: 'editComponent' })(ProfileSettingComponent)

class OrderComponent extends Component {
    public listData = [
        {
            href: '/product',
            title: '产品经理就业班(第六期)',
            avatar: '//szimg.mukewang.com/5aa781790001ba2c05400300-160-90.jpg',
            description: '价格: ¥1309',
            content: '',
        },
        {
            href: '/autotest',
            title: '软件自动化测试(第六期)',
            avatar: '//szimg.mukewang.com/5aa781790001ba2c05400300-160-90.jpg',
            description: '价格: ¥1309',
            content: '',
        }
    ]
    renderOrders = () => {
        return (
            <List
                itemLayout="vertical"
                size="large"
                dataSource={this.listData}
                renderItem={(item, index) => (
                    <List.Item key={index}
                    extra={ <div style={{textAlign:'left'}}>
                    <div style={{display:'inline-block',marginLeft:40,verticalAlign:'middle',textAlign:'center'}}>
                        <span>订单日期：2019-03-04 12:00:14</span>
                    </div>
                    <div style={{display:'inline-block',marginLeft:40,verticalAlign:'middle',textAlign:'center'}}>
                        <span>未付款</span>
                    </div>
                    <div style={{display:'inline-block',marginLeft:40,verticalAlign:'middle',textAlign:'center'}}>
                       <Button type="primary" style={{marginBottom:18 ,width:100}}> 去付款</Button><br/>
                       <Button style={{width:100}}> 课程详情</Button>
                    </div>
                    
                </div> }
                    >
                        <List.Item.Meta
                            avatar={<img src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />

                    </List.Item>
                )}
            />

        )
    }
    render() {
        return (
            <Content style={{ background: '#fff', margin: '0 16px' }}>
                    <Title style={{ padding: 10, marginBottom: 0, fontSize:24 }}> 我的订单</Title>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="全部订单" key="1">
                            <Content style={{padding:"0px 25px"}}>
                                {this.renderOrders()}
                            </Content>
                            
                        </TabPane>
                        <TabPane tab="待支付(2)" key="2">
                            <Content style={{padding:"0px 25px"}}>
                                {this.renderOrders()}
                            </Content>
                        </TabPane>
                    </Tabs>
                </Content>
        );

    }
}