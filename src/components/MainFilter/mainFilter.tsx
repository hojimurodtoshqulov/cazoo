import React, { useContext } from "react";
import { Collapse, Select } from "antd";
import scss from "./mainFilter.module.scss";
import { CarsContext } from "@/context/CarContext";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const MainFilter: React.FC = () => {
  const { filterValues, setQueries, queries, getModels } =
    useContext(CarsContext);
  console.log(filterValues);
  console.log(queries);
  const createSelectOptions = (filterItem: filterItemType) => {
    const item = filterValues[filterItem]?.map((item) => ({
      value: item.id,
      label: item.name,
    }));

    return [{ value: "", label: "Any" }, ...item];
  };

  const changeHandler = (queryObj: any) => {
    setQueries((prev: any) => ({ ...prev, ...queryObj }));
  };
  return (
    <div className={`${scss.mainFilter}`}>
      <h2>Filter</h2>
      <Collapse accordion className={scss.accordion}>
        <Panel header="Maker & Model" key="1">
          <div className={scss.filterItemsWrapper}>
            <Select
              onChange={(e) => {
                if (e) {
                  setQueries((prev: any) => ({ ...prev, makerId: e }));
                  getModels(e);
                } else {
                  setQueries((prev: any) => ({
                    ...prev,
                    makerId: "",
                    modelId: "",
                  }));
                }
              }}
              defaultValue={queries["makerId"] || ""}
              style={{ width: "100%" }}
              // onChange={handleChange}
              options={createSelectOptions("makers")}
            />
            <Select
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
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
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
