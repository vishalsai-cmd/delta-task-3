import './App.css';
import Signup from "./Signup_Component";
import Login from "./Login_Component";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import UserDetails from './UserDetails';
import Search from "./UserSearch";
import UserProfile from "./UserProfile";
import Quizchallenge from "./QuizChallenge";
import Quiz from "./Quiz";

function App() {
  return (
    <Router>
      <div>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Signup />}></Route>
              <Route path="/sign-in" element={<Login />}></Route>
              <Route path="/UserDetails" element={<UserDetails />}></Route>
              <Route path="/Quiz" element={<Quiz />}></Route>
              <Route path="/UserSearch" element={<Search />}></Route>
              <Route path="/UserProfile" element={<UserProfile />}></Route> 
              <Route path="/QuizChallenge" element={<Quizchallenge />}></Route> 
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
