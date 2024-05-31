import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AuthCallbackPage from "./Auth/AuthCallbackPage";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="auth-callback" element={<AuthCallbackPage />}></Route>
    </Routes>
  );
}

export default AppRoutes;
