// TabbedButtons.tsx
import React, { useEffect } from "react";

interface Tab {
  name: string;
  rpcUrl: string;
  iconSrc: string;
}

interface TabbedButtonsProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tabName: string) => void;
}

const TabbedButtons: React.FC<TabbedButtonsProps> = ({
  tabs,
  activeTab,
  onTabClick,
}) => {
  useEffect(() => {
    const activeTabInfo = tabs.find((tab) => tab.name === activeTab);
    if (activeTabInfo) {
      console.log(`Using RPC URL: ${activeTabInfo.rpcUrl}`);
      // Make calls here using the activeTabInfo.rpcUrl
    }
  }, [activeTab, tabs]);

  return (
    <div>
      <div role="tablist" className="tabs tabs-boxed">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            role="tab"
            className={`tab ${activeTab === tab.name ? "tab-active" : ""}`}
            onClick={() => onTabClick(tab.name)}
          >
            <img
              src={tab.iconSrc}
              alt={`${tab.name} logo`}
              className="tab-icon"
              width={30}
              padding-right={10}
            />
            {tab.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TabbedButtons;
