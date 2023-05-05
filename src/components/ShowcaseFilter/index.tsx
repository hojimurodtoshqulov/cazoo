import { MainPropType } from "@/shared/types";
import React, { useRef } from "react";
import styles from "./showcaseFilter.module.scss";
import { BiSearch } from "react-icons/bi";
import useIntersectionObserver from "@/utils/InterSectionObserver";

function ShowcaseFilter({
	children,
	title,
	paragraph,
}: MainPropType & { title: React.ReactNode; paragraph: string }) {
	const ref = useRef(null);
	const entity = useIntersectionObserver(ref, {});
	const filter = (e: React.ReactNode) => {
		e.preventDefault();
	};
	return (
		<div className={styles.showcaseFilter} ref={ref}>
			<h2>Buy or finance</h2>
			<div className={styles.selectDiv}>
				{/* <input type="text" placeholder="maker" />
				<input type="text" placeholder="model" />
				<input type="text" placeholder="price" /> */}
				<select>
					<option value="">Volga</option>
					<option value="">zaparoj</option>
					<option value="">maskvich</option>
					<option value="">jiguli</option>
				</select>
				<select>
					<option value="">zaparoj </option>
					<option value="">Volga</option>
					<option value="">maskvich</option>
					<option value="">jiguli</option>
				</select>
				<select>
					<option value="">maskvich </option>
					<option value="">zaparoj</option>
					<option value="">Volga</option>
					<option value="">jiguli</option>
				</select>
				<button>search</button>
			</div>
		</div>
	);
}

export default ShowcaseFilter;
