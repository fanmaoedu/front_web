import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;

export default class HeaderComponent extends Component {
    render() {
        return (
            <Header style={{ background: '#fff', width: '100vw' }}>
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px', }}
                >
                    <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
                    <Menu.Item key="2">关于我们</Menu.Item>
                    <Menu.Item key="3">联系我们</Menu.Item>
                    
                </Menu>
            </Header>
        )
    }
}
