import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";
import GlobalStyles from "./styles/GlobalStyles";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const Coaches = lazy(() => import("./pages/Coaches"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Members = lazy(() => import("./pages/Members"));
const Settings = lazy(() => import("./pages/Settings"));
const Classes = lazy(() => import("./pages/Classes"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="login" />} />
            <Route element={<Login />} path="login" />
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route element={<Coaches />} path="coaches" />
              <Route element={<Dashboard />} path="dashboard" />
              <Route element={<Classes />} path="Enrollments" />
              <Route element={<Members />} path="members" />
              <Route element={<Settings />} path="settings" />
              <Route element={<PageNotFound />} path="*" />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
