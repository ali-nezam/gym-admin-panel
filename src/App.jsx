import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Coaches from "./pages/Coaches";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Settings from "./pages/Settings";
import Enrollments from "./pages/Enrollments ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route element={<Coaches />} path="coaches" />
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<Enrollments />} path="enrollments" />
          <Route element={<Members />} path="members" />
          <Route element={<Settings />} path="settings" />
        </Route>
        <Route></Route>/
      </Routes>
    </BrowserRouter>
  );
}

export default App;
