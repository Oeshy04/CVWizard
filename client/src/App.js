import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.min.css"
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Templates from './pages/templates';
import Register from './pages/Register';
import { Button, Space } from 'antd';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Mainpage from './pages/Mainpage';
import CoverLetterForm from './pages/coverletter';
import Community from './pages/Community';
function App() {
  return (
    <div className="App">
      {/* <h1>CVWizard</h1>
      <h5>Create professional CV</h5>
      <Button type='primary'>Create CV</Button> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/templates/:id" element={<ProtectedRoute><Templates/> </ProtectedRoute>} />
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/mainpage" element={<ProtectedRoute><Mainpage/></ProtectedRoute>}/>
          <Route path="/cover" element={<ProtectedRoute><CoverLetterForm/></ProtectedRoute>}/>
          <Route path="/community" element={<ProtectedRoute><Community/></ProtectedRoute>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("CVWizard-user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
