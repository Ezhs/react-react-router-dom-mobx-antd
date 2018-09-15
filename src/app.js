import React from 'react';
import {BrowserRouter as Router , Route, HashRouter, Switch, Redirect} from 'react-router-dom';
import Welcome from './pages/Welcome/Index';
import List from './pages/List/Index';
import Sider from './components/Sider';
import NotFound from './components/NotFound'

// form 表单页
import BasicForm from './pages/Form/BasicForm/Index';


import './styles/App.css'

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
            <div className="main">
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/form/basic-form" component={BasicForm} />
                {/*  重定向  */}
                {/* <Redirect exact path="/" to={{pathname: '/sub1/'}} /> */}
                <Route  component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    )
  }
}
export default MyApp;

