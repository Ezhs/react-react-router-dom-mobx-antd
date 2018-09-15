import React from 'react';
import {Menu, Icon, Button} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import './../styles/Sider.less';
const SubMenu = Menu.SubMenu;

@withRouter
class Sider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current: '1',
      menuList: [
        {
          title: 'welcome', // 标题
          router: '/', // 路由地址
          iconType: 'ant-design'
        },
        {
          title: '表单页',
          router: 'form',
          iconType: 'form',
          children: [
            {
              title: '基础表单', // 标题
              router: '/form/basic-form'
            }
          ]
        }
      ],
      collapsed: false
    }
  }
  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    // 获取url
    let {location} = this.props;
    let menuWidth = this.state.collapsed ? '80px' : '256px';
    let siderStyle = {
      width: menuWidth,
      height: '100vh'
    }
    return (
      <div className="sider" style={siderStyle}>
        <Button className="btn" type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          ref="Menu"
          inlineCollapsed={this.state.collapsed}
          theme='dark'
          onClick={this.handleClick}
          style={{height: '100%', backgroundColor: '#000'}}
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
                        if (it.iconType) {
                          return (
                            <Menu.Item key={it.router}>
                              <Link to={it.router}>
                                <Icon type={it.iconType} />
                                <span>{it.title}</span>
                              </Link>
                            </Menu.Item>
                          )
                        } else {
                          return (
                            <Menu.Item key={it.router}>
                              <Link to={it.router}>
                                <span>{it.title}</span>
                              </Link>
                            </Menu.Item>
                          )
                        }
                      })
                    }
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={item.router}>
                    <Link to={item.router}>
                      <Icon type={item.iconType} />
                      <span>{item.title}</span>
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