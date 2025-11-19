import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Link,
} from "react-router-dom";
import { Sun, Activity, TrendingUp, ChevronLeft } from "lucide-react";
import MonitoringPage from "./pages/MonitoringPage";
import PredictionsPage from "./pages/PredictionsPage";

const NavigationLink = ({
  to,
  icon: Icon,
  label,
  isSidebarCollapsed,
  isActive,
}) => {
  const baseClasses =
    "w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200";
  const activeClasses = "bg-blue-600 text-white shadow-lg";
  const inactiveClasses = "text-gray-300 hover:bg-gray-700 hover:text-white";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${
        isActive ? activeClasses : inactiveClasses
      } ${isSidebarCollapsed ? "justify-center" : ""}`}
    >
      <Icon className="w-5 h-5" />
      {!isSidebarCollapsed && <span className="font-medium">{label}</span>}
    </Link>
  );
};

const Sidebar = ({ isSidebarCollapsed, toggleSidebar }) => {
  const location = useLocation();

  return (
    <div
      className={`bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-xl transition-all duration-300 ease-in-out relative h-full flex flex-col ${
        isSidebarCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex-1">
        <div
          className={`p-6 border-b border-gray-700 ${
            isSidebarCollapsed ? "flex justify-center" : ""
          }`}
        >
          <div className="flex items-center space-x-3">
            <Sun className="w-8 h-8 text-blue-400" />
            {!isSidebarCollapsed && (
              <div>
                <h1 className="text-xl font-bold text-white">Solar AI</h1>
                <p className="text-xs text-gray-400">Power Analytics</p>
              </div>
            )}
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <NavigationLink
            to="/monitoring"
            icon={Activity}
            label="Monitoring"
            isSidebarCollapsed={isSidebarCollapsed}
            isActive={location.pathname === "/monitoring"}
          />
          <NavigationLink
            to="/predictions"
            icon={TrendingUp}
            label="Predictions"
            isSidebarCollapsed={isSidebarCollapsed}
            isActive={location.pathname === "/predictions"}
          />
        </nav>
      </div>

      <div className="p-4 border-t border-gray-700">
        {isSidebarCollapsed ? (
          <div
            className="text-xs text-center text-green-400 mb-3"
            title={`System Status: Online | Last Updated: ${new Date().toLocaleTimeString()}`}
          >
            <Activity className="w-5 h-5 mx-auto animate-pulse" />
          </div>
        ) : (
          <div className="text-xs text-gray-400 mb-3">
            <div className="mb-2">
              System Status: <span className="text-green-400">Online</span>
            </div>
            <div>Last Updated: {new Date().toLocaleTimeString()}</div>
          </div>
        )}

        <button
          onClick={toggleSidebar}
          className={`w-full flex items-center px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 ${
            isSidebarCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          {!isSidebarCollapsed && <span className="font-medium">Collapse</span>}
          <ChevronLeft
            className={`w-5 h-5 transition-transform duration-300 ${
              isSidebarCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />

        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/monitoring" replace />} />
              <Route path="/monitoring" element={<MonitoringPage />} />
              <Route path="/predictions" element={<PredictionsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
