// @ts-nocheck
import React, { useContext, useState, useEffect } from "react";
import { Checkbox, Collapse, Select, Space } from "antd";
import scss from "./mainFilter.module.scss";
import { CarsContext } from "@/context/CarContext";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const numFormatter = new Intl.NumberFormat("ru-Ru", {
  style: "currency",
  currency: "UZS",
});

const MainFilter: React.FC = () => {
  const { filterValues, setQueries, queries, getModels } =
    useContext(CarsContext);
  const [mountToggle, setMountToggle] = useState(false);
  const [prices, setPrices] = useState<{
    minPrices: { value: number | string; label: string }[];
    maxPrices: { value: number | string; label: string }[];
  }>({
    minPrices: [{ label: "any", value: "" }],
    maxPrices: [{ label: "any", value: "" }],
  });

  const createSelectOptions = (filterItem: filterItemType) => {
    const item = filterValues[filterItem]?.map((item) => ({
      value: item.id,
      label: item.name,
    }));

    return [{ value: "", label: "Any" }, ...item];
  };

  useEffect(() => {
    createMaxPriceOptions();
    createMinPriceOptions();
  }, [queries]);

  const changeHandler = (queryObj: any) => {
    setQueries((prev: any) => ({ ...prev, ...queryObj }));
  };
  const createMinPriceOptions = () => {
    console.log("Min gen");
    const maxLimitIndex = filterValues.maxPrice.findIndex(
      (item) => item === Number(queries.maxPrice)
    );
    if (maxLimitIndex !== -1) {
      const newVals = filterValues.minPrice
        .slice(0, maxLimitIndex)
        .map((price) => ({ value: price, label: numFormatter.format(price) }));
      return setPrices((prev) => ({
        ...prev,
        minPrices: [{ label: "any", value: "" }, ...newVals],
      }));
    }
    const newVals = filterValues.minPrice.map((price) => ({
      value: price,
      label: numFormatter.format(price),
    }));
    return setPrices((prev) => ({
      ...prev,
      minPrices: [{ label: "any", value: "" }, ...newVals],
    }));
  };
  const createMaxPriceOptions = () => {
    const minLimitIndex = filterValues.maxPrice.findIndex(
      (item) => item === Number(queries.minPrice)
    );
    console.log("Max gen>>", minLimitIndex);

    if (minLimitIndex !== -1) {
      const newVals = filterValues.maxPrice
        .slice(minLimitIndex + 1)
        .map((price) => ({ value: price, label: numFormatter.format(price) }));
      return setPrices((prev) => ({
        ...prev,
        maxPrices: [{ label: "any", value: "" }, ...newVals],
      }));
    }
    const newVals = filterValues.minPrice.map((price) => ({
      value: price,
      label: numFormatter.format(price),
    }));
    return setPrices((prev) => ({
      ...prev,
      maxPrices: [{ label: "any", value: "" }, ...newVals],
    }));
  };
  return (
    <div className={`${scss.mainFilter}`}>
      <h2>Filter</h2>
      <Collapse defaultActiveKey={['1']} accordion className={scss.accordion}>
        <Panel className={scss.accordion__panel} header="Maker & Model" key="1">
          <div className={scss.filterItemsWrapper}>
            Maker
            <Select
              onChange={(e) => {
                if (e) {
                  setQueries((prev: any) => ({
                    ...prev,
                    makerId: e,
                    modelId: "",
                  }));
                  getModels(e);
                } else {
                  setQueries((prev: any) => ({
                    ...prev,
                    makerId: "",
                    modelId: "",
                  }));
                }
                setMountToggle((prev) => !prev);
              }}
              defaultValue={queries["makerId"] || ""}
              style={{ width: "100%" }}
              // onChange={handleChange}
              options={createSelectOptions("makers")}
            />
            Model
            <Select
              key={mountToggle}
              disabled={!queries.makerId}
              onChange={(e) => {
                e
                  ? setQueries((prev: any) => ({ ...prev, modelId: e }))
                  : setQueries((prev: any) => ({
                      ...prev,
                      modelId: "",
                    }));
              }}
              defaultValue={queries["modelId"] || ""}
              style={{ width: "100%" }}
              // onChange={handleChange}
              options={createSelectOptions("models")}
            />
          </div>
          {/* <p>{text}</p> */}
        </Panel>
        <Panel className={scss.accordion__panel} header="Price" key="2">
          <div>Min & Max</div>
          <Select
            onChange={(e) => {
              e
                ? setQueries((prev: any) => ({ ...prev, minPrice: e }))
                : setQueries((prev: any) => ({
                    ...prev,
                    minPrice: "",
                  }));

              // createMaxPriceOptions();
            }}
            defaultValue={queries["minPrice"] || ""}
            style={{ width: "50%" }}
            // onChange={handleChange}
            options={prices.minPrices}
            value={queries.minPrice || ""}
          />
          <Select
            onChange={(e) => {
              e
                ? setQueries((prev: any) => ({ ...prev, maxPrice: e }))
                : setQueries((prev: any) => ({
                    ...prev,
                    maxPrice: "",
                  }));
              // createMinPriceOptions();
            }}
            defaultValue={queries["minPrice"] || ""}
            style={{ width: "50%" }}
            // onChange={handleChange}
            options={prices.maxPrices}
            value={queries.maxPrice || ""}
          />
        </Panel>
        <Panel className={scss.accordion__panel} header="Fuel type" key="3">
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(e) =>
              setQueries((prev: any) => ({ ...prev, fuelType: e }))
            }
          >
            <div className={scss.checkBoxWrapper}>
              {filterValues.fuelType.map((item) => (
                <span>
                  <Checkbox
                    onChange={(e) => console.log(e.target.value)}
                    value={item}
                  >
                    {item}
                  </Checkbox>
                </span>
              ))}
            </div>
          </Checkbox.Group>
        </Panel>
     {/*    <Panel className={scss.accordion__panel} header="Features" key="4">
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(e) =>
              setQueries((prev: any) => ({ ...prev, features: e }))
            }
          >
            <div className={scss.checkBoxWrapper}>
              {filterValues.features.map((item) => (
                <span>
                  <Checkbox
                    onChange={(e) => console.log(e.target.value)}
                    value={item}
                  >
                    {item}
                  </Checkbox>
                </span>
              ))}
            </div>
          </Checkbox.Group>
        </Panel> */}
        <Panel className={scss.accordion__panel} header="Color" key="5">
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(e) => setQueries((prev: any) => ({ ...prev, color: e }))}
          >
            <div className={scss.checkBoxWrapper}>
              {filterValues.color.map((item) => (
                <span>
                  <Checkbox
                    onChange={(e) => console.log(e.target.value)}
                    value={item}
                  >
                    {item}
                  </Checkbox>
                </span>
              ))}
            </div>
          </Checkbox.Group>
        </Panel>
      </Collapse>
    </div>
  );
};

type filterItemType = "makers" | "models" | "color" | "features" | "fuelType";

export default MainFilter;

// import styles from "./styles.module.scss";
// import { MainPropType } from "@/shared/types";
// import React from "react";

// function MainFilter({
// 	children,
// 	style,
// 	onClick,
// 	disabled,
// }: MainPropType & { onClick?: () => void; disabled?: boolean }) {
// 	return (
// <div>
// <h2>Filter</h2>

// </div>
// 		// <button
// 		// 	className={styles.button}
// 		// 	style={style}
// 		// 	onClick={onClick}
// 		// 	disabled={disabled}
// 		// >
// 		// 	{children}
// 		// </button>
// 	);
// }
// export default MainFilter;
