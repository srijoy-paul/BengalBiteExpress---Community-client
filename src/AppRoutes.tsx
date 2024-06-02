import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AuthCallbackPage from "./Auth/AuthCallbackPage";
import { ExplorePage } from "./Components/ExplorePage/ExplorePage";
import AllUsersPage from "./Components/AllUsersPage/AllUsersPage";
import { SavedPage } from "./Components/SavedPage/SavedPage";
import { CreatePostPage } from "./Components/CreatePostPage/CreatePostPage";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="auth-callback" element={<AuthCallbackPage />}></Route>
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/all-foodies" element={<AllUsersPage />} />
      <Route path="/saved" element={<SavedPage />} />
      <Route path="/create-post" element={<CreatePostPage />} />
      <Route path="/update-post/:id" />
      <Route path="/posts/:id" />
      <Route path="/foodie/:id" />
      <Route path="/update-foodie-detail/:id" />
    </Routes>
  );
}

export default AppRoutes;
