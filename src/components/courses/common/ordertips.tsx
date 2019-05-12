import React, { Component } from 'react'
import { Affix, Button } from 'antd';
export default class OrderTipsComponent extends Component {
    render() {
        return (
            <Affix offsetBottom={5}>
                <div style={{ background: '#1a54e7', height: "60px", borderRadius: "25px", padding: ' 15px 55px' }}>
                    <span style={{ color: "#fff", lineHeight: '30px', fontSize: 24 }}>软件测试全程测试班</span>
                    <span style={{ color: "#fff", lineHeight: '30px', fontSize: 24, marginLeft: 30 }}>仅售¥5880</span>
                    <Button shape="round" type="primary" style={{ float: 'right', }}>电话咨询</Button>
                    <Button shape="round" style={{ float: 'right', margin: '0 20px' }}>立即购买</Button>
                </div>
            </Affix>
        )
    }
}