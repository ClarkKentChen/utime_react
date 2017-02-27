import React from 'react';
var names = ['150', '888', '999'];
class Test extends React.Component {
  render() {
    return (
      <div>
        {names.map(function(name){

          return   <div className="shops_content">
            <div className="shops_content_container">
              <div className="shops_content_container-header test_redius">
               <span> 退  货</span>
              </div>
              <div className="shops_content_container-content">
                <ul>
                  <li>闪光台灯 x1，布偶 x1，铁质小人偶 x1  </li>
                  <li>{name} </li>
                  <li> 18623054203    <font>2016.05.30 12:56:30</font>  </li>
                </ul>
              </div>
              <div className="shops_content_container-footer">
                <a href="#">接受退货</a>
              </div>
            </div>
          </div>
        })
        }

        <div className="shops_content">
          <div className="shops_content_container">
            <div className="shops_content_container-header">
              5356
            </div>
            <div className="shops_content_container-content">
              <ul>
                <li>闪光台灯 x1，布偶 x1，铁质小人偶 x1  </li>
                <li>￥125  </li>
                <li> 18623054203    <font>2016.05.30 12:56:30</font>  </li>
              </ul>
            </div>
            <div className="shops_content_container-footer">
              <a href="#">确认提货</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Test;








