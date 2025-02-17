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
import NGOs from './pages/NGO';
import SuccessStoriesPage from './pages/SuccessStoriesPage';

const App = () => {
  const { authUser } = useAuthContext();

  return (
    <div>
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/story" element={<SuccessStoriesPage />} />

        {/* Protected Routes */}
        <Route path="/chat" element={authUser ? <Chat /> : <Navigate to="/login" />} />
        <Route path="/forum" element={authUser ? <CommunityForum /> : <Navigate to="/login" />} />
        <Route path="/legal" element={<LegalRights /> }/>
        <Route path="/skill" element={authUser ? <Skill /> : <Navigate to="/login" />} />
        <Route path="/ngos" element={<NGOs />} /> {/* Add route for NGOs page */}

        {/* Authentication Routes */}
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;