import About from './About';
import Home from './components/Home';
import Resource from './components/Resource';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
//import Training from './components/Training';
import TrainingFn from './components/TrainingFn';
import ImageUpload from './components/testImage'
import FormValidation from './components/FormValidation';
import VerticalBar from './components/ChartFunc.js/VerticalBar';
import MainChart from './components/MainChart';
import ModalExample from './components/ParentScreen';

function App() {
  return (
  
  <HashRouter>
			<Header/>
			<Route exact path="/" component={About}/>
			<Route exact path="/home" component={Home}/>
			<Route exact path="/resource" component={Resource}/>
      {/* <Route exact path="/training" component={Training}/> */}
      <Route exact path="/training" component={TrainingFn}/>
      <Route exact path="/imgUpload" component={ImageUpload}/>
      <Route exact path="/FormValidation" component={FormValidation}/>
      <Route exact path='/vertical-bar' component={MainChart} />
      <Route exact path='/modal' component={ModalExample} />
      </HashRouter>
    
  );
}

export default App;
