import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import { POPULAR_URL } from "../utils/urls";

import { fetchData } from "../utils/functions";
import {
  BackendResponse,
  Collection,
  CardData,
  NasaData,
} from "../models/model";

import DescriptiveCard from "../components/DescriptiveCard";

const Popular = () => {
  const [popular, setPopular] = useState<Collection>();

  const fetchNewest = useCallback(async () => {
    const data: BackendResponse = await fetchData(POPULAR_URL);
    setPopular(data.collection);
  }, []);

  useEffect((): void => {
    fetchNewest();
  }, [fetchNewest]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        paddingTop: "24px",
        gap: "24px",
      }}
    >
      {popular?.items.map((item: CardData) => {
        return item.data.map((element: NasaData): JSX.Element => {
          return (
            <DescriptiveCard
              key={element.nasa_id}
              image={item.links[0].href}
              title={element.title}
              center={element.center}
              date={element.date_created}
              description={element.description}
              keywords={element.keywords}
            />
          );
        });
      })}
    </Box>
  );
};

export default Popular;
