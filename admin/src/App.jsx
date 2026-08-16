import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Layout from "./components/Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import CollectionListPage from "./pages/CollectionListPage.jsx";
import CollectionFormPage from "./pages/CollectionFormPage.jsx";
import PostsListPage from "./pages/PostsListPage.jsx";
import PostFormPage from "./pages/PostFormPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import ActivityLogPage from "./pages/ActivityLogPage.jsx";

// The 12 generic resources all share <CollectionListPage>/<CollectionFormPage>,
// so they're routed through a single dynamic ":uiPath" segment rather than
// one static <Route> per resource — those pages read the resource config via
// useParams(). React Router v6 ranks static segments (posts, settings,
// media, new) above dynamic ones at the same position, so those routes are
// matched first regardless of declaration order.
export default function App() {
  return (
    <BrowserRouter basename="/admin">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />

            <Route path="posts">
              <Route index element={<PostsListPage />} />
              <Route path="new" element={<PostFormPage />} />
              <Route path=":id" element={<PostFormPage />} />
            </Route>

            <Route path="settings" element={<SettingsPage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="activity" element={<ActivityLogPage />} />

            <Route path=":uiPath">
              <Route index element={<CollectionListPage />} />
              <Route path="new" element={<CollectionFormPage />} />
              <Route path=":id" element={<CollectionFormPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
