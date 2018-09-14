import React from 'react';
import {Menu, Icon} from 'antd';
import {Link, withRouter} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

@withRouter
class Sider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      theme: 'dark',
      current: '1',
      menuList: [
        {
          title: 'title', // 标题
          router: 'sub1', // 路由地址
          iconType: 'mail',
          children: [
            {
              title: '首页',
              router: '/sub1/',
              iconType: 'mail'
            }
          ]
        },
        {
          title: '列表',
          router: '/sub1/list',
          iconType: 'mail'
        }
      ]
    }
  }
  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }
  render () {
    // 获取url
    let {location} = this.props;
    let height = document.documentElement.clientHeight || document.body.clientHeight;
    return (
      <div className="sider">
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256, height }}
          defaultOpenKeys={[location.pathname.split('/')[1] || 'sub1']}
          selectedKeys={[location.pathname]}
          mode="inline">
          {/* 菜单 */}
          { this.state.menuList.map(item => {
              // 包含子菜单
              if (item.children) {
                return (
                  <SubMenu key={item.router} title={<span><Icon type={item.iconType} /><span>{item.title}</span></span>}>
                    {
                      item.children.map(it => {
                        return (
                          <Menu.Item key={it.router}>
                            <Link to={it.router}>
                              <Icon type={it.iconType} />
                              {it.title}
                            </Link>
                          </Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={item.router}>
                    <Link to={item.router}>
                      <Icon type={item.iconType} />
                      {item.title}
                    </Link>
                  </Menu.Item>
                )
              }
            })
          }
        </Menu>
      </div>
    )
  }
}

export default Sider;