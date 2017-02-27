import React from 'react';
import { Table, Popconfirm, Button } from 'antd';

var names = ['150', '888', '999'];

class Test extends React.Component {
  render() {
    return (
      <div>
        <div className="test_detail-header">
          <div className="test_detail-header-left">
            <img src="//gw2.alicdn.com/bao/uploaded/i4/419012488/TB2Z_Upca9I.eBjy0FeXXXqwFXa_!!419012488.jpg_210x210.jpg"/>
          </div>
          <div className="test_detail-header-main">
            <ul>
              <li>小白鞋女系  </li>
              <li className="p_red">¥ 78  </li>
              <li >x 1 </li>
            </ul>
          </div>
          <div className="test_detail-header-right">
            <span className="test_redius phone_small_radius"> 退款</span>
          </div>
        </div>
        <div className="test_detail-content">
          <ul>
            <li><font>用户手机</font><span>12345678901</span> </li>
            <li><font>实付金额</font> <span>¥ 26</span> </li>
            <li><font>购买数量</font><span>1</span> </li>
            <li><font>购买商品</font><span>小女生白鞋</span></li>
            <li><font>付款时间</font><span>2015-02-03 12:21:12</span> </li>
            <li><font>收货方式</font><span>到店自取</span></li>
            <li><font>提货凭证</font><span>2222</span></li>
            <li><font>当前状态</font><span>等到收货</span></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Test;