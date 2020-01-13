import React, { memo, useMemo, useState, useRef } from "react";
import { SWAPS } from "../../constants/";

export default memo(({ userSearchedNetworks }) => {
  const [swaps, setSwaps] = useState(SWAPS);
  const isInitialRender = useRef(true);

  useMemo(() => {
    if (userSearchedNetworks.length === 1) {
      setSwaps(() =>
        SWAPS.filter(
          ([firstNetwork]) =>
            firstNetwork === userSearchedNetworks[0].toUpperCase()
        )
      );
    } else if (userSearchedNetworks.length === 2) {
      setSwaps(swaps =>
        swaps.filter(
          ([_, secondNetwork]) =>
            secondNetwork === userSearchedNetworks[1].toUpperCase()
        )
      );
    } else if (!userSearchedNetworks.length) {
      if (!isInitialRender.current) {
        setSwaps(SWAPS);
      } else {
        isInitialRender.current = false;
      }
    }
  }, [userSearchedNetworks]);

  return (
    <>
      <h2>Completed swaps:</h2>
      {swaps.map(([from, to], idx) => (
        <div key={idx}>
          {from} - {to}
        </div>
      ))}
    </>
  );
});
