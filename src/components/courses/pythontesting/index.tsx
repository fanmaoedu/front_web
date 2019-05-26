import React, { Component } from 'react'

import { Timeline, Icon, Card, Tag, Typography, List, } from "antd";

const { Title, Text, Paragraph } = Typography
export default class PythonTestComponent extends Component {
    public data = [{ content: ['postman接口功能测试', 'Charles抓包工具使用', 'postman接口自动化', '....'] },
    { content: ['pytest单元测试', 'requests库的使用', '编写代码样例', '....'] },
    { content: ['content', 'content', 'content', 'content'] },
    { content: ['content', 'content', 'content', 'content'] }
    ]
    public course_list = [{}]
    render() {
        const gridStyle: any = {
            width: '20%',
            textAlign: 'left',
        };
        return (
            <React.Fragment >

                <div style={{ margin: 16, padding: 50, borderRadius: 15, boxShadow: '2px 2px 4px #cccccc', background: '#fff', width: 900, flex: 1, marginLeft: 'auto', marginRight: 'auto' }}>
                    <Paragraph style={{ textAlign: 'center' }}>
                        <Title level={2}>一线教师团队精心打磨</Title>
                        <Text>线上与线下结合，互相督促式学习，学习过程中拓展人脉</Text>
                    </Paragraph>
                    <List grid={{ gutter: 16, column: 4 }}
                        dataSource={this.data}
                        renderItem={item => (
                            <List.Item>
                                <Card hoverable bordered={true} >
                                    <Paragraph>
                                        <ul>
                                            {item.content.map((v) => (<li>{v}</li>))}
                                        </ul>
                                    </Paragraph>
                                </Card>
                            </List.Item>
                        )}
                    ></List>
                </div>
                <div style={{ margin: 16, padding: 50, background: '#fff' }}>
                    <Paragraph style={{ textAlign: "center", marginBottom: 40 }}>
                        <Title level={2}>近乎完美的课程学习保障体系</Title>
                        <Text>坚持每天学习，挑战年薪20万～30万</Text>
                    </Paragraph>
                    <Timeline>
                        <Timeline.Item dot={<Icon style={{ fontSize: 18 }} type="clock-circle-o" />}>
                            <div style={{ paddingLeft: 14 }}>
                                <Title level={4}>阶段一:Python零基础入门 <Text style={{ fontSize: 14, paddingLeft: 10, fontWeight: 300 }}>4周入门</Text></Title>
                                <Card>
                                    <Card.Grid style={gridStyle}>
                                        <ul>
                                            <li>Python环境配置</li>
                                            <li>Python基本数据类型</li>
                                            <li>条件循环</li>
                                            <li>....</li>
                                        </ul>
                                    </Card.Grid>

                                    <Card.Grid style={gridStyle}>
                                        <ul>
                                            <li>函数定义与实现</li>
                                            <li>模块与包</li>
                                            <li>高阶函数</li>
                                            <li>....</li>
                                        </ul>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <ul>
                                            <li>面向对象</li>
                                            <li>类的高级用法</li>
                                            <li>异常与报错</li>
                                            <li>....</li>
                                        </ul>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <ul>
                                            <li>正则表达式</li>
                                            <li>多线程与多进程</li>
                                            <li>内存管理机制</li>
                                            <li>....</li>
                                        </ul>
                                    </Card.Grid>
                                    <Card.Grid style={gridStyle}>
                                        <Title level={3}><a href=''>更多</a></Title>
                                    </Card.Grid>
                                </Card>
                            </div>

                        </Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" />}>
                            <div style={{ paddingLeft: 14 }}>
                                <Title level={4}>阶段二:Python 接口自动化 <Text style={{ fontSize: 14, paddingLeft: 10, fontWeight: 300 }}>4周快速上手</Text></Title>

                                <List grid={{ gutter: 16, column: 4 }}
                                    dataSource={this.data}
                                    renderItem={item => (
                                        <List.Item>
                                            <Card hoverable bordered={true} >
                                                <Paragraph>
                                                    <ul>
                                                        {item.content.map((v) => (<li>{v}</li>))}
                                                    </ul>
                                                </Paragraph>
                                            </Card>
                                        </List.Item>
                                    )}
                                ></List>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" />}>
                            <Card>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                            </Card>
                        </Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" />}>
                            <Title level={2}>完成就业班学习</Title>
                            <Text>达到企业用人标准，简历辅导，将能胜任10k+的职位。</Text>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </React.Fragment>
        )
    }
}
