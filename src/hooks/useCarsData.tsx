import React, { useCallback, useEffect, useState } from "react";
import { httpGetCars } from "./requests";
import { CarsParams } from "./requests";

export const useCarsData = (queryParam: CarsParams) => {
  const [cars, setCars] = useState([]);

  const getFilteredCars = useCallback(async () => {
    const fetchedCars = await httpGetCars(queryParam);
    setCars(fetchedCars);
  }, []);

  useEffect(() => {
    getFilteredCars();
  }, [getFilteredCars]);

  return { cars };
};
