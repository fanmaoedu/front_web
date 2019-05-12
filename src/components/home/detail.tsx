import React, { Component } from 'react'
import { Layout, Typography, Card, Icon, Row, Col, List } from 'antd';

import basic_test from '../../files/test_basic.jpg';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

export default class DetailComponent extends Component {
    render() {
        const gridStyle: any = {
            width: '20%',
            textAlign: 'center',
        };
        const data = [
            {
                title: '联系电话',
                content: '13400001111'
            },
            {
                title: '微信',
                content: '13400001111'
            },
            {
                title: 'QQ',
                content: '13400001111'
            },
            {
                title: '地址',
                content: '13400001111'
            },
        ];
        const ContentStyle: any = { padding: '0 50px' }
        const ItemStyle: any = { background: '#fff', padding: 24, minHeight: 280 }
        return (
            <React.Fragment>
                <Content style={ContentStyle}>
                    <div style={ItemStyle}>
                        <Title style={{ textAlign: 'center' }}>课程优势</Title>
                        <Card>
                            <Card.Grid style={gridStyle}>
                                <Icon type="highlight" style={{ fontSize: 48 }} />
                                <div>小班授课</div>
                                <div>一一辅导</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Icon type="highlight" style={{ fontSize: 48 }} />
                                <div>线上线下结合</div>
                                <div>24小时答疑</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Icon type="highlight" style={{ fontSize: 48 }} />
                                <div>项目实战</div>
                                <div>系统学习</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Icon type="highlight" style={{ fontSize: 48 }} />
                                <div>简历优化</div>
                                <div>就业辅导</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Icon type="highlight" style={{ fontSize: 48 }} />
                                <div>企业内推</div>
                                <div>职场圈构建</div>
                            </Card.Grid>
                        </Card>
                    </div>
                </Content>
                <Content style={ContentStyle}>
                    <div style={ItemStyle}>
                        <Title style={{ textAlign: 'center' }}>课程列表</Title>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Link to="softtest">
                                    <Card
                                        hoverable
                                        cover={<img src={basic_test} alt="测试基础" />}
                                    >
                                        <Meta
                                            title="测试基础线下班"
                                        ></Meta>
                                        <span>¥5880 </span> <a href="#">查看详情</a>
                                    </Card>
                                </Link>
                            </Col>
                            
                            <Col span={8}>
                            <Link to='autotest'>
                                <Card
                                    hoverable
                                    cover={<img src={basic_test} alt="自动化测试" />}
                                >
                                    <Meta
                                        title="自动化测试线下班"
                                    ></Meta>
                                    <span>¥5880 </span> <a href="#">查看详情</a>
                                </Card>
                                </Link>
                            </Col>
                            <Col span={8}>
                                <Link to="product">
                                
                                <Card
                                    hoverable
                                    cover={<img src={basic_test} alt="产品经理" />}
                                >
                                    <Meta
                                        title="产品经理线下班"
                                    ></Meta>
                                    <span>¥5880 </span> <a href="#">查看详情</a>
                                </Card>
                                </Link>
                            </Col>

                            <Col span={8}>
                            <Link to="performance">
                                <Card
                                    hoverable
                                    cover={<img src={basic_test} alt="性能测试" />}
                                >
                                    <Meta
                                        title="性能测试线下班"
                                    ></Meta>
                                    <span>¥5880 </span> <a href="#">查看详情</a>
                                </Card>
                                </Link>
                            </Col>
                            <Col span={8}>
                                <Link to="bigdata">
                                <Card
                                    hoverable
                                    cover={<img src={basic_test} alt="数据分析" />}
                                >
                                    <Meta
                                        title="数据分析线下班"
                                    ></Meta>
                                    <span>¥5880 </span> <a href="#">查看详情</a>
                                </Card>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Content>
                <Content style={ContentStyle}>

                    <div style={ItemStyle}>
                        <Title style={{ textAlign: 'center' }}>关于我们</Title>
                    </div>
                </Content>
                <Content style={ContentStyle}>

                    <div style={ItemStyle}>
                        <Title style={{ textAlign: 'center' }}>联系我们</Title>
                        <List
                            grid={{ gutter: 16, column: 4 }}
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <Card style={{ textAlign: 'center' }}>
                                        <Icon type="phone" style={{ fontSize: 48 }} />
                                        <p>{item.title}</p>
                                        <p>{item.content}</p>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </div>
                </Content>
            </React.Fragment>
        )
    }
}
