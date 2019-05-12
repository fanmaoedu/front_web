import React, { Component } from 'react'
import { Layout } from 'antd'
const { Footer } = Layout;
export default class FooterComponet extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                凡猫教育©2018
            </Footer>
        )
    }
}
