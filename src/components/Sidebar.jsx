import { X } from "lucide-react";

export default function Sidebar({
  isOpen,
  setIsOpen,
  isMobile,
  activeTab,
  setActiveTab,
}) {
  const isActive = (tab) => {
    return activeTab === tab ? "bg-[#001524]" : "";
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static h-full bg-black text-white z-30 transition-all duration-300 ${
          isOpen ? "w-64 left-0" : "w-0 -left-64 md:w-0 md:left-0"
        } overflow-hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Welcome</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded bg-[#001524] focus:outline-none"
            aria-label="Close sidebar"
          >
            <X />
          </button>
        </div>
        <nav className="space-y-2 p-4">
          <button
            onClick={() => handleTabClick("dashboard")}
            className={`block w-full text-left p-3 rounded transition ${isActive(
              "dashboard"
            )}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => handleTabClick("add-advocate")}
            className={`block w-full text-left p-3 rounded transition ${isActive(
              "add-advocate"
            )}`}
          >
            Add Advocate
          </button>
          <button
            onClick={() => handleTabClick("search-advocate")}
            className={`block w-full text-left p-3 rounded transition ${isActive(
              "search-advocate"
            )}`}
          >
            Search Advocate
          </button>
        </nav>
      </div>
    </>
  );
}
