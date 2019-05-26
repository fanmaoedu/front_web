import React, { Component } from 'react'
import { Layout, Typography, Card,Icon,List,Avatar,Collapse } from 'antd'


const { Title, Text,Paragraph } = Typography;
const { Content } = Layout;
const {Panel} = Collapse;
export default class DetailComponent extends Component {
    public gridStyle: any = {
        border:'none',
        width: '25%',
        textAlign: 'center',
        boxShadow:'none'
    };

    public titleStyle:any={
        color:'#00a084'
    }
    public data = [
        {
        icon:'icon-Greenthink',
          title: '学习思维培养',
          content:'大量代码练习，分享学习方法，能够举一反三'
        },
        {
            icon:'icon-ziyuan',
          title: '小组学习方式',
          content:'4-5人一个小组，小组学习，互帮互助'
        },
        {
        icon:'icon-school',
          title: '答疑服务',
          content:'专属学习群，讨论学习问题，根据学习情况每周一次周总结'
        },
        {
            icon:'icon-CASESTUDY',
          title: '作业评比',
          content:"每周都有作业，在作业中提高自己的能力水平"
        },
      ];
    render() {
        const MyIcon = Icon.createFromIconfontCN({scriptUrl:'//at.alicdn.com/t/font_1190335_jpg74rs0loe.js'});
        return (
            <Layout style={{ padding: '0 50px', marginTop: '5px' }}>
                <Content style={{ background: '#fff', margin: 25, borderRadius: 15, padding: 45 }}>
                    <div style={{ textAlign: "center" ,marginBottom:45}}>
                        <Title >主要内容</Title>
                        <Text>借助Postman工具了解接口自动化测试原理，即可以写代码做接口自动化，也能够用工具做接口自动化，满足不同企业场景</Text>
                    </div>

                    <Card bordered={false}>
                        <Card.Grid style={this.gridStyle}>
                            <MyIcon type="icon-python" style={{fontSize:46,marginBottom:10,color:'#34a853'}} />
                            <h2 style={this.titleStyle}>Python3基础</h2>
                            <div>从0到1,大量基础练习<br/>
                            助你掌握Python基础，从容应对各种场景。</div>
                        </Card.Grid>
                        <Card.Grid style={this.gridStyle}>
                            <MyIcon type="icon-postman-seeklogocom"  style={{fontSize:46,marginBottom:10}}/>
                            <h2 style={this.titleStyle}>Postman高级运用</h2>
                            <div>
                                从功能测试到自动化测试<br/>
                                数据关联，数据驱动，Newman工具，深入理解Postman。
                            </div>
                        </Card.Grid>
                        <Card.Grid style={this.gridStyle}>
                            <MyIcon type="icon-jenkins"  style={{fontSize:46,marginBottom:10,color:'#1296db'}}/>
                            <h2 style={this.titleStyle}>Jenkins持续集成</h2>
                            <div>
                                搭建可持续集成环境<br/>
                                不仅可以用在接口自动化测试，也同时用到其它项目，做到一通百通。
                            </div>
                        </Card.Grid>
                        <Card.Grid style={this.gridStyle}>
                            <Icon type="fire" style={{fontSize:46,marginBottom:10,color:'#d81e06'}} />
                            <h2 style={this.titleStyle}>项目驱动</h2>
                            <div>依托开源项目<br/>
                            根据真实在线产品，搭建测试环境，理论与实际结合，学以致用。
                            </div>
                        </Card.Grid>

                    </Card>
                </Content>
                <Content style={{ background: '#fff', margin: 25, borderRadius: 15, padding: "45px 100px" }}>
                    <div style={{   marginBottom:45}}>
                        <Title style={{textAlign: "center"}} >课程目录</Title>
                        <CourseList/>
                    </div>
                </Content>
                     
                <Content style={{ background: '#fff', margin: 25, borderRadius: 15, padding: 45 }}>
                    <div style={{ textAlign: "center" ,marginBottom:45}}>
                        <Title >注重培养学习方法</Title>
                        <Text>学习一门技术，不应该仅仅只是学习一门技术，应该是学会一种学习方法，在未来的学习中，能够不变应万变</Text>
                    </div>
                    <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={this.data}
                    renderItem={item => (
                    <List.Item>
                        <Card bordered={false} style={{textAlign:"center"}} hoverable>
                            <MyIcon type={item.icon} style={{fontSize:60,marginBottom:20}}/>
                            <h2>{item.title}</h2>
                            <div>
                                {item.content}
                            </div>
                        </Card>
                    </List.Item>
                    )}
                />
                </Content>
                
                <Content style={{ background: '#fff', margin: 25, borderRadius: 15, padding: 45 }}>
                    <div style={{ textAlign: "center" ,marginBottom:45}}>
                        <Title >常见问题</Title>
    
                    </div> 
                    <Paragraph>
                        <Title level={4}>上课方式是什么？</Title>
                        <Text>我们的上课方式以线上与线下相结合的上课方式。根据艾宾浩斯遗忘曲线，复习的最佳时间是记材料后的1—24小时，最晚不超过2天，在这个区段内稍加复习即可恢复记忆。考虑到工作日大家上班没有时间学习，会在工作日晚上20:30直播学习，直播视频提供录播观看，周末组织线下学习，把大家聚在一起，平时直播内容通过项目实战结合起来，达到学以致用。另外所有教学视频可以在线观看</Text>
                    </Paragraph>
                    <Paragraph>
                        <Title level={4}>本次课程的主要内容是什么？</Title>
                        <Text>我们的上课方式以线上与线下相结合的上课方式。根据艾宾浩斯遗忘曲线，复习的最佳时间是记材料后的1—24小时，最晚不超过2天，在这个区段内稍加复习即可恢复记忆。工作日大家上班没有时间学习，我们会在晚上下班时间进行直播，大家通过直播平台学习，周末组织线下学习，把大家聚在一起，平时工作日直播讲一些基础概念，周末线下以项目为驱动，把工作日学习内容串联起来，达到学以致用。</Text>
                    </Paragraph>
                    <Paragraph>
                        <Title level={4}>我没有python基础可以学吗？</Title>
                        <Text>我们的课程是面向零基础的小伙伴订制设计的，课程由浅入深，层层递进，并且老师会用通俗易懂的语言讲解知识点。学习遇到问题老师会集中时间用直播的方式解答大家的问题，帮大家掌握所学知识，没有任何基础是可以学习的。</Text>
                    </Paragraph>
                    <Paragraph>
                        <Title level={4}>更多咨询</Title>
                        <Text>也可以咨询我们的专业老师进行咨询回答。</Text>
                    </Paragraph>

                </Content>  
                
            </Layout>
        
        )
    }
}



class CourseList extends Component {
    public text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

    public dataList =[
        {title:'Python3基本操作',content:'Python环境配置-开发环境配置以及开发工具配置-声明变量与基础数据结构-字符串操作-列表与元组-条件循环-while循环-break与continue-字典以及字典，元组，列表数据转换'},
        {title:'Python3进阶',content:'函数的定义与传递参数-函数的迭代器与生成器-lamdba表达式-模块的使用'},
        {title:'Python3面线对象',content:'错误与异常-类和实例-类变量-类方法和静态方法-特殊方法与属性方法'},
        {title:'Pyhton3文件处理',content:'文件处理模块-csv文件读写-excel文件处理'},
        {title:'Postman接口功能测试',content:'接口是什么？-Postman做接口功能测试操作-Postman数据驱动'},
        {title:'Postman接口自动化',content:'JavaScript基础知识以及json数据解析-变量，断言，Pre Request，Test-数据关联-newmen使用'},
        {title:'Requests库的使用',content:'安装，get，post请求-cookie使用-用户认证-文件上传'},
        {title:'Pytest单元测试框架',content:'安装，快速上手-断言，运行，测试报告-测试套件-数据驱动-测试用例组织方式'},
        {title:'项目实战',content:'pytest+requests项目实战'},
        {title:'Jenkins持续集成',content:'部署Jenkins，Jenkins功能介绍-构建job-配置定时任务-测试报告-邮件通知'},
        {title:'Jenkins项目实战',content:'Jenkins+newman基于Postman的接口自动化测试-Jenkins+pytest+requests实现Python的接口自动化'}


    ]
    render() {
        const customPanelStyle = {
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden',
          };
      return (
  
        <Collapse
        bordered={false}
        defaultActiveKey={['none']} >
        {this.dataList.map((val,index)=>(
            <Panel key={index.toString()} header={val.title} style={customPanelStyle}>
                <ul>
                    {val.content.split('-').map((v,index)=>(<li key={index}>{v}</li>))}
                </ul>
            </Panel>
        ))}
        </Collapse>
      )
    }
  }