import React, { useState, useEffect } from "react";

interface RpcUrls {
  [key: string]: string;
}

const TabbedButtons: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Solana");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const rpcUrls: RpcUrls = {
      Solana: "https://api.devnet.solana.com",
      Eclipse: "https://staging-rpc.dev.eclipsenetwork.xyz",
    };

    const rpcUrl = rpcUrls[activeTab];
    connectToBlockchain(rpcUrl);
  }, [activeTab]);

  const connectToBlockchain = (rpcUrl: string) => {
    console.log(`Connecting to blockchain with RPC URL: ${rpcUrl}`);
    // Make calls here using the rpcUrl string that has already been passed to the function
  };

  return (
    <div>
      <div role="tablist" className="tabs tabs-boxed">
        <a
          role="tab"
          className={`tab ${activeTab === "Solana" ? "tab-active" : ""}`}
          onClick={() => handleTabClick("Solana")}
        >
          <img
            src="sol.png"
            alt="solana logo"
            className="tab-icon"
            width={30}
          />
          Solana
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "Eclipse" ? "tab-active" : ""}`}
          onClick={() => handleTabClick("Eclipse")}
        >
          <img
            src="eclipse.jpg"
            alt="Eclipse Logo"
            className="tab-icon"
            width={30}
          />
          Eclipse
        </a>
      </div>
    </div>
  );
};

export default TabbedButtons;
