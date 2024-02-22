// TabbedButtons.tsx
import React, { useState, useEffect } from "react";

interface Tab {
  name: string;
  rpcUrl: string;
  iconSrc: string;
}

interface TabbedButtonsProps {
  tabs?: Tab[];
  onTabClick: (rpcUrl: string, networkName: string) => void; // Callback function to execute on tab click
}

const TabbedButtons: React.FC<TabbedButtonsProps> = ({
  tabs: initialTabs,
  onTabClick,
}) => {
  // Initialize tabs with default values if not provided by the user
  const [tabs, setTabs] = useState<Tab[]>(
    initialTabs || [
      {
        name: "Solana",
        rpcUrl: "https://api.mainnet-beta.solana.com",
        iconSrc: "sol.png",
      },
      {
        name: "Eclipse",
        rpcUrl: "https://staging-rpc.dev.eclipsenetwork.xyz",
        iconSrc: "eclipse.jpg",
      },
    ],
  );

  const [activeTab, setActiveTab] = useState(tabs[0].name); // Default to first tab

  const handleTabClick = (tabName: string) => {
    const activeTabInfo = tabs.find((tab) => tab.name === tabName);
    if (activeTabInfo) {
      setActiveTab(tabName);
      onTabClick(activeTabInfo.rpcUrl, activeTabInfo.name); // Call the callback function with the rpcUrl of the clicked tab
    }
  };

  return (
    <div>
      <div role="tablist" className="tabs tabs-boxed">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            role="tab"
            className={`tab ${activeTab === tab.name ? "tab-active" : ""}`}
            onClick={() => handleTabClick(tab.name)}
          >
            <img
              src={tab.iconSrc}
              alt={`${tab.name} logo`}
              className="tab-icon"
              width={30}
            />
            {tab.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TabbedButtons;
