import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { ROUTES } from "./utils/constants";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import HostSession from "./pages/HostSession";
import JoinSession from "./pages/JoinSession";
import { SessionProvider } from "./context/sessionContext";
import { Toaster } from "react-hot-toast";

function Layout({ children, showHeader = true, showFooter = true }) {
  return (
    <>
      {showHeader && <Header />}
      {/* Dynamic padding and dark background for all pages */}
      <main className={`${showHeader ? "pt-16" : ""} min-h-screen bg-[#020617]`}>
        {children}
      </main>
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <SessionProvider>
        <Router>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#0f172a", // Slate-900 for dark mode toast
                color: "#f8fafc",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                backdropFilter: "blur(10px)",
              },
              success: {
                iconTheme: {
                  primary: "#10b981", // Emerald-500
                  secondary: "#0f172a",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ef4444", // Red-500
                  secondary: "#0f172a",
                },
              },
            }}
          />
          
          {/* Main Container with the global dark background */}
          <div className="flex flex-col min-h-screen bg-[#020617] selection:bg-blue-500/30 selection:text-blue-200">
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />

              <Route
                path={ROUTES.LOGIN}
                element={
                  <Layout showHeader={false} showFooter={false}>
                    <Auth />
                  </Layout>
                }
              />
              <Route
                path={ROUTES.REGISTER}
                element={
                  <Layout showHeader={false} showFooter={false}>
                    <Auth />
                  </Layout>
                }
              />

              {/* Protected routes */}
              <Route
                path={ROUTES.DASHBOARD}
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Dashboard />
                    </Layout>
                  </ProtectedRoute>
                }
              />

              <Route
                path={ROUTES.HOST}
                element={
                  <ProtectedRoute>
                    <Layout>
                      <HostSession />
                    </Layout>
                  </ProtectedRoute>
                }
              />

              <Route
                path={ROUTES.JOIN}
                element={
                  <ProtectedRoute>
                    <Layout>
                      <JoinSession />
                    </Layout>
                  </ProtectedRoute>
                }
              />

              {/* 404 Page in Dark Theme */}
              <Route
                path="*"
                element={
                  <Layout showHeader={false} showFooter={false}>
                    <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617]">
                      <div className="relative mb-8">
                        <h1 className="text-[12rem] font-black text-white/5 leading-none select-none">
                          404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-xl font-black uppercase tracking-[0.5em] text-blue-500 italic drop-shadow-2xl">
                            Grid Lost
                          </p>
                        </div>
                      </div>
                      <p className="mb-8 text-xs font-bold tracking-widest uppercase text-slate-500">
                        The requested terminal is not responding
                      </p>
                      <a
                        href="/"
                        className="px-8 py-3 text-xs font-black tracking-widest text-white uppercase transition-all bg-blue-600 shadow-lg hover:bg-blue-500 rounded-xl shadow-blue-600/20 active:scale-95"
                      >
                        Re-establish Link
                      </a>
                    </div>
                  </Layout>
                }
              />
            </Routes>
          </div>
        </Router>
      </SessionProvider>
    </AuthProvider>
  );
}

export default App;