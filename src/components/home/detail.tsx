import React, { Component } from 'react'
import { Layout, Typography, Card, Icon, Row, Col, List, Carousel } from 'antd';

import basic_test from '../../files/test_basic.png';
import auto_test from '../../files/auto_test.png';
import perform_test from '../../files/perform_test.jpg';
import bigdata from '../../files/bigdata.png';
import prd from '../../files/prd.png';
import about1 from '../../files/about1.jpg';
import about2 from '../../files/about2.jpg';
import about3 from '../../files/about3.jpg';
import { Link } from 'react-router-dom';
const {Paragraph,Text} = Typography;
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

export default class DetailComponent extends Component {
    render() {

        const IconFont = Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1190335_m22wl1s5jl.js',
        });

        const gridStyle: any = {
            width: '20%',
            textAlign: 'center',
        };
        const data = [
            {
                title: '联系电话',
                type:'phone',
                content: '13400001111'
            },
            {
                title: '微信',
                type:'wechat',
                content: '13400001111'
            },
            {
                title: 'QQ',
                type:'qq',
                content: '13400001111'
            },
            {
                title: '地址',
                type:'compass',
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
                                <IconFont type="icon-book" style={{ fontSize: 48, color: '#1296db', marginBottom: 20 }} />
                                <div>小班授课</div>
                                <div>一一辅导</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <IconFont type="icon-icon-" style={{ fontSize: 48, color: '#1296db', marginBottom: 20 }} />
                                <div>线上线下结合</div>
                                <div>24小时答疑</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <IconFont type="icon-project" style={{ fontSize: 48, color: '#1296db', marginBottom: 20 }} />
                                <div>项目实战</div>
                                <div>系统学习</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <IconFont type="icon-education" style={{ fontSize: 48, color: '#1296db', marginBottom: 20 }} />
                                <div>简历优化</div>
                                <div>就业辅导</div>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <IconFont type="icon-team" style={{ fontSize: 48, color: '#1296db', marginBottom: 20 }} />
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
                                        cover={<img src={auto_test} alt="自动化测试" />}
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
                                        cover={<img src={prd} alt="产品经理" />}
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
                                        cover={<img src={perform_test} alt="性能测试" />}
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
                                        cover={<img src={bigdata} alt="数据分析" />}
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
                        
                        <Paragraph style={{padding: '10px 50px'}}>
                            <Text>凡猫教育在互联网教育和咨询行业深耕4年，主要业务为互联网培训和企业互联网转型咨询和服务，旨在打造互联网的人才生态圈，我们深知
                                现在职场人士的迷茫，针对于学生不同性格和经历，针对学生设计不同的课程体系内容。以举办互联网行业分享沙龙200多场，培训学生
                                3000多人进去了国内大中型的互联网公司，实现了转行梦。我们的使命是让所有的转行这都能够轻松入行互联网行业，从事自己喜欢的事业同时获得客观的收入。
                            </Text>
                        </Paragraph>
                        <div style={{margin:'0 auto',maxWidth:600, height:400,background:'#ccc',textAlign:"center"}}>
                            <Carousel dotPosition="bottom" effect="fade" autoplay >
                                <div style={{background:"#ccc",maxWidth:600,height:400}}><img src={about1} style={{width:600,height:400}} /></div>
                                <div style={{background:"#ccc",maxWidth:600,height:400}}><img src={about2} style={{width:600,height:400}}/></div>
                                <div style={{background:"#ccc",maxWidth:600,height:400}}><img src={about3} style={{width:600,height:400}}/></div>
                            </Carousel>
                        </div>

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
                                        <Icon type={item.type} style={{ fontSize: 48, marginBottom:10, color:'#1296db' }} />
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
