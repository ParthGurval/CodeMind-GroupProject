import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';



//import react router dom component
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddEmployee from './Component/CRUD_using_context_api/AddEmployee'
import EmployeeList from './Component/CRUD_using_context_api/EmployeeList.jsx'
import EditEmployee from './Component/CRUD_using_context_api/EditEmployee';
import EmployeeView from './Component/CRUD_using_context_api/EmployeeView';

import { EmployeeProvider } from './Component/CRUD_using_context_api/EmployeeStore';

function App() {



  return (
    <div className="App">


      <Router>
        <EmployeeProvider>
          <Routes>
            <Route exact path='/' element={<EmployeeList/>}></Route>
            <Route exact path='/addEmployee' element={<AddEmployee/>}> </Route>
            <Route  exact path='/editEmployee/:id' element={<EditEmployee/>}></Route> 
            <Route path="/viewEmployee/:id" element={<EmployeeView />} />
          </Routes>
        </EmployeeProvider>
        
      </Router>
    </div>
  );
}

export default App;
