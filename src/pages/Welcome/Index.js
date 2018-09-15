

import React from 'react';
import {} from 'antd';
let yeomanImage = require('../../images/yeoman.png');
import './Index.less';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="welcome">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">welcome to admin</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
