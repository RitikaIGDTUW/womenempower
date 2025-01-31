import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import CommunityForum from './pages/CommunityForum';
import LegalRights from './pages/LegalRights'
import Signup from './pages/signup/SignUp';
import Chat from './pages/Chat';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import Skill from './pages/skill';

const App = () => {
  const { authUser } = useAuthContext();

  return (
    <div>
      
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup />} />
        <Route path='/chat' element={authUser ? <Chat /> : <Navigate to="/login" />} />
        <Route path="/forum" element={<CommunityForum />} />
        <Route path="/legal" element={<LegalRights />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;