import React, { useState, memo } from "react";
import { NETWORKS } from "../../constants/";

export default memo(({ addNetwork }) => {
  const [network, setNetwork] = useState("");

  const handleTyping = event => {
    setNetwork(event.target.value);
  };

  const handleOnBlur = () => {
    if (network) {
      addNetwork(network);
      setNetwork("");
    }
  };

  return (
    <>
      <input
        value={network}
        onChange={handleTyping}
        onBlur={handleOnBlur}
        list="networks"
      />
      <datalist id="networks">
        {NETWORKS.map((net, idx) => (
          <option key={idx} value={net} />
        ))}
      </datalist>
    </>
  );
});
