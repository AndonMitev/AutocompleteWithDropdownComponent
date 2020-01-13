import React from "react";

export default ({ userSearchedNetworks, removeNetwork }) => {
  return (
    <>
      {userSearchedNetworks.length ? <h2>Looking for:</h2> : null}
      {userSearchedNetworks.map((network, i) => (
        <div key={i}>
          #{network} <span onClick={() => removeNetwork(network)}>X</span>
        </div>
      ))}
    </>
  );
};
