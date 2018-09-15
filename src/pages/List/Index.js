import React from 'react';
import {Button} from 'antd';
let yeomanImage = require('../../images/yeoman.png');
import {observer, inject} from 'mobx-react'

@inject('store')
@observer
class AppComponent extends React.Component {
  constructor (props) {
    super(props);
  }
  updateStore = () => {
    this.props.store.list.addTodo(123);
  }
  editTitle = (index) => {
    console.log(this.props.store.list.todos[index]);
    this.props.store.list.todos[index].title = parseInt(Math.random() * 100);
  }
  render() {
    console.log(this.props.store.list.todos);
    return (
      <div className="index">
        <Button onClick={this.updateStore}>list</Button>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">list</div>
        {
          this.props.store.list.todos.map((item, index) => {
            return (
              <Button onClick={() => this.editTitle(index)} key={index}>{item.title}</Button>
            )
          })
        }
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
