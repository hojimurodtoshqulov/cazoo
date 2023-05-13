import { MainPropType } from "@/shared/types";
import React, { useEffect, useRef, useState, useContext } from "react";
import styles from "./showcaseFilter.module.scss";
import { BiSearch } from "react-icons/bi";
import useIntersectionObserver from "@/utils/InterSectionObserver";
import axios from "axios";
import { API_URL } from "@/shared/constants";
import { CarsContext } from "@/context/CarContext";
import { CarsParams } from "@/hooks/requests";
import { useRouter } from "next/router";

const getMekers = async () => {
  try {
    const data = axios.get(`${API_URL}/maker`);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

function ShowcaseFilter({
  children,
  title,
  paragraph,
}: MainPropType & { title: React.ReactNode; paragraph: string }) {
  const ref = useRef(null);
  const entity = useIntersectionObserver(ref, {});
  const [filterData, setFilterData] = useState({});
  const {
    cars,
    getFilteredCars,
    filterValues,
    setQueries,
    queries,
    getModels,
    setFilterValues,
  } = useContext(CarsContext);

  const router = useRouter();

  useEffect(() => {
    // const searchCars = async () => {
    //   try {
    //     const { data: makers } = await getMekers();
    //     setFilterData((prev) => ({ ...prev, makers }));
    //   } catch (error: any) {
    //     console.log(error);
    //   }
    // };
    // searchCars();
  }, []);

  // const removeQueryParam = (queryKey: string) => {
  //   setQueries((prev: any) => {
  //     const newQueries = Object.assign({}, prev);
  //     delete newQueries[queryKey];
  //     return newQueries;
  //   });
  // };

  const removeQueryParam = (queryKey: string) => {
    setQueries((prev: any) => ({ ...prev, [queryKey]: "" }));
  };

  console.log(queries);

  const handleMakerChange = (e: any) => {
    const makerId = Number(e.target.value);
    console.log(setQueries);
    if (makerId) {
      setQueries((prev: any) => {
        console.log(prev);
        return { ...prev, makerId: makerId };
      });
      getModels(makerId);
    } else {
      console.log("hello");
      removeQueryParam("makerId");
      removeQueryParam("modelId");
    }
  };

  const handleModelChange = (e: any) => {
    const modelId = Number(e.target.value);
    if (modelId) {
      setQueries((prev: any) => ({ ...prev, modelId }));
    } else {
      removeQueryParam("modelId");
    }
  };

  const handleCurrencyChange = (e: any) => {
    const maxPrice = Number(e.target.value);
    if (maxPrice) {
      setQueries((prev: any) => ({ ...prev, maxPrice }));
    } else {
      removeQueryParam("maxPrice");
    }
  };

  console.log(filterValues);

  const numFormat = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "uzs",
  });

  return (
    <div className={styles.showcaseFilter} ref={ref}>
      <h2>Buy or finance</h2>
      <div className={styles.selectDiv}>
        {/* <input type="text" placeholder="maker" />
				<input type="text" placeholder="model" />
				<input type="text" placeholder="price" /> */}
        <select
          value={queries?.makerId}
          onChange={handleMakerChange}
          name="modelId"
        >
          <option value={""}>Select a maker</option>
          {filterValues.makers?.map(
            (maker: { id: number; name: string }, index: number) => {
              return <option value={maker.id}>{maker.name}</option>;
            }
          )}
        </select>
        <select
          value={queries?.maxPrice}
          onChange={handleCurrencyChange}
          name="maxPrice"
        >
          <option value={""}>Select max price </option>
          {filterValues.maxPrice.map((item: number) => {
            return <option value={item}>{numFormat.format(item)}</option>;
          })}
        </select>
        <select
          onChange={handleModelChange}
          // disabled={!Boolean(queries.makerId)}
          name="makerId"
          value={queries?.modelId}
        >
          <option selected>Select a model</option>
          {filterValues.models?.map(
            (model: {
              id: number;
              name: string;
              maker: { id: number; name: string };
            }) => {
              return <option value={model.id}>{model.name}</option>;
            }
          )}
        </select>
        <button
          disabled={!Boolean(cars.length)}
          onClick={() => {
            router.push("buy");
          }}
        >
          {cars.length ? `Search all ${cars.length} cars` : `No cars found`}
        </button>
      </div>
    </div>
  );
}

export default ShowcaseFilter;
