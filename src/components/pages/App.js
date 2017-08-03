// @flow

import React, { Component } from 'react';
import type { Route } from 'react-router';
import { renderRoutes } from 'react-router-config';

import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';

import '../global.css';

type RouteType = {
  routes: Route[];
};

export type AppProps = {
  route: RouteType;
};

export default class App extends Component<*,AppProps,*> {
  
  render() {
    return (
      <div>
        <Header />
        {renderRoutes(this.props.route.routes)}
        <Footer />
      </div>
    );
  }

}
