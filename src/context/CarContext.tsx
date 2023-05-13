import { httpGetCars, httpGetMakers, httpGetModels } from "@/hooks/requests";
import { CarsParams } from "../hooks/requests";
import React, {
  useState,
  createContext,
  useMemo,
  useCallback,
  useEffect,
} from "react";

export const CarsContext = createContext({
  filterValues: {} as IfilterValues,
  cars: [],
  getFilteredCars: (reqPrams: any) => {},
  queries: {},
  setQueries: (queryObj: any) => {},
  getModels: (makerId: number) => {},
  setFilterValues: (filterObj: any) => {},
});

const CarDataProvider = ({ children }: any) => {
  const [cars, setCars] = useState([]);
  const [filterValues, setFilterValues] = useState({
    makers: [],
    models: [],
    color: [
      "WHITE",
      "BLACK",
      "SILVER",
      "BLUE",
      "RED",
      "GREY",
      "GREEN",
      "YELLOW",
      "BROWN",
      "ORANGE",
      "GOLD",
      "PURPLE",
      "MULTICOLOR",
    ],
    features: [
      "ACTIVE_CRUISE_CONTROL",
      "AIR_CON",
      "ALLOYS",
      "BLUETOOTH",
      "CD_PLAYER",
      "CRUISE_CONTROL",
      "DAB",
      "DVD_PLAYER",
      "HEAD_UP_DISPLAY",
      "HEATED_SEATS",
      "HEATED_WINDSCREEN",
      "KEYLESS_ENTRY",
      "LEATHER_SEATS",
      "METALLIC_PAINT",
      "PADDLE_SHIFT",
      "PARKING_CAMERA",
      "PARKING_SENSORS",
      "PREMIUM_SOUND_SYSTEM",
      "PRIVACY_GLASS",
      "SAT_NAV",
      "SELF_PARKING",
      "START_STOP_TECHNOLOGY",
      "SUNROOF",
      "TOWBAR",
    ],
    fuelType: ["METAN", "PROPAN", "PETROL", "DIESEL", "ELECTRIC", "HYBRID"],
    maxPrice: [
      150000000, 200000000, 250000000, 300000000, 350000000, 400000000,
      450000000, 500000000,
    ],
  });
  const [queries, setQueries] = useState<CarsParams>({});

  const getFilteredCars = useCallback(async (queryParam: any) => {
    const fetchedCars = await httpGetCars(queryParam);
    setCars(fetchedCars);
  }, []);

  const getMakers = useCallback(async () => {
    const fetchedCars = await httpGetMakers();
    setFilterValues((prev) => ({ ...prev, makers: fetchedCars }));
  }, []);

  const getModels = async (id: number) => {
    const models = await httpGetModels(id);
    setFilterValues((prev) => ({ ...prev, models }));
  };

  useEffect(() => {
    getFilteredCars({});
    getMakers();
  }, [getFilteredCars, getMakers]);

  useEffect(() => {
    getFilteredCars(queries);
    if (!queries.makerId) setFilterValues((prev) => ({ ...prev, models: [] }));
  }, [queries]);

  const memoizedCarData = useMemo(
    () => ({
      cars,
      getFilteredCars,
      filterValues,
      setQueries,
      queries,
      getModels,
      setFilterValues,
    }),
    [cars, filterValues, queries]
  );

  return (
    <CarsContext.Provider value={memoizedCarData}>
      {children}
    </CarsContext.Provider>
  );
};

interface IfilterValues {
  makers: any[];
  models: any[];
  color: string[];
  features: string[];
  fuelType: string[];
  maxPrice: number[];
}

export default CarDataProvider;
