import React from "react";
import LeftPanel from "./components/LeftPanel";
import CenterPanel from "./components/CenterPanel";
import RightPanel from "./components/RightPanel";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-[#03061C] text-black dark:text-white p-5 gap-5">
      {/* Left Panel */}
      <div className="md:w-1/4 w-full flex flex-col h-auto">
        <LeftPanel />
      </div>

      {/* Center Panel */}
      <div className="md:w-2/4 w-full flex flex-col h-auto">
        <CenterPanel />
      </div>

      {/* Right Panel */}
      <div className="md:w-1/4 w-full flex flex-col h-auto">
        <RightPanel />
      </div>
    </main>
  );
}
