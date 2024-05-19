// rotas publicas
import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login"
import { SignUp } from "../pages/SignUp";
import { HomePage } from "../pages/HomePage";


export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />  
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}