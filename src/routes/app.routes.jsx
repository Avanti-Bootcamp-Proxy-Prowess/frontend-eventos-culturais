// rotas privadas - 
import { Routes, Route } from 'react-router-dom';

import { Dashboard } from "../pages/Dashboard";
import { Profile } from '../pages/Profile';
import { Categorias } from "../pages/Categorias";
import { Locais } from  "../pages/Locais";
import { Eventos } from "../pages/Eventos";

export function AppRoutes() {
  return (
    <Routes>  
      <Route path="/" element={<Dashboard />} />    
      <Route path="/profile" element={<Profile />} />
      <Route path="/categorias" element={<Categorias />}/>
      <Route path="/locais" element={<Locais />} />
      <Route path="/eventos" element={<Eventos />} />
    </Routes>
  )
}