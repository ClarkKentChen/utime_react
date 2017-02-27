/**
 * Created by chenzehua on 17/2/22.
 */
import React from 'react';

import { hashHistory } from 'react-router';

class Demo extends React.Component {

  handleSubmit(){

    hashHistory.push('test')
  }

  render() {
    return (
      <div className="login_bg">
        <div className="login-header">
          <img src="../res/images/login_logo.png"/>
        </div>
        <div className="form_text">
          <form action="" onClick="">
            <ul>
              <li><span><img src="../res/images/zh_001.png"/></span><input type="text" placeholder="账号"/> </li>
              <li><span><img src="../res/images/login_002.png"/></span><input type="password" placeholder="密码"/> </li>
              <li><button onClick={this.handleSubmit}><img src="../res/images/login_btn.png"/>
              </button></li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}


export default Demo;