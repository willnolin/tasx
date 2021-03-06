import './App.css';
import { useState } from 'react'
import { useHistory } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import MainContainer from "./components/MainContainer"
import Login from './components/Login';
import Register from './components/Register';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './services/auth'
import Layout from './components/Layout';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();
  
  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData);
      history.push("/")
   
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleVerify = async () => {
    const data = await verifyUser();
    setCurrentUser(data)
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };
  
  return (
    <div className="App">
      <Layout handleVerify={handleVerify} handleLogout={handleLogout}>
      <Switch>
        <Route path="/login">
          <Login handleLogin={handleLogin}/>
        </Route>
        <Route path="/register">
          <Register handleRegister={handleRegister}/>
        </Route>
          
        <Route path="/">
          <MainContainer
            handleVerify={handleVerify}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
