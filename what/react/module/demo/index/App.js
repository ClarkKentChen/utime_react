import React, { Component } from 'react';
import {Link} from 'react-router';

//var hideButton=React.createClass({
//  getInitialState: function(){
//    return {liked:false};
//    },
//  handleClick: function(event){
//      this.setStart({liked: !this.state.liked})
//  },
//  render :function(){
//    var text=this.state.liked ? '喜欢' :'不喜欢'
//  }
//
//
//})


export default class App extends Component {
  constructor(){
    super();
    this.state={close:false};
  }
  hideClick(){
    this.setState({close:false})
  }
  showClick(){
    this.setState({close:true})
  }

//  路由隐藏
  indexClick(){
    this.setState({close:false})
  }
  extract(){
    this.setState({close:false})
  }
  test(){
    this.setState({close:false})
  }
  testDetail(){
    this.setState({close:false})
  }
  ttesst(){
    this.setState({close:false})
  }
  render() {
    return (
      <div>
        <div className="shops_header">
          <i onClick={this.showClick.bind(this)}><img src="../res/images/phone_icon001.png"/></i>MILK COW（南山店）
        </div>
        <div className="navbar_left" style={{display:this.state.close?"block":"none"}}>
          <div className="navbar_left-header">
            <font onClick={this.hideClick.bind(this)}>x</font>  MILK COW（南山店）
          </div>
          <div className="navbar_left-content" >
            <ul>
              <li><Link to="/" onClick={this.indexClick.bind(this)}>全部订单</Link></li>
              <li><Link to="extract" onClick={this.extract.bind(this)}>待自提货订单</Link></li>
              <li><Link to="test" onClick={this.test.bind(this)}>待退货订单</Link></li>
              <li><Link to="testDetail" onClick={this.testDetail.bind(this)}>待退货订单</Link></li>
              <li><Link to="ttesst" onClick={this.ttesst.bind(this)}>资金提现</Link></li>
              <li>资金记录</li>
              <li>会员收益</li>
              <li>消费明细</li>
            </ul>
          </div>
        </div>
        <div>{this.props.children}</div>
      </div>

    );
  }
}