"use client";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import AddAdvocate from "@/components/Dashboard/AddAdvocate";
import DashboardPage from "@/components/Dashboard/DashboardPage";
import SearchAdvocate from "@/components/Dashboard/SearchAdvocate";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);

      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardPage />;
      case "add-advocate":
        return <AddAdvocate />;
      case "search-advocate":
        return <SearchAdvocate />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          isMobile={isMobile}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="flex-1 p-4 md:p-6 overflow-auto transition-all duration-300 ml-0">
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="mb-4 p-2 bg-black text-white rounded"
              aria-label="Open sidebar"
            >
              <Menu />
            </button>
          )}
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
}
