import React, { Component } from 'react';
import {
  Layout
} from 'antd';
import { BrowserRouter,Route} from 'react-router-dom';


import HeaderComponent from './components/header';
import HomePageComponent from './components/home';
import FooterComponet from './components/foot';
import LoginPageComponent from './components/auth/login';
import RegisterPageComponent from './components/auth/register';
import SoftTestPageComponent from './components/courses/softtest';
import AutotestPageComponent from './components/courses/autotest';
import PerformancePageComponent from './components/courses/performance';
import BigDataComponent from './components/courses/bigdata';
import ProductPageComponet from './components/courses/product';
import UserComponent from './components/user';
import './app.css';


interface appProps {

}

interface appState {
  collapsed: boolean
}

class App extends Component<appProps, appState> {
  render() {
    return (
      <BrowserRouter >
        <Layout className="layout">
          <HeaderComponent />
          <Route exact path="/" component={HomePageComponent} />
          <Route path='/login' component={LoginPageComponent} />
          <Route path='/register' component={RegisterPageComponent} />
          <Route path='/softtest' component={SoftTestPageComponent} />
          <Route path='/autotest' component={AutotestPageComponent} />
          <Route path='/perfotmance' component={PerformancePageComponent} />
          <Route path='/bigdata' component={BigDataComponent} />
          <Route path='/product' component={ProductPageComponet} />
          <Route path='/user' component={UserComponent}/>
          <FooterComponet />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
