import React, { Component } from 'react'
import { Layout, Row, Typography, Col, Divider, Table, Collapse, Card } from 'antd';
import OrderTipsComponent from '../common/ordertips';
import autobanner from  '../../../files/autotestbanner.png';

const { Title, Text } = Typography;
const { Panel } = Collapse;

class CourseList extends Component {
  public text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  render() {
    return (

      <Collapse defaultActiveKey={['1']}>
        <Panel header="自动化测试课程设计" key="0" showArrow={false} forceRender={true} disabled style={{ background: '#1a54e7', color: '#fff !important', fontSize: 18, fontWeight: 500 }} />
        <Panel header="第一周 课程介绍" key="1" >
          <div>{this.text}</div>
        </Panel>
        <Panel header="This is panel header 2" key="2" >
          <div>{this.text}</div>
        </Panel>
        <Panel header="This is panel header 3" key="3" >
          <div>{this.text}</div>
        </Panel>
      </Collapse>
    )
  }
}

class OfferComponent extends Component {
  public coloums = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '原岗位', dataIndex: 'oldwork', key: 'oldwork' },
    { title: '原薪水', dataIndex: 'oldpay', key: 'oldpay' },
    { title: '就业单位', dataIndex: 'newwork', key: 'newwork' },
    { title: '单位薪资', dataIndex: 'newpay', key: 'newpay' }
  ]
  public sourcedata = [
    {name:'徐帆',oldwork:'测试工程师',oldpay:'5k',newwork:'京东',newpay:'10k'},
    {name:'徐帆',oldwork:'测试工程师',oldpay:'5k',newwork:'京东',newpay:'10k'},
    {name:'徐帆',oldwork:'测试工程师',oldpay:'5k',newwork:'京东',newpay:'10k'},
    {name:'徐帆',oldwork:'测试工程师',oldpay:'5k',newwork:'京东',newpay:'10k'},
  ]
  render() {
    return (
      <Table columns={this.coloums} dataSource={this.sourcedata} size="small" pagination={false}/>

    )
  }
}

export default class AutotestPageComponent extends Component {
  public columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    }, {
      title: '地区',
      dataIndex: 'area',
      key: 'area',
    }, {
      title: '数量',
      dataIndex: 'number',
      key: 'number',
    }]
  public dataSource = [{
    id: '1',
    area: '上海',
    number: "76888个职位"
  },
  {
    id: '2',
    area: '上海',
    number: "76888个职位"
  }
  ]
  public ContentStyle: any = { padding: '0 50px', marginTop: '5px' }
  public ItemStyle: any = { background: '#fff', padding: 24, minHeight: 280 }

  renderContent = () => {
    return (
      <div style={this.ItemStyle}>
        <Title style={{ textAlign: "center" }}>测试前景</Title>
        <Text style={{ textAlign: "center" }}> 随着互联网IT行业的发展，人们对软件的质量要求越来越高，软件测试岗位供不应求，自动化测试是软件测试发展方向之一，相比与功能测试自动化测试人才更加紧缺，技术含量高，就业薪水不亚于开发。</Text>
        <CourseList />
      </div>
    )
  }

  render() {

    return (
      <React.Fragment>
      <Row className='banner_bg'>
          <Col span={12}>
            <Title style={{color:'#fff',marginTop:25,}}>自动化测试进阶班</Title>
            <span style={{fontSize:24, fontWeight:500}}>理论+实践</span>
            <p>有一定的软件测试基础，<br/>
              进阶自动化测试工程师
            </p>
            <span style={{fontSize:24, fontWeight:500}}>就业班课程设计</span>
              <p>
                从自动化测试小白到1年+自动化测试工程师
              </p>
          </Col>
          <Col span={12}>
            <img src={autobanner} style={{height:300}} ></img>
          </Col>
        </Row>
        
      <Layout style={this.ContentStyle}>
        <div style={this.ItemStyle}>
          <Title style={{ textAlign: "center" }}>测试前景</Title>
          <Text>随着互联网IT行业的发展，人们对软件的质量要求越来越高，软件测试岗位供不应求，自动化测试是软件测试发展方向之一，相比与功能测试自动化测试人才更加紧缺，技术含量高，就业薪水不亚于开发。</Text>
          <Row type='flex' gutter={24}>
            <Col span={12} >
              <Table columns={this.columns} dataSource={this.dataSource} pagination={false} size='small' showHeader={false} title={() => (<div style={{ textAlign: 'center' }}><span style={{ fontSize: 20, fontWeight: 500 }}>招聘需求地区排行</span><span style={{ fontSize: 22, color: 'red', fontWeight: 500 }}>Top10</span></div>)} />
            </Col>
            <Col span={12}>
              <Table columns={this.columns} dataSource={this.dataSource} pagination={false} size='small' showHeader={false} title={() => (<div style={{ textAlign: 'center' }}><span style={{ fontSize: 20, fontWeight: 500 }}>招聘薪资地区排行</span><span style={{ fontSize: 22, color: 'red', fontWeight: 500 }}>Top10</span></div>)} />

            </Col>
          </Row>
        </div>
        <Divider dashed />
        <div style={this.ItemStyle}>
          <Title style={{ textAlign: "center" }}>课程大纲</Title>
          <Text style={{ textAlign: "center" }}>课程从零开始，以实操为住理论为辅，将理论与项目结合起来进行演示过程清晰易懂。</Text>
          <CourseList />
        </div>
        <Divider dashed />
        <div style={this.ItemStyle}>
          <Title style={{ textAlign: "center" }}>老师介绍</Title>
          <Row type="flex" justify='space-around'>
            <Col span={10}>
              <Card

                hoverable
                style={{ textAlign: 'center' }}
                title="敲代码的灰太狼"
              >
                <Text>
                  从事软件开发和软件测试9年，熟悉软件开发和测试流程，
              </Text>
              </Card>
            </Col>
            <Col span={10}>
              <Card
                hoverable
                style={{ textAlign: 'center' }}
                title="敲代码的灰太狼"
              >
                <Text>
                  从事软件开发和软件测试9年，熟悉软件开发和测试流程，
              </Text>
              </Card>
            </Col>
          </Row>
        </div>

        <div style={this.ItemStyle}>
          <Title style={{ textAlign: "center" }}>学生就业</Title>
          <OfferComponent />
        </div>

        <OrderTipsComponent />

      </Layout>
      </React.Fragment>
    )
  }
}
