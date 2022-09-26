import SignUp from "./components/SignUp";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'

function App() {
  return (
  <Router>
    <Routes>
      <Route path = "/" element={<SignUp/>}/>
      <Route path = "/Crud/" element={<SignUp/>}/>
      <Route path = "/crud/" element={<SignUp/>}/>
    </Routes>
  </Router>
  );
}

export default App;
