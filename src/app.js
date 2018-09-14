import React from 'react';
import {BrowserRouter as Router , Route, HashRouter, Switch, Redirect} from 'react-router-dom';
import Main from './pages/Main/Index';
import List from './pages/List/Index';
import Sider from './components/Sider';
import NotFound from './components/NotFound'

class MyApp extends React.Component {
  render () {
    return (
      // hashRouter
      <HashRouter>
        <div className="app">
          {/* 左侧 菜单 menu */}
          <Sider />
          {/* 右侧 页面  */}
          <div className="layout">
            {/* todo 面包屑 */}
            <Switch>
              <Route exact path="/sub1/" component={Main} />
              <Route exact path="/sub1/list" component={List} />
              <Redirect exact path="/" to={{pathname: '/sub1/'}} />
              <Route  component={NotFound} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}
export default MyApp;

