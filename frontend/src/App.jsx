import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import CommunityForum from './pages/CommunityForum';
import LegalRights from './pages/LegalRights'
import Signup from './pages/signup/Signup';
import Chat from './pages/Chat';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import Skill from './pages/skill';
import SuccessStoriesPage from './pages/SuccessStoriesPage';

const App = () => {
  const { authUser } = useAuthContext();

  return (
    <div>
      
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={ <Signup />} />
        <Route path='/chat' element={authUser ? <Chat /> : <Navigate to="/login" />} />
        <Route path="/forum" element={<CommunityForum />} />
        <Route path="/legal" element={<LegalRights />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/story" element={<SuccessStoriesPage />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;