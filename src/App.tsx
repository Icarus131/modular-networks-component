// App.tsx
import React, { useState } from "react";
import TabbedButtons from "./TabbedButtons"; // Adjust import path as necessary

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Solana"); // Default active tab
  const [rpcUrl, setRpcUrl] = useState(""); // State to hold RPC URL

  const customTabs = [
    {
      name: "Solana",
      rpcUrl: "https://api.devnet.solana.com",
      iconSrc: "sol.png",
    },
    {
      name: "Eclipse",
      rpcUrl: "https://staging-rpc.dev.eclipsenetwork.xyz",
      iconSrc: "eclipse.jpg",
    },
  ];

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <TabbedButtons
        tabs={customTabs}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      {/* You can use rpcUrl elsewhere in your program */}
    </div>
  );
};

export default App;
