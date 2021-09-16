import LoginPage from './Login/LoginPage';
import ChangePassword from './Login/ChangePassword';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import AddCompetencyArea from './pages/AddCompetencyArea';
import AddCompetencyDescriptor from './pages/AddCompetencyDescriptor';
import Sidebar from './components/Sidebar';
import CreateTemplate from './pages/CreateTemplate';
import ViewTemplate from './pages/ViewTemplate';
import AssignTemplate from './pages/AssignTemplate';
import AddRatings from './pages/AddRatings';
import ReviewCycle from './pages/ReviewCycle';
import SelfAssessment from './pages/SelfAssessment';
import LeadAssessment from './pages/LeadAssessment';
import AddTemplate from './pages/AddTemplate';
import LastLeadAssessment from './pages/LastLeadAssessment';
import LastSelfAssessment from './pages/LastSelfAssessment';
import NotFound from './pages/NotFound';

function App() {

  //localStorage.clear();

  return (
    <div className="App">
      <Router>
        <Switch>
      <Route path='/login' component={LoginPage}/>
      <Route path='/ChangePassword' component={ChangePassword}/>
      {! (localStorage.getItem('id')) && <Redirect push to='/login'></Redirect>}
      {
        localStorage.getItem('id') && 
        <div className="wrap">
          <Sidebar></Sidebar>
          <Route path='/AddCompetencyArea' component={AddCompetencyArea}/>
          <Route path='/AddCompetencyDescriptor' component={AddCompetencyDescriptor}/>
          <Route path='/template/addTemplate' component={AddTemplate}/>
          <Route path='/template/createTemplate' component={CreateTemplate}/>
          <Route path='/template/assignTemplate' component={AssignTemplate}/>
          <Route path='/template/viewTemplate' component={ViewTemplate}/>
          <Route path='/selfAssessment' component={SelfAssessment}/>
          <Route path='/leadAssessment' component={LeadAssessment}/>
          <Route path='/rating' component={AddRatings}/>
          <Route path='/reviewCycle' component={ReviewCycle}/>
          <Route path='/lastselfassessment' component={LastSelfAssessment}/>
          <Route path='/lastleadassessment' component={LastLeadAssessment}/>
          <Route path='/logOut' render={()=>{ localStorage.clear(); window.location.reload()}} />
          <Route component={NotFound}/>
        </div>
        } 
      </Switch>
      </Router>
    </div>
  );
}

export default App;
