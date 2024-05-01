import React from "react";

const FetchBirds = async ({ queryKey }) => {
  const id = queryKey[1].id; // id is the second element in the queryKey array

  const apiKey = "9ff8c06e-8567-4663-afd3-97437c56c116";

  const response = await fetch();

  return <div>FetchBirds</div>;
};

export default FetchBirds;
