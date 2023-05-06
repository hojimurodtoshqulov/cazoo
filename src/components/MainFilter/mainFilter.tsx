import React from "react";
import { Collapse } from "antd";
import scss from "./mainFilter.module.scss";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const MainFilter: React.FC = () => (
	<div className={`${scss.mainFilter} `}>
		<h2>Filter</h2>
		<Collapse accordion className={scss.accordion}>
			<Panel header="This is panel header 1" key="1">
				<p>{text}</p>
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
