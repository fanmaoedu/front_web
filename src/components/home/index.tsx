import React, { Component } from 'react';
import BannerComponent from './banner';
import DetailComponent from './detail';

export default class HomePageComponent extends Component {
  render() {
    return (
      <React.Fragment>
          <BannerComponent />
          <DetailComponent />
      </React.Fragment>
    )
  }
}
