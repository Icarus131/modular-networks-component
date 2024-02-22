import React, { useState } from "react";
import TabbedButtons from "./TabbedButtons";

const App: React.FC = () => {
  const customTabs = [
    {
      name: "Solana Devnet", //Example tabs that can be overriden by the user
      rpcUrl: "https://api.devnet.solana.com",
      iconSrc: "sol.png",
    },
    {
      name: "Eclipse Devnet",
      rpcUrl: "https://staging-rpc.dev.eclipsenetwork.xyz",
      iconSrc: "eclipse.jpg",
    },
  ];

  const exampleFunction = (rpcUrl: string, networkName: string) => {
    // Add your arbitrary function here that uses rpcUrl
    console.log(`Setting RPC URL: ${rpcUrl}`);
    // Example: creating alert to confirm the rpcUrl
    alert(
      `Executing custom function with RPC URL: ${rpcUrl} for network: ${networkName}`,
    );
  };

  return (
    <div>
      {/*customTabs prop is passed here. If it is not passed, the default tabs will be displayed*/}
      <TabbedButtons tabs={customTabs} onTabClick={exampleFunction} />
    </div>
  );
};

export default App;
