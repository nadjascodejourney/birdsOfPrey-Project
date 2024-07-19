import { useContext } from "react";
import { RaptorContext } from "../utils/RaptorContextProvider";

export const RaptorsDataDisplay = () => {
  const { raptors } = useContext(RaptorContext);

  if (!raptors || raptors.length === 0) {
    console.log("No raptors provided or no data available.");
  }

  return (
    <div>
      <h1>Raptors Data Display</h1>
      <ul>
        {raptors.map((raptor) => (
          <li key={raptor._id}>{raptor.name}</li>
        ))}
      </ul>
    </div>
  );
};
