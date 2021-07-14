import React, { Component, Fragment } from 'react';
import { GlobalStyled } from './style.js';
import { GlobalIconStyled } from './statics/iconfont/iconfont';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalIconStyled/>
        <GlobalStyled/>
        <Provider store={store}>
          <BrowserRouter>
            <Header/>
            <Route path = '/' exact component = {Home}></Route>
            <Route path = '/detail/:id' exact component = {Detail}></Route>
            <Route path = '/login' exact component = {Login}></Route>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
