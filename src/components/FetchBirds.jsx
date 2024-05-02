import React, { useEffect, useState } from "react";

const FetchBirds = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  const apiKey = "9ff8c06e-8567-4663-afd3-97437c56c116"; // Your API key

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://nuthatch.lastelm.software/v2/birds`,
          {
            headers: {
              "API-Key": apiKey,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setData(data.entities);
        setLoading(false); // Update loading state when data is fetched

        console.log(data); //* hier ist die data noch da
      } catch (error) {
        throw new Error(`Error fetching birds: ${error.message}`);
      }
    };
    fetchData();
  }, []);

  console.log(data); // hier wird das Array leer

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }

  if (!Array.isArray(data)) {
    return <div>Error: Invalid data format</div>;
  }

  return (
    <div>
      <ul>
        {data.map((bird) => (
          <li key={bird.id}>
            <div>
              <p>Name: {bird.name}</p>
              <p>Scientific Name: {bird.sciName}</p>
              <p>Order: {bird.order}</p>
              <p>Family: {bird.family}</p>
              <p>Status: {bird.status}</p>
              <p>Region: {bird.region.join(", ")}</p>
              <p>
                Wingspan: {bird.wingspanMin} - {bird.wingspanMax}
              </p>
              <p>
                Length: {bird.lengthMin} - {bird.lengthMax}
              </p>
              {/* Render images if available */}
              {bird.images &&
                bird.images.map((image, index) => (
                  <img
                    style={{ width: "10%" }}
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                  />
                ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchBirds;

/* import React from "react";
import { useQuery } from "@tanstack/react-query";

const FetchBirds = ({ queryKey }) => {
  //! Hier ist irgendein Fehler:
  if (!queryKey || queryKey.length < 2) {
    throw new Error("Invalid queryKey");
  }
  const id = queryKey[1].id; //! error: hier kann etwas nicht gefunden/gelesen werden
  console.log(id);

  const apiKey = "9ff8c06e-8567-4663-afd3-97437c56c116";

  const fetchBirds = async () => {
    const response = await fetch(`https://nuthatch.lastelm.software/v2/birds`, {
      headers: {
        "API-Key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const { data } = useQuery(["birds", id], fetchBirds);

  return (
    <div>
      <ul>
        {data.map((bird) => (
          <li key={bird.id}>{bird.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchBirds;
 */
