import Demo from './module/demo/index/Demo';
import App from './module/demo/index/App';
import Test from './module/demo/index/Test';
import Extract from './module/demo/index/extract';
import TestDetail from './module/demo/index/TestDetail';
import ttesst from './module/demo/index/ttesst';
import { Router, Route, hashHistory } from 'react-router';
//import  './res/css/style.css';
ReactDOM.render(
      <Router history={hashHistory}>
      <Route path="/" component={App}>
		  <Route path="demo" component={Demo}/>
		  <Route path="test" component={Test}/>
      <Route path="extract" component={Extract}/>
        <Route path="testDetail" component={TestDetail}/>
        <Route path="ttesst" component={ttesst}/>
        </Route>
    </Router>,
    document.getElementById('app')
);