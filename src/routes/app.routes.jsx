// rotas privadas - 
import { Routes, Route } from 'react-router-dom';

import { Dashboard } from "../pages/Dashboard";
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>  
      <Route path="/" element={<Dashboard />} />    
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}