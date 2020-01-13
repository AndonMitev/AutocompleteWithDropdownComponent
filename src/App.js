import React, { useState, useCallback } from "react";
import "./App.css";
import Swaps from "./components/Swaps";
import Search from "./components/Search";
import FoundedSwaps from "./components/FoundedSwaps";

function App() {
  const [userSearchedNetworks, setUserSearchedNetworks] = useState([]);

  const addNetwork = useCallback(network => {
    setUserSearchedNetworks(networks => [...networks, network]);
  }, []);

  const removeNetwork = useCallback(network => {
    setUserSearchedNetworks(networks =>
      networks.filter(net => net !== network)
    );
  }, []);

  return (
    <div className="App">
      <Search addNetwork={addNetwork} />
      <FoundedSwaps
        userSearchedNetworks={userSearchedNetworks}
        removeNetwork={removeNetwork}
      />
      <Swaps userSearchedNetworks={userSearchedNetworks} />
    </div>
  );
}

export default App;
