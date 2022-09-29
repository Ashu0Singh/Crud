import SignUp from "./components/SignUp";
import Accounts from "./components/Accounts";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

function App() {
  return (
  <Router>
      <Routes>
        <Route path = "/" element={<SignUp/>}/>
        <Route path = "/Crud/" element={<SignUp/>}/>
        <Route path = "/crud/" element={<SignUp/>}/>
        <Route path = "/Crud/acc" element={<Accounts/>}/>
        <Route path = "/Crud/Acc" element={<Accounts/>}/>
      </Routes>
  </Router>
  );
}

export default App;
